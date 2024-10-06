import { useFetcher } from "@remix-run/react";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { CartFieldsFragment } from "types/storefront.generated";
import { FetcherData } from "types/types";

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

export const CartContext = createContext<CartContextType>({
  showCart: false,
  setShowCart: () => {},
  localCart: initialCart,
  setLocalCart: () => {},
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [localCart, setLocalCart] = useState<CartFieldsFragment>(initialCart);
  const fetcher = useFetcher<FetcherData>();

  useEffect(() => {
    if (fetcher.data && fetcher.data.cart) {
      setLocalCart(fetcher.data.cart);
    }
  }, [fetcher.data]);

  return (
    <CartContext.Provider
      value={{ showCart, setShowCart, localCart, setLocalCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
