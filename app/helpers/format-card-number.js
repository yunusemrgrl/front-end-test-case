import { CREDIT_CARD_PLACEHOLDERS, CREDIT_CARD_CONFIG } from '@/constants/credit-card';

/**
 * Formats a card number string into groups of 4 digits separated by spaces
 * @param {string} cardNumber - The raw card number string
 * @returns {string} Formatted card number (e.g., "1234 5678 9012 3456")
 */
export const formatCardNumber = (cardNumber) => {
  if (!cardNumber) return CREDIT_CARD_PLACEHOLDERS.CARD_NUMBER;
  
  const digits = cardNumber.replace(/\D/g, '');
  const { GROUP_SIZE, MAX_DISPLAY_LENGTH } = CREDIT_CARD_CONFIG;
  const regex = new RegExp(`(.{${GROUP_SIZE}})`, 'g');
  
  return digits
    .replace(regex, '$1 ')
    .trim()
    .substring(0, MAX_DISPLAY_LENGTH);
};

