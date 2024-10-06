import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { cartLinesRemove, cartQuery } from "~/graphql/cart";
import type {
  CartLinesRemoveMutation,
  CartQueryQuery,
} from "types/storefront.generated";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const cartId = formData.get("cartId") as string;
  const lineIds = JSON.parse(formData.get("lineIds") as string);

  const client = createStorefrontApiClient({
    storeDomain: `${process.env.PUBLIC_STORE_DOMAIN}`,
    apiVersion: "2024-10",
    publicAccessToken: `${process.env.PUBLIC_STOREFRONT_API_TOKEN}`,
  });

  try {
    const result = await client.request<CartLinesRemoveMutation>(
      cartLinesRemove,
      {
        variables: { cartId, lineIds },
      }
    );

    if (result.data?.cartLinesRemove?.userErrors.length) {
      return json(
        { errors: result.data.cartLinesRemove.userErrors },
        { status: 400 }
      );
    }

    const updatedCartResult = await client.request<CartQueryQuery>(cartQuery, {
      variables: { cartId },
    });

    if (!updatedCartResult.data?.cart) {
      throw new Error("Failed to fetch updated cart data");
    }

    return json({ cart: updatedCartResult.data.cart });
  } catch (error) {
    console.error("Error removing item from cart:", error);
    return json({ error: "Failed to remove item from cart" }, { status: 500 });
  }
};
