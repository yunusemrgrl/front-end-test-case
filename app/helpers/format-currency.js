import { CURRENCY_CONFIG, SUPPORTED_CURRENCIES, CURRENCY_SYMBOLS } from '@/constants/currency';

/**
 * Formats a price using JavaScript's native Intl.NumberFormat API
 * @param {number} price - The price to format
 * @param {string} [currencyCode=CURRENCY_CONFIG.DEFAULT_CURRENCY] - Currency code (e.g., 'TRY', 'USD', 'EUR', 'GBP')
 * @param {string} [locale] - Optional locale override (defaults to locale based on currency)
 * @returns {string} Formatted price string (e.g., "123,45 TL" or "$123.45")
 */
export const formatPrice = (price, currencyCode = CURRENCY_CONFIG.DEFAULT_CURRENCY, locale) => {
  const currencyInfo = SUPPORTED_CURRENCIES[currencyCode] || SUPPORTED_CURRENCIES.TRY;
  const defaultLocale = locale || currencyInfo.locale;
  
  const formattedNumber = new Intl.NumberFormat(defaultLocale, {
    minimumFractionDigits: CURRENCY_CONFIG.DECIMAL_PLACES,
    maximumFractionDigits: CURRENCY_CONFIG.DECIMAL_PLACES,
  }).format(price);
  
  const symbol = CURRENCY_SYMBOLS[currencyCode] || CURRENCY_SYMBOLS.TRY;
  
  if (currencyCode === 'TRY' || currencyCode === 'GBP') {
    return `${formattedNumber} ${symbol}`;
  }
  
  return `${symbol}${formattedNumber}`;
};

