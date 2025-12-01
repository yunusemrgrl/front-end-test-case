export const CHECKOUT_TITLES = {
  PAGE_TITLE: 'Checkout',
  SHIPPING_DETAILS: 'Shipping details',
  PAYMENT_DETAILS: 'Payment details',
  ORDER_SUMMARY: 'Shopping cart summary',
};

export const CHECKOUT_BREADCRUMBS = [
  { label: 'Homepage', isActive: false, to: '/' },
  { label: 'Shopping Cart', isActive: false, to: '' },
  { label: 'Checkout', isActive: true, to: '' },
];

export const SHIPPING_FORM_TEXTS = {
  FIRST_NAME_LABEL: 'First Name *',
  LAST_NAME_LABEL: 'Last Name *',
  EMAIL_LABEL: 'Email Address *',
  PHONE_LABEL: 'Phone Number *',
  CITY_LABEL: 'City *',
  DISTRICT_LABEL: 'District *',
  ADDRESS_LABEL: 'Address *',

  PLACEHOLDERS: {
    PHONE: '+90 (5 _ _ ) _ _ _  _ _  _ _',
    SELECT: 'Please select',
    ADDRESS: 'Enter neighborhood, street, avenue and other information',
  },

  ERROR_MESSAGES: {
    FIRST_NAME_REQUIRED: 'First name is required',
    LAST_NAME_REQUIRED: 'Last name is required',
    EMAIL_INVALID: 'Please enter a valid email',
    PHONE_INVALID: 'Phone number must be at least 10 digits',
  }
};

export const PAYMENT_FORM_TEXTS = {
  CARD_HOLDER_LABEL: 'Card Holder Name *',
  CARD_HOLDER_HELPER_TEXT: 'Full name on card',
  CARD_NUMBER_LABEL: 'Card Number *',
  CARD_NUMBER_HELPER_TEXT: 'Enter digits without spaces',
  EXPIRY_DATE_LABEL: 'Expiry Date *',
  EXPIRY_DATE_HELPER_TEXT: '* Required fields',
  CVV_LABEL: 'CVV *',
  CVV_HELPER_TEXT: '* Required fields',

  PLACEHOLDERS: {
    CARD_HOLDER: 'Full name on card',
    CARD_NUMBER: '0000 0000 0000 0000',
    EXPIRY_DATE: 'MM / YY',
    CVV: 'XXX',
  },

  ERROR_MESSAGES: {
    CARD_HOLDER_REQUIRED: 'Card holder name is required',
    CARD_NUMBER_INVALID: 'Please enter a valid 16-digit card number',
    EXPIRY_DATE_REQUIRED: 'Expiry date is required',
    CVV_INVALID: 'CVV must be 3-4 digits',
  },

  PAY_BUTTON: 'PAY NOW',
};

export const ORDER_SUMMARY_TEXTS = {
  DISCOUNT_PLACEHOLDER: 'Discount code',
  SUBTOTAL: 'Subtotal',
  SHIPPING: 'Shipping',
  TOTAL: 'Total',
  DISCOUNT_LABEL: 'Discount code',
};

export const CART_ITEM_TEXTS = {
  DECREASE_QUANTITY: 'Decrease quantity',
  INCREASE_QUANTITY: 'Increase quantity',
};

// Mock Data for Select Options
export const CITY_OPTIONS = [
  { label: 'Istanbul', value: 'istanbul' },
  { label: 'Ankara', value: 'ankara' },
  { label: 'Izmir', value: 'izmir' },
];

export const DISTRICT_OPTIONS = [
  { label: 'Kadikoy', value: 'kadikoy' },
  { label: 'Besiktas', value: 'besiktas' },
  { label: 'Sisli', value: 'sisli' },
];

