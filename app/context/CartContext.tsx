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

interface FetcherData {
  cart: CartFieldsFragment;
}

interface CartContextType {
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  localCart: CartFieldsFragment;
  setLocalCart: Dispatch<SetStateAction<CartFieldsFragment>>;
  isUpdating: boolean;
  cartFetcher: ReturnType<typeof useFetcher<FetcherData>>;
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
  isUpdating: false,
  cartFetcher: {} as ReturnType<typeof useFetcher<FetcherData>>, // This is a placeholder and will be overwritten by the actual fetcher
});

export const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [localCart, setLocalCart] = useState<CartFieldsFragment>(initialCart);
  const cartFetcher = useFetcher<FetcherData>();
  const isUpdating = cartFetcher.state !== "idle";

  useEffect(() => {
    if (cartFetcher.data && cartFetcher.data.cart) {
      setLocalCart(cartFetcher.data.cart);
    }
  }, [cartFetcher.data]);

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        localCart,
        setLocalCart,
        isUpdating,
        cartFetcher,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
