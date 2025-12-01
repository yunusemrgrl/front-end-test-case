<template>
  <div class="shipping-form">
    <div class="shipping-form__header">
      <div class="shipping-form__icon-wrapper icon-wrapper">
        <ShippingIcon />
      </div>
      <h4 class="shipping-form__title">{{ titles.SHIPPING_DETAILS }}</h4>
    </div>

    <div class="shipping-form__fields">
      <div class="shipping-form__row">
        <div class="shipping-form__group shipping-form__group--half">
          <Input v-model="formData.firstName" :label="texts.FIRST_NAME_LABEL" placeholder=""
            :has-error="hasFieldError('firstName')"
            :error-message="getFieldError('firstName', texts.ERROR_MESSAGES.FIRST_NAME_REQUIRED)"
            @update:modelValue="updateForm" @blur="touchField('firstName')" />
        </div>
        <div class="shipping-form__group shipping-form__group--half">
          <Input v-model="formData.lastName" :label="texts.LAST_NAME_LABEL" placeholder=""
            :has-error="hasFieldError('lastName')"
            :error-message="getFieldError('lastName', texts.ERROR_MESSAGES.LAST_NAME_REQUIRED)"
            @update:modelValue="updateForm" @blur="touchField('lastName')" />
        </div>
      </div>

      <div class="shipping-form__row">
        <div class="shipping-form__group shipping-form__group--half">
          <Input v-model="formData.email" :label="texts.EMAIL_LABEL" placeholder="" type="email"
            :has-error="hasFieldError('email')"
            :error-message="getFieldError('email', texts.ERROR_MESSAGES.EMAIL_INVALID)" @update:modelValue="updateForm"
            @blur="touchField('email')" />
        </div>
        <div class="shipping-form__group shipping-form__group--half">
          <Input v-model="formData.phone" :label="texts.PHONE_LABEL" :placeholder="texts.PLACEHOLDERS.PHONE" type="tel"
            maxlength="15"
            :has-error="hasFieldError('phone')"
            :error-message="getFieldError('phone', texts.ERROR_MESSAGES.PHONE_INVALID)" @update:modelValue="updateForm"
            @blur="touchField('phone')" />
        </div>
      </div>
      
      <div class="shipping-form__row">
        <div class="shipping-form__group shipping-form__group--half">
          <label class="shipping-form__label">{{ texts.CITY_LABEL }}</label>
          <Select v-model="formData.city" :options="cityOptions" :placeholder="texts.PLACEHOLDERS.SELECT"
            @update:modelValue="handleCityChange" />
        </div>
        <div class="shipping-form__group shipping-form__group--half" :style="{ 'opacity': formData.city ? '1' : '0.5' }">
          <label class="shipping-form__label">{{ texts.DISTRICT_LABEL }}</label>
          <Select v-model="formData.district" :options="districtOptions" :placeholder="texts.PLACEHOLDERS.SELECT"
            :is-disabled="!formData.city" @update:modelValue="updateForm" />
        </div>
      </div>

      <div class="shipping-form__group">
        <label class="shipping-form__label">{{ texts.ADDRESS_LABEL }}</label>
        <textarea v-model="formData.address" class="shipping-form__textarea" :placeholder="texts.PLACEHOLDERS.ADDRESS"
          @input="updateForm"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Select } from '@/components/ui';
import {
  CHECKOUT_TITLES,
  SHIPPING_FORM_TEXTS,
  CITY_OPTIONS,
  DISTRICT_OPTIONS
} from '@/constants/checkout';
import { ShippingIcon } from '@/components/icons';
import { useFormValidation } from '@/composables/use-form-validation';
import { shippingFormValidation } from '@/validations';

export default {
  name: 'ShippingForm',
  components: {
    Input,
    Select,
    ShippingIcon
  },
  setup(_, { emit }) {
    const initialData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      district: '',
      address: '',
    };

    const {
      formData,
      v$,
      updateForm,
      touchField,
      getFieldError,
      hasFieldError
    } = useFormValidation(initialData, shippingFormValidation, (data) => {
      emit('update', data);
    });

    const handleCityChange = () => {
      formData.district = '';
      updateForm();
    };

    return {
      formData,
      v$,
      updateForm,
      touchField,
      getFieldError,
      hasFieldError,
      handleCityChange,
      titles: CHECKOUT_TITLES,
      texts: SHIPPING_FORM_TEXTS,
      cityOptions: CITY_OPTIONS,
      districtOptions: DISTRICT_OPTIONS,
    };
  },
  emits: ['update'],
  mounted() {
    this.updateForm();
  }
};
</script>

<style lang="scss" scoped>
.shipping-form {
  background: $color-white;

  &__header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;

    @include for-mobile {
      height: 64px;
      background-color: $color-smoke-16;
    }
  }

  &__title {
    font-size: $text-lg;
    font-weight: $fw-medium;
    line-height: 24px;
    color: $color-coal;
    margin: 0;
  }

  &__fields {
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

    @include for-mobile {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__label {
    font-size: $text-sm;
    font-weight: $fw-regular;
    color: $color-coal;
  }

  &__textarea {
    width: 100%;
    min-height: 120px;
    padding: 16px;
    font-family: $ff-primary;
    font-size: $text-lg;
    font-weight: $fw-regular;
    line-height: 24px;
    color: $color-coal-60;
    background-color: $color-white;
    border: 1px solid $color-smoke;
    border-radius: 4px;
    transition: all 0.3s ease;
    outline: none;
    box-sizing: border-box;
    resize: vertical;

    &::placeholder {
      color: $color-coal-60;
      font-size: $text-base;
    }

    &:hover {
      border-color: $color-coal-60;
    }

    &:focus {
      border-color: $color-primary;
      box-shadow: 0 0 0 2px rgba($color-primary, 0.1);
    }
  }
}
</style>
