import React from "react";

// Styles
import "./CartDrawerItem.css";

interface CartDrawerItemProps {
  name: string;
  variant: string;
  price: number;
  quantity: number;
}

const CartDrawerItem: React.FC<CartDrawerItemProps> = ({
  name,
  variant,
  price,
  quantity,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-item__header">
        <div className="cart-item__product-overview">
          <div className="cart-item__thumbnail" />
          <div className="cart-item__details">
            <h3 className="cart-item__name">{name}</h3>
            <p className="cart-item__variant">{variant}</p>
          </div>
        </div>
        <button className="cart-item__remove">
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
                fill="black"
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
        <span className="cart-item__price">£{price.toFixed(2)}</span>
        <div className="cart-item__quantity">
          <button type="button" name="Minus" onClick={() => {}}>
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
          <span>{quantity}</span>
          <button type="button" name="Plus" onClick={() => {}}>
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
      </div>
    </div>
  );
};

export default CartDrawerItem;
