// app/context/ShopifyClientContext.tsx
import { createContext, useContext } from "react";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

interface ShopifyClientContextProps {
    client: ReturnType<typeof createStorefrontApiClient>;
}

// Initialize context
const ShopifyClientContext = createContext<ShopifyClientContextProps | undefined>(undefined);

// Provider component
export const ShopifyClientProvider = ({ storeDomain, publicStorefrontToken, children }: { storeDomain: string, publicStorefrontToken: string, children: React.ReactNode }) => {
    // Create the client once when the app initializes
    const client = createStorefrontApiClient({
        storeDomain,
        apiVersion: '2024-10',
        publicAccessToken: publicStorefrontToken,
    });

    return (
        <ShopifyClientContext.Provider value={{ client }}>
            {children}
        </ShopifyClientContext.Provider>
    );
};

// Hook to access the client
export const useShopifyClient = () => {
    const context = useContext(ShopifyClientContext);
    if (!context) {
        throw new Error("useShopifyClient must be used within a ShopifyClientProvider");
    }
    return context.client;
};
