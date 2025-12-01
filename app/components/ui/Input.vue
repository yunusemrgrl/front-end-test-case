<template>
  <div class="input-container">
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
    </label>

    <div class="input-wrapper">
      <input :id="inputId" :type="type" :value="modelValue" :placeholder="placeholder" :maxlength="maxlength"
        :disabled="isDisabled" :readonly="isReadonly" :aria-label="ariaLabel || label"
        :aria-describedby="ariaDescribedBy" :aria-invalid="hasError" :class="[
          'base-input',
          { 'input-error': hasError },
          { 'input-success': isSuccess },
          { 'input-disabled': isDisabled },
        ]" @input="handleInput" @focus="handleFocus" @blur="handleBlur" @keydown="handleKeydown" />
      <div v-if="$slots['right-icon']" class="input-right-icon">
        <slot name="right-icon" />
      </div>
    </div>

    <div v-if="helperText || errorMessage"
      :class="['helper-text-wrapper', { 'helper-error': hasError, 'helper-success': isSuccess }]">
      <svg v-if="hasError" class="helper-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" fill="#CD3C32" />
        <path d="M8 4V9" stroke="white" stroke-width="1.5" stroke-linecap="round" />
        <circle cx="8" cy="11.5" r="0.75" fill="white" />
      </svg>
      <svg v-if="isSuccess && !hasError" class="helper-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="7" fill="#0B855E" />
        <path d="M5 8L7 10L11 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <span :class="['helper-text', { 'text-error': hasError, 'text-success': isSuccess && !hasError }]">
        {{ hasError ? errorMessage : helperText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'email', 'password', 'number', 'tel', 'url'].includes(value),
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    helperText: {
      type: String,
      default: '',
    },
    errorMessage: {
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
    isSuccess: {
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
    maxlength: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown'],
  methods: {
    handleInput(event) {
      let value = event.target.value;
      if (this.maxlength && value.length > this.maxlength) {
        value = value.substring(0, this.maxlength);
        event.target.value = value;
      }
      this.$emit('update:modelValue', value);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    },
    handleKeydown(event) {
      this.$emit('keydown', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.input-label {
  font-size: $text-sm;
  line-height: 24px;
  color: $color-coal;
}

.input-wrapper {
  display: flex;
  width: 100%;
  position: relative;
}

.base-input {
  width: 100%;
  height: 48px;
  padding: 16px;
  font-size: $text-base;
  font-weight: $fw-regular;
  color: $color-coal;
  background-color: $color-white;
  border: 1px solid $color-smoke;
  border-radius: 6px;
  transition: all 0.3s ease;
  outline: none;
  box-sizing: border-box;
  line-height: 24px;

  &::placeholder {
    font-size: $text-base;
    color: $color-coal-60;
    line-height: 24px;
  }

  &:hover:not(.input-disabled):not(:focus) {
    border-color: $color-coal-60;
  }

  &:focus {
    border: 1px solid $color-smoke;
    box-shadow: 0px 0px 0px 2px rgba(214, 236, 255, 1), 0px 0px 0px 1px rgba(108, 142, 239, 1) inset;
  }

  &.input-error {
    border-color: $color-error;

    &:focus {
      box-shadow: 0px 0px 0px 2px rgba(253, 226, 221, 1), 0px 0px 0px 1px rgba(205, 61, 100, 1) inset;
    }
  }

  &.input-success {
    border-color: $color-success;

    &:focus {
      box-shadow: 0px 0px 0px 2px rgba(203, 244, 201, 1), 0px 0px 0px 1px rgba(9, 130, 93, 1) inset;
    }
  }

  &.input-disabled {
    background-color: $color-smoke-30;
    color: $color-coal-60;
    cursor: not-allowed;
    border-color: $color-smoke;
  }
}

.input-right-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
}

.helper-text-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;

  &.helper-error,
  &.helper-success {
    .helper-icon {
      flex-shrink: 0;
    }
  }
}

.helper-icon {
  width: 16px;
  height: 16px;
}

.helper-text {
  font-family: $ff-primary;
  font-size: $text-xs;
  line-height: 16px;
  color: $color-coal-60;

  &.text-error {
    color: $color-error;
  }

  &.text-success {
    color: $color-success;
  }
}
</style>
