<template>
  <button :class="[
    'button',
    `button--${variant}`,
    `button--${size}`,
    { 'button--disabled': isDisabled },
    { 'button--full-width': fullWidth },
  ]" :disabled="isDisabled" @click="handleClick">
    <span v-if="hasLeftIcon" class="button__icon button__icon--left">
      <slot name="left-icon" />
    </span>
    <span class="button__text">
      <slot />
    </span>
    <span v-if="hasRightIcon" class="button__icon button__icon--right">
      <slot name="right-icon" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'product-card'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    hasLeftIcon: {
      type: Boolean,
      default: false,
    },
    hasRightIcon: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  methods: {
    handleClick(event) {
      if (!this.isDisabled) {
        this.$emit('click', event);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  width: max-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  font-family: $ff-primary;
  font-size: $text-base;
  font-weight: $fw-bold;
  cursor: pointer;
  white-space: nowrap;
  transition-duration: 60ms;
  transition-timing-function: ease-in-out;
  transition-property: background-color, transform;

  &--small {
    height: 32px;
    padding: 0 16px;
    font-size: $text-sm;
  }

  &--medium {
    height: 48px;
    padding: 0 16px;
    font-size: $text-base;
  }

  &--large {
    height: 56px;
    padding: 0 32px;
    font-size: $text-lg;
  }

  &--full-width {
    width: 100%;
    display: flex;
  }

  &--disabled {
    opacity: 0.3;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:hover:not(.button--disabled) {
  }

  &:active:not(.button--disabled) {
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }
}

.button--primary {
  background: $color-primary;
  color: $color-white;

  &:hover:not(.button--disabled) {
    background: $color-dark-primary;
  }

  &:active:not(.button--disabled) {
    background: $color-dark-primary;
  }
}

.button--secondary {
  height: 32px;
  background: $color-secondary;
  color: $color-white;

  &:hover:not(.button--disabled) {
    background: $color-dark-secondary;
  }

  &:active:not(.button--disabled) {
    background: $color-dark-secondary;
  }
}

.button--outline {
  height: 32px;
  background: transparent;
  color: $color-primary;
  border: 2px solid $color-primary;
  padding: 0 14px;

  &:hover:not(.button--disabled) {
    background: $color-primary-10;
  }

  &:active:not(.button--disabled) {
    background: $color-primary-10;
  }
}

.button--product-card {
  height: 24px !important;
  font-weight: $fw-medium;
  font-size: $text-sm !important;
  color: $color-white;
  background-color: transparent;
  line-height: 24px;
  vertical-align: middle;
  padding: 0 16px !important;

  &:hover {
    background-color: $color-white-20;
  }
}

.button__icon {
  display: flex;
  align-items: center;
  justify-content: center;

  &--left {
    margin-right: -4px;
  }

  &--right {
    margin-left: -4px;
  }
}

.button__text {
  display: flex;
  align-items: center;
}
</style>
