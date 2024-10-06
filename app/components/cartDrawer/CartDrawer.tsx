import CartDrawerItem from "../cartDrawerItem/CartDrawerItem";

// Context and hooks
import { useCart } from "~/context/CartContext";
import useDisableScroll from "~/hooks/useDisableScroll";

// Utils
import { formatPrice } from "~/utils/formatPrice";

// Styles
import "./CartDrawer.css";
import { useRef } from "react";
import useClickOutside from "~/hooks/useClickOutside";

const CartDrawer = () => {
  const { setShowCart, localCart, isUpdating, cartFetcher } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  useClickOutside(drawerRef, () => {
    setShowCart(false);
  });

  // disables scroll on body on component mount
  useDisableScroll();

  const totalCartValue = localCart.lines.edges.reduce((total, edge) => {
    const { quantity } = edge.node;
    const price = edge.node.merchandise.price.amount;
    return total + quantity * price;
  }, 0);

  const handleClearAll = () => {
    if (!localCart) return;

    const lineIds = localCart.lines.edges.map((edge) => edge.node.id);

    cartFetcher.submit(
      {
        cartId: localCart.id,
        lineIds: JSON.stringify(lineIds),
      },
      { method: "post", action: "/api/removeFromCart" }
    );
  };

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
      <div className="cart-drawer" ref={drawerRef}>
        <div className="cart-drawer__flex-end-justified">
          <h2 className="cart-drawer__title">Your basket</h2>
          <button
            className="cart-drawer__btn-clear"
            onClick={handleClearAll}
            disabled={isUpdating}
          >
            Clear all
          </button>
        </div>
        <hr />
        <div className="cart-drawer__items">
          {localCart.lines.edges.map((edge, i) => (
            <CartDrawerItem key={i} {...edge.node} />
          ))}
        </div>
        <div className="cart-drawer__flex-end-justified">
          <span className="cart-drawer__total-items">
            {localCart.totalQuantity} item{localCart.totalQuantity !== 1 && "s"}
          </span>
          <span className="cart-drawer__total-value">
            {formatPrice(totalCartValue)}
          </span>
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
