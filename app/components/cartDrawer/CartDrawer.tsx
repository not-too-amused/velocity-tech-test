import CartDrawerItem from "../cartDrawerItem/CartDrawerItem";

// Context and hooks
import { useCart } from "~/context/CartContext";

//Types
import { CartQueryQuery } from "types/storefront.generated";

// Styles
import "./CartDrawer.css";

// mock cart items
const cartItems = [
  {
    id: 1,
    name: "Product name",
    variant: "Product flavour",
    price: 10.0,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product name",
    variant: "Product flavour",
    price: 14.0,
    quantity: 1,
  },
];

const CartDrawer = ({ cart }: CartQueryQuery) => {
  console.log("🚀 ~ CartDrawer ~ cart:", cart);
  const { setShowCart } = useCart();

  return (
    <div className="cart-drawer__overlay">
      <button
        className="cart-drawer__btn-close"
        onClick={() => setShowCart(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.37437 0.606533C1.88621 0.118378 1.09476 0.118378 0.606602 0.606533C0.118447 1.09469 0.118446 1.88614 0.606601 2.3743L9.44544 11.2131L0.606602 20.052C0.118446 20.5401 0.118447 21.3316 0.606602 21.8197C1.09476 22.3079 1.88621 22.3079 2.37437 21.8197L11.2132 12.9809L20.052 21.8197C20.5402 22.3079 21.3316 22.3079 21.8198 21.8197C22.308 21.3316 22.308 20.5401 21.8198 20.052L12.981 11.2131L21.8198 2.3743C22.308 1.88614 22.308 1.09469 21.8198 0.606533C21.3316 0.118378 20.5402 0.118378 20.052 0.606533L11.2132 9.44537L2.37437 0.606533Z"
            fill="black"
          />
        </svg>
      </button>
      <div className="cart-drawer">
        <div className="cart-drawer__flex-end-justified">
          <h2 className="cart-drawer__title">Your basket</h2>
          <button className="cart-drawer__btn-clear">Clear all</button>
        </div>
        <hr />
        <div className="cart-drawer__items">
          {cartItems.map((item) => (
            <CartDrawerItem key={item.id} {...item} />
          ))}
        </div>
        <div className="cart-drawer__flex-end-justified">
          <span className="cart-drawer__total-items">
            {cartItems.length} item{cartItems.length !== 1 && "s"}
          </span>
          <span className="cart-drawer__total-value">0.00</span>
        </div>
        <button className="cart-drawer__btn-points">
          Earn 20 points with this order
        </button>
        <button className="cart-drawer__btn-checkout">Checkout now</button>
      </div>
    </div>
  );
};

export default CartDrawer;
