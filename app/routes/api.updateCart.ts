import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { cartLinesAdd, cartLinesUpdate, cartQuery } from "~/graphql/cart";
import type {
  CartFieldsFragment,
  CartQueryQuery,
} from "types/storefront.generated";

export const action: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const variantId = formData.get("variantId") as string;
    const quantity = parseInt(formData.get("quantity") as string);
    const cartId = formData.get("cartId") as string;

    if (!cartId) {
      throw new Error("Cart ID is missing");
    }

    const client = createStorefrontApiClient({
      storeDomain: `${process.env.PUBLIC_STORE_DOMAIN}`,
      apiVersion: "2024-10",
      publicAccessToken: `${process.env.PUBLIC_STOREFRONT_API_TOKEN}`,
    });

    const cartQueryResult = await client.request<CartQueryQuery>(cartQuery, {
      variables: { cartId },
    });

    if (cartQueryResult.data?.cart) {
      const existingLine = cartQueryResult.data.cart.lines.edges.find(
        (edge) => edge.node.merchandise.id === variantId
      );

      if (existingLine) {
        await client.request(cartLinesUpdate, {
          variables: {
            cartId,
            lines: [{ id: existingLine.node.id, quantity }],
          },
        });
      } else {
        await client.request(cartLinesAdd, {
          variables: {
            cartId,
            lines: [{ merchandiseId: variantId, quantity }],
          },
        });
      }

      const updatedCartResult = await client.request<CartQueryQuery>(
        cartQuery,
        {
          variables: { cartId },
        }
      );

      if (updatedCartResult.data?.cart) {
        return json({
          cart: updatedCartResult.data.cart as CartFieldsFragment,
        });
      } else {
        throw new Error("Failed to fetch updated cart data");
      }
    } else {
      throw new Error("Cart not found");
    }
  } catch (error: unknown) {
    let errorMessage = "Failed to update cart";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return json(
      { error: "Failed to update cart", details: errorMessage },
      { status: 500 }
    );
  }
};

export default function UpdateCart() {
  return null;
}
