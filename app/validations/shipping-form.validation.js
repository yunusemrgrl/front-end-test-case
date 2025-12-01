import { required, email, minLength } from '@vuelidate/validators';

export const shippingFormValidation = {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  phone: { required, minLength: minLength(10) },
  city: { required },
  district: { required },
  address: { required },
};

