import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from "react";

interface CartContextType {
    showCart: boolean;
    setShowCart: Dispatch<SetStateAction<boolean>>;
}


// Create a context with default values
export const CartContext = createContext<CartContextType>({
    showCart: false,
    setShowCart: () => { },
});

// Create a custom hook for easier access to the context
export const useCart = () => useContext(CartContext);

interface CartProviderProps {
    children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
    const [showCart, setShowCart] = useState<boolean>(false);

    return (
        <CartContext.Provider value={{ showCart, setShowCart }}>
            {children}
        </CartContext.Provider>
    );
}