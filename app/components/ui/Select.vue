<template>
  <div class="select-wrapper">
    <select :id="selectId" :value="modelValue" :disabled="isDisabled" :class="[
      'base-select',
      { 'select-error': hasError },
      { 'select-disabled': isDisabled },
      { 'select-placeholder': !modelValue }
    ]" @change="handleChange" @focus="handleFocus" @blur="handleBlur">
      <option value="" disabled selected hidden>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <div class="select-arrow">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: 'Please select',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    hasError: {
      type: Boolean,
      default: false,
    },
    selectId: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  methods: {
    handleChange(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('change', event);
    },
    handleFocus(event) {
      this.$emit('focus', event);
    },
    handleBlur(event) {
      this.$emit('blur', event);
    }
  }
};
</script>

<style lang="scss" scoped>
.select-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.base-select {
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  padding-right: 36px;
  font-size: $text-base;
  font-weight: $fw-regular;
  color: $color-coal;
  background-color: $color-white;
  border: 1px solid $color-smoke;
  border-radius: 4px;
  transition: all 0.3s ease;
  outline: none;
  appearance: none;
  cursor: pointer;

  &.select-placeholder {
    font-size: $text-base;
    line-height: 24px;
    color: $color-coal-60;
  }

  &:hover:not(.select-disabled):not(:focus) {
    border-color: $color-coal-60;
  }

  &:focus {
    border: none;
    box-shadow: 0px 0px 0px 2px rgba(214, 236, 255, 1), 0px 0px 0px 1px rgba(108, 142, 239, 1) inset;
  }

  &.select-error {
    border-color: $color-error;

    &:focus {
      border: none;
      box-shadow: 0px 0px 0px 2px rgba(253, 226, 221, 1), 0px 0px 0px 1px rgba(205, 61, 100, 1) inset;
    }
  }

  &.select-disabled {
    background-color: $color-smoke-30;
    color: $color-coal-60;
    cursor: not-allowed;
  }
}

.select-arrow {
  position: absolute;
  right: 16px;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
