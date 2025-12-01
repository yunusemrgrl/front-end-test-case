<template>
  <button
    :class="[
      'base-button',
      `button-${variant}`,
      `button-${size}`,
      { 'button-disabled': isDisabled },
      { 'button-full-width': fullWidth },
    ]"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <span v-if="hasLeftIcon" class="button-icon left">
      <slot name="left-icon" />
    </span>
    <span class="button-text">
      <slot />
    </span>
    <span v-if="hasRightIcon" class="button-icon right">
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

.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: 4px;
  font-family: $ff-primary;
  font-weight: $fw-bold;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &.button-small {
    height: 32px;
    padding: 0 16px;
    font-size: $text-sm;
  }

  &.button-medium {
    height: 40px;
    padding: 0 24px;
    font-size: $text-base;
  }

  &.button-large {
    height: 56px;
    padding: 0 32px;
    font-size: $text-lg;
  }

  &.button-full-width {
    width: 100%;
    display: flex;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }
}

.button-primary {
  background: $color-primary;
  color: $color-white;

  &:hover:not(.button-disabled) {
    background: $color-dark-primary;
  }

  &:active:not(.button-disabled) {
    background: $color-dark-primary;
  }
}

.button-secondary {
  background: $color-secondary;
  color: $color-white;

  &:hover:not(.button-disabled) {
    background: $color-dark-secondary;
  }

  &:active:not(.button-disabled) {
    background: $color-dark-secondary;
  }
}

.button-outline {
  background: transparent;
  color: $color-primary;
  border: 2px solid $color-primary;
  padding: 0 14px;

  &:hover:not(.button-disabled) {
    background: $color-primary-10;
  }

  &:active:not(.button-disabled) {
    background: $color-primary-10;
  }
}

.button-product-card {
  font-weight: $fw-medium;
  color: $color-white;
  background-color: transparent;

  &:hover {
    background-color: $color-white-20;
  }
}

.button-disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  &.left {
    margin-right: -4px;
  }

  &.right {
    margin-left: -4px;
  }
}

.button-text {
  display: flex;
  align-items: center;
}
</style>
