import { CurrencyCode } from "types/storefront.types";

export const formatPrice = (
  amount: number,
  currency: CurrencyCode = "GBP" as CurrencyCode
): string =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
