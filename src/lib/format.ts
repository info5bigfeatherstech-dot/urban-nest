/**
 * Indian currency and real estate formatting utilities
 */

/**
 * Formats a number into Indian Lac / Cr format
 * Example:
 * 4500000 -> "₹45 L"
 * 4550000 -> "₹45.5 L"
 * 12500000 -> "₹1.25 Cr"
 * 20000000 -> "₹2 Cr"
 */
export function formatPrice(amount: number, options?: { isRent?: boolean }): string {
  if (amount == null || isNaN(amount)) return "₹Price on Request";

  if (options?.isRent) {
    if (amount >= 100000) {
      const inLacs = (amount / 100000).toFixed(2).replace(/\.00$/, "").replace(/(\.[1-9])0$/, "$1");
      return `₹${inLacs} L/mo`;
    }
    return `₹${amount.toLocaleString("en-IN")}/mo`;
  }

  if (amount >= 10000000) {
    const inCr = (amount / 10000000).toFixed(2).replace(/\.00$/, "").replace(/(\.[1-9])0$/, "$1");
    return `₹${inCr} Cr`;
  }

  if (amount >= 100000) {
    const inLacs = (amount / 100000).toFixed(2).replace(/\.00$/, "").replace(/(\.[1-9])0$/, "$1");
    return `₹${inLacs} L`;
  }

  return `₹${amount.toLocaleString("en-IN")}`;
}

/**
 * Formats a price range
 * Example: (8500000, 15000000) -> "₹85 L - ₹1.5 Cr"
 */
export function formatPriceRange(minPrice: number, maxPrice: number, isRent = false): string {
  if (!minPrice && !maxPrice) return "Price on Request";
  if (minPrice && !maxPrice) return `From ${formatPrice(minPrice, { isRent })}`;
  if (!minPrice && maxPrice) return `Up to ${formatPrice(maxPrice, { isRent })}`;
  if (minPrice === maxPrice) return formatPrice(minPrice, { isRent });
  return `${formatPrice(minPrice, { isRent })} - ${formatPrice(maxPrice, { isRent })}`;
}

/**
 * Formats carpet/super area in sq.ft
 * Example: 1450 -> "1,450 sq.ft"
 */
export function formatArea(sqft: number): string {
  if (!sqft) return "N/A";
  return `${sqft.toLocaleString("en-IN")} sq.ft`;
}

/**
 * Formats Indian number into comma separated representation
 * Example: 15400 -> "15,400"
 */
export function formatNumber(num: number): string {
  if (!num) return "0";
  return num.toLocaleString("en-IN");
}

