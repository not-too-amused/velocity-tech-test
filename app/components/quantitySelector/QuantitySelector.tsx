import { useMemo } from "react";
import { useFetcher } from "@remix-run/react";
import { CartFieldsFragment } from "types/storefront.generated";
import { useCart } from "~/context/CartContext";

// Styles
import "./QuantitySelector.css";

type FetcherData = {
  cart: CartFieldsFragment;
};

const QuantitySelector = ({ variantId }: { variantId: string }) => {
  const fetcher = useFetcher<FetcherData>();
  const { localCart } = useCart();
  const isUpdating = fetcher.state !== "idle";
  const initialQuantity =
    localCart.lines.edges.find((edge) => edge.node.merchandise.id === variantId)
      ?.node.quantity || 0;

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity >= 0) {
      fetcher.submit(
        { variantId, quantity: newQuantity.toString(), cartId: localCart.id },
        { method: "post", action: "/api/updateCart" }
      );
    }
  };

  const quantity = useMemo(() => {
    if (fetcher.data && fetcher.data.cart) {
      const cartLine = fetcher.data.cart.lines.edges.find(
        (edge) => edge.node.merchandise.id === variantId
      );
      return cartLine ? cartLine.node.quantity : initialQuantity;
    }
    return initialQuantity;
  }, [fetcher.data, variantId, initialQuantity]);

  return (
    <div className="quantity-selector">
      <button
        type="button"
        name="Minus"
        onClick={() => handleUpdateQuantity(quantity - 1)}
        disabled={isUpdating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 14.5H18.75C19.164 14.5 19.5 14.164 19.5 13.75C19.5 13.336 19.164 13 18.75 13H8.25C7.836 13 7.5 13.336 7.5 13.75C7.5 14.164 7.836 14.5 8.25 14.5Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <span>
        {isUpdating ? (
          <span className="quantity-selector__skeleton" />
        ) : (
          quantity
        )}
      </span>
      <button
        type="button"
        name="Plus"
        onClick={() => handleUpdateQuantity(quantity + 1)}
        disabled={isUpdating}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
        >
          <rect x="0.5" width="40" height="40" rx="20" fill="#E9ECF0" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.3333 10.8333C21.3333 10.3731 20.9602 10 20.5 10C20.0398 10 19.6667 10.3731 19.6667 10.8333V19.1667H11.3333C10.8731 19.1667 10.5 19.5398 10.5 20C10.5 20.4602 10.8731 20.8333 11.3333 20.8333H19.6667L19.6667 29.1667C19.6667 29.6269 20.0398 30 20.5 30C20.9602 30 21.3333 29.6269 21.3333 29.1667L21.3333 20.8333H29.6667C30.1269 20.8333 30.5 20.4602 30.5 20C30.5 19.5398 30.1269 19.1667 29.6667 19.1667H21.3333L21.3333 10.8333Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;
