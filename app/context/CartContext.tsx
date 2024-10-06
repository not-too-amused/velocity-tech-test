import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { CartFieldsFragment } from "types/storefront.generated";

interface CartContextType {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  localCart: CartFieldsFragment;
  setLocalCart: Dispatch<SetStateAction<CartFieldsFragment>>;
}

const initialCart = {
  id: "",
  totalQuantity: 0,
  lines: { edges: [] },
};

// Create a context with default values
export const CartContext = createContext<CartContextType>({
  showCart: false,
  setShowCart: () => {},
  localCart: initialCart,
  setLocalCart: () => {},
});

// Create a custom hook for easier access to the context
export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [localCart, setLocalCart] = useState<CartFieldsFragment>(initialCart);

  return (
    <CartContext.Provider
      value={{ showCart, setShowCart, localCart, setLocalCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
