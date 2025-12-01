<template>
  <div class="payment-form">
    <div class="payment-form__header">
      <div class="payment-form__icon-wrapper icon-wrapper">
        <DollarCircleIcon />
      </div>
      <h3 class="payment-form__title">{{ titles.PAYMENT_DETAILS }}</h3>
    </div>

    <div class="payment-form__content">
      <div class="payment-form__fields">
        <div class="payment-form__group">
          <Input v-model="formData.cardHolder" :label="texts.CARD_HOLDER_LABEL"
            :helper-text="texts.CARD_HOLDER_HELPER_TEXT" :placeholder="texts.PLACEHOLDERS.CARD_HOLDER" maxlength="50"
            :has-error="hasFieldError('cardHolder')"
            :error-message="getFieldError('cardHolder', texts.ERROR_MESSAGES.CARD_HOLDER_REQUIRED)"
            @update:modelValue="handleCardHolderInput" @blur="touchField('cardHolder')"
            @keydown="preventNumbers" />
        </div>

        <div class="payment-form__group">
          <Input v-model="formData.cardNumber" :label="texts.CARD_NUMBER_LABEL"
            :helper-text="texts.CARD_NUMBER_HELPER_TEXT" :placeholder="texts.PLACEHOLDERS.CARD_NUMBER" type="tel"
            maxlength="19" :has-error="hasFieldError('cardNumber')"
            :error-message="getFieldError('cardNumber', texts.ERROR_MESSAGES.CARD_NUMBER_INVALID)"
            @update:modelValue="handleCardNumberInput" @blur="touchField('cardNumber')"
            @keydown="preventLetters" />
        </div>

        <div class="payment-form__row">
          <div class="payment-form__group payment-form__group--half">
            <Input v-model="formData.expiryDate" :label="texts.EXPIRY_DATE_LABEL"
              :helper-text="texts.EXPIRY_DATE_HELPER_TEXT" :placeholder="texts.PLACEHOLDERS.EXPIRY_DATE" type="tel"
              maxlength="7" :has-error="hasFieldError('expiryDate')"
              :error-message="getFieldError('expiryDate', texts.ERROR_MESSAGES.EXPIRY_DATE_REQUIRED)"
              @update:modelValue="handleExpiryInput" @blur="touchField('expiryDate')"
              @keydown="preventLetters" />
          </div>
          <div class="payment-form__group payment-form__group--half">
            <Input v-model="formData.cvv" :label="texts.CVV_LABEL" :helper-text="texts.CVV_HELPER_TEXT"
              :placeholder="texts.PLACEHOLDERS.CVV" type="tel" maxlength="4" :has-error="hasFieldError('cvv')"
              :error-message="getFieldError('cvv', texts.ERROR_MESSAGES.CVV_INVALID)"
              @update:modelValue="handleCvvInput" @blur="touchField('cvv')"
              @keydown="preventLetters">
            <template #right-icon>
              <HelpIconFilled />
            </template>
            </Input>
          </div>
        </div>
      </div>

      <div class="payment-form__visual">
        <div class="payment-form__card-container">
          <CreditCardVisual :card-number="formData.cardNumber" :card-holder="formData.cardHolder"
            :expiry-date="formData.expiryDate" />
          <div class="payment-form__cvv-helper">
            <div class="payment-form__gray-signature">
            </div>
            <span class="payment-form__cvv-label">{{ texts.CVV_LABEL.replace(' *', '') }}</span>
            <span class="payment-form__cvv-value">{{ formData.cvv || 'XXX' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Input } from '@/components/ui';
import { DollarCircleIcon, HelpIconFilled } from '@/components/icons';
import CreditCardVisual from '@/components/checkout/CreditCardVisual.vue';
import { CHECKOUT_TITLES, PAYMENT_FORM_TEXTS } from '@/constants/checkout';
import { useFormValidation } from '@/composables/use-form-validation';
import { useInputFormatters } from '@/composables/use-input-formatters';
import { paymentFormValidation } from '@/validations';

export default {
  name: 'PaymentForm',
  components: {
    Input,
    CreditCardVisual,
    DollarCircleIcon,
    HelpIconFilled
  },
  setup(_, { emit }) {
    const initialData = {
      cardHolder: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    };

    const {
      formData,
      v$,
      updateForm,
      touchField,
      getFieldError,
      hasFieldError
    } = useFormValidation(initialData, paymentFormValidation, (data) => {
      emit('update', data);
    });

    const {
      formatCardNumber,
      formatExpiryDate,
      formatCvv,
      formatCardHolder,
      preventNumbers,
      preventLetters
    } = useInputFormatters();

    const handleCardHolderInput = (value) => {
      formData.cardHolder = formatCardHolder(value);
      updateForm();
    };

    const handleCardNumberInput = (value) => {
      formData.cardNumber = formatCardNumber(value);
      updateForm();
    };

    const handleExpiryInput = (value) => {
      formData.expiryDate = formatExpiryDate(value);
      updateForm();
    };

    const handleCvvInput = (value) => {
      formData.cvv = formatCvv(value);
      updateForm();
    };

    return {
      formData,
      v$,
      updateForm,
      touchField,
      getFieldError,
      hasFieldError,
      handleCardHolderInput,
      handleCardNumberInput,
      handleExpiryInput,
      handleCvvInput,
      preventNumbers,
      preventLetters,
      titles: CHECKOUT_TITLES,
      texts: PAYMENT_FORM_TEXTS
    };
  },
  emits: ['update'],
  mounted() {
    this.updateForm();
  }
};
</script>

<style lang="scss" scoped>
.payment-form {
  background: $color-white;

  &__header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;

    @include for-mobile {
      height: 64px;
      background-color: $color-smoke-16;
      padding-inline: 8px;
    }
  }

  &__title {
    font-family: $ff-primary;
    font-size: $text-lg;
    font-weight: $fw-bold;
    color: $color-coal;
    margin: 0;
  }

  &__content {
    display: flex;
    gap: 32px;

    @include for-mobile {
      flex-direction: column;
    }
  }

  &__fields {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &--half {
      flex: 1;
    }
  }

  &__row {
    display: flex;
    gap: 16px;
  }

  &__label {
    font-family: $ff-primary;
    font-size: $text-sm;
    font-weight: $fw-bold;
    color: $color-coal;
  }

  &__visual {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 24px;

    @include for-mobile {
      order: -1;
      display: none;
    }
  }

  &__card-container {
    position: relative;
    padding-right: 40px;
  }

  &__cvv-helper {
    position: absolute;
    top: 20px;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: $color-coal-60;
    transform: translate(40px, 0);
    border: 1px solid $color-smoke;
    box-sizing: border-box;
  }

  &__cvv-label {
    font-size: $text-sm;
    font-weight: $fw-bold;
    color: $color-gray;
    padding-right: 16px;

  }

  &__cvv-value {
    font-size: $text-base;
    font-weight: $fw-medium;
    color: $color-graphene;
    text-transform: uppercase;
    padding-right: 16px;

  }

  &__gray-signature {
    width: 100%;
    height: 38px;
    background: $color-smoke;
    margin-bottom: 16px;
  }
}

:deep(.credit-card) {
  position: relative;
  z-index: 2;
  background: linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 100%);
}
</style>
