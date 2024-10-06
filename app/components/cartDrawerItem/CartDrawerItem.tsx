import "./CartDrawerItem.css";
import QuantitySelector from "../quantitySelector/QuantitySelector";
import { CartLineFieldsFragment } from "types/storefront.generated";
import { useCart } from "~/context/CartContext";
import { formatPrice } from "~/utils/formatPrice";
import { useEffect, useState } from "react";

const CartDrawerItem = ({ id, merchandise }: CartLineFieldsFragment) => {
  const { localCart, cartFetcher } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveItems = () => {
    setIsRemoving(true);
    cartFetcher.submit(
      {
        cartId: localCart.id,
        lineIds: JSON.stringify([id]),
      },
      { method: "post", action: "/api/removeFromCart" }
    );
  };

  useEffect(() => {
    if (
      isRemoving &&
      cartFetcher.state === "idle" &&
      !cartFetcher.data?.cart?.lines.edges.some((edge) => edge.node.id === id)
    ) {
      setIsRemoving(false);
    }
  }, [cartFetcher.state, cartFetcher.data, id, isRemoving]);

  return (
    <div className="cart-item">
      <div className="cart-item__header">
        <div className="cart-item__product-overview">
          <div className="cart-item__thumbnail" />
          <div className="cart-item__details">
            <h3 className="cart-item__name">{merchandise.product.title}</h3>
            <p className="cart-item__variant">{merchandise.title}</p>
          </div>
        </div>
        <button
          className="cart-item__remove"
          onClick={handleRemoveItems}
          disabled={isRemoving}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_202_3101)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.125 8.5V17.25C18.125 18.2169 17.3419 19 16.375 19H7.625C6.65812 19 5.875 18.2169 5.875 17.25V8.5C5.392 8.5 5 8.108 5 7.625C5 7.142 5.392 6.75 5.875 6.75H10.25C10.25 5.78312 11.0331 5 12 5C12.9669 5 13.75 5.78312 13.75 6.75H18.125C18.608 6.75 19 7.142 19 7.625C19 8.108 18.608 8.5 18.125 8.5ZM16.375 8.5H7.625V17.25H16.375V8.5ZM9.375 9.375C9.858 9.375 10.25 9.767 10.25 10.25V15.5C10.25 15.983 9.858 16.375 9.375 16.375C8.892 16.375 8.5 15.983 8.5 15.5V10.25C8.5 9.767 8.892 9.375 9.375 9.375ZM12 9.375C12.483 9.375 12.875 9.767 12.875 10.25V15.5C12.875 15.983 12.483 16.375 12 16.375C11.517 16.375 11.125 15.983 11.125 15.5V10.25C11.125 9.767 11.517 9.375 12 9.375ZM14.625 9.375C15.108 9.375 15.5 9.767 15.5 10.25V15.5C15.5 15.983 15.108 16.375 14.625 16.375C14.142 16.375 13.75 15.983 13.75 15.5V10.25C13.75 9.767 14.142 9.375 14.625 9.375Z"
                fill={isRemoving ? "#e9ecf0" : "black"}
              />
            </g>
            <defs>
              <clipPath id="clip0_202_3101">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(5 5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="cart-item__footer">
        <span className="cart-item__price">
          {formatPrice(
            merchandise.price.amount,
            merchandise.price.currencyCode
          )}
        </span>
        <QuantitySelector variantId={merchandise.id} />
      </div>
    </div>
  );
};

export default CartDrawerItem;
