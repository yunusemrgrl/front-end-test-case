import { required, minLength, maxLength } from '@vuelidate/validators';

export const paymentFormValidation = {
  cardHolder: { required },
  cardNumber: { required, minLength: minLength(19) },
  expiryDate: { required, minLength: minLength(5) },
  cvv: { required, minLength: minLength(3), maxLength: maxLength(4) },
};

