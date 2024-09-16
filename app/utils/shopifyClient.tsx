import { createStorefrontApiClient } from "@shopify/storefront-api-client";

export const getShopifyClient = (storeDomain: string, publicStorefrontToken: string) => {
    return createStorefrontApiClient({
        storeDomain,
        apiVersion: '2024-10',
        publicAccessToken: publicStorefrontToken,
    });
};