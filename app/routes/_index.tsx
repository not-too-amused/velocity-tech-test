import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CartDrawer from "~/components/cartDrawer/CartDrawer";
import Header from "~/components/header/Header";
import Footer from "~/components/footer/Footer";
import ProductCard from "~/components/productCard/ProductCard";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";
import { typedjson } from "remix-typedjson";
import { useEffect } from "react";

// GraphQL
import { getAllProducts } from "~/graphql/products";
import { cartCreate, cartQuery } from "~/graphql/cart";
import {
  CartCreateMutation,
  CartFieldsFragment,
  CartQueryQuery,
  GetAllProductsQuery,
  ProductFieldsFragment,
} from "types/storefront.generated";

// Utils
import { commitSession, getSession } from "~/utils/sessionStorage";

// Context and hooks
import { useCart } from "~/context/CartContext";

// Styles
import indexStyles from "~/styles/routes/index.css?url";

// Types
interface LoaderData {
  products: ProductFieldsFragment[];
  cart: CartFieldsFragment | null;
}

async function getCart(
  client: ReturnType<typeof createStorefrontApiClient>,
  cartId: string | null
) {
  // if there is a cartId stored in the session, attempt to retreive the cart and return it
  if (cartId) {
    const { data: cartData, errors: cartErrors } =
      await client.request<CartQueryQuery>(cartQuery, {
        variables: { cartId },
      });
    if (cartData?.cart && !cartErrors) {
      return { cart: cartData.cart as CartFieldsFragment, isNew: false };
    }
  }

  // if !cartId, create a new cart and return it
  const { data: createCartData, errors: createCartErrors } =
    await client.request<CartCreateMutation>(cartCreate, {
      variables: { input: { lines: [] } },
    });
  if (createCartData?.cartCreate?.cart && !createCartErrors) {
    return {
      cart: createCartData.cartCreate.cart as CartFieldsFragment,
      isNew: true,
    };
  }

  // if a cart cannot be returned, throw an error
  throw new Error("Failed to provide cart");
}

export const loader = async ({ request }: { request: Request }) => {
  const client = createStorefrontApiClient({
    storeDomain: `${process.env.PUBLIC_STORE_DOMAIN}`,
    apiVersion: "2024-10",
    publicAccessToken: `${process.env.PUBLIC_STOREFRONT_API_TOKEN}`,
  });

  // Get cartId from session
  const session = await getSession(request.headers.get("Cookie"));
  const cartId = session.get("cartId");

  try {
    const [productsResult, cartResult] = await Promise.all([
      // get product listings
      client.request<GetAllProductsQuery>(getAllProducts),
      // get a new, or existing cart
      getCart(client, cartId),
    ]);

    const headers = new Headers();
    // update session with new cartId if a new cart was created
    if (cartResult.isNew) {
      session.set("cartId", cartResult.cart.id);
      headers.append("Set-Cookie", await commitSession(session));
    }

    return typedjson<LoaderData>(
      {
        products:
          productsResult.data?.products.edges.map(
            ({ node }) => node as ProductFieldsFragment
          ) ?? [],
        cart: cartResult.cart,
      },
      { headers }
    );
  } catch (error) {
    console.error("Error in loader:", error);
    return json<LoaderData>({ products: [], cart: null }, { status: 500 });
  }
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: indexStyles }];
};

export default function Index() {
  const { products, cart } = useLoaderData<typeof loader>();
  const { showCart, setLocalCart } = useCart();

  useEffect(() => {
    if (cart) setLocalCart(cart);
  }, [cart, setLocalCart]);

  return (
    <>
      <Header />
      <main>
        <div className="page__title">
          <h1>This is a page title</h1>
        </div>
        <div className="product__list">
          {products?.map((product: ProductFieldsFragment) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </main>
      <Footer />
      {showCart && <CartDrawer />}
    </>
  );
}
