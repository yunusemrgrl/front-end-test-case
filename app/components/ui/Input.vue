<template>
  <div class="input-wrapper">
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :aria-label="ariaLabel"
      :aria-describedby="ariaDescribedBy"
      :aria-invalid="hasError"
      :class="[
        'base-input',
        { 'input-error': hasError },
        { 'input-disabled': isDisabled },
      ]"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'email', 'password', 'number', 'tel', 'url'].includes(value),
  },
  placeholder: {
    type: String,
    default: '',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isReadonly: {
    type: Boolean,
    default: false,
  },
  hasError: {
    type: Boolean,
    default: false,
  },
  inputId: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: '',
  },
  ariaDescribedBy: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value);
};

const handleFocus = (event) => {
  emit('focus', event);
};

const handleBlur = (event) => {
  emit('blur', event);
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  display: flex;
  width: 100%;
}

.base-input {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  font-family: $ff-primary;
  font-size: $text-lg;
  font-weight: $fw-regular;
  color: $color-coal;
  background-color: $color-white;
  border: 1px solid $color-smoke;
  border-radius: 4px;
  transition: all 0.3s ease;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: $color-coal-60;
    font-size: $text-base;
    line-height: 24px;
  }

  &:hover:not(.input-disabled) {
    border-color: $color-coal-60;
  }

  &:focus {
    border-color: $color-primary;
    box-shadow: 0 0 0 3px rgba($color-primary, 0.1);
  }

  &.input-error {
    border-color: $color-error;

    &:focus {
      border-color: $color-error;
      box-shadow: 0 0 0 3px rgba($color-error, 0.1);
    }
  }

  &.input-disabled {
    background-color: $color-smoke-30;
    color: $color-coal-60;
    cursor: not-allowed;
  }
}
</style>

