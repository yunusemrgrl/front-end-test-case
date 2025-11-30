<template>
  <button
    :class="[
      'base-button',
      `button-${variant}`,
      { 'button-disabled': isDisabled },
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

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value),
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
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (!props.isDisabled) {
    emit('click', event);
  }
};
</script>

<style lang="scss" scoped>

.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  font-size: $text-sm;
  font-weight: $fw-bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

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

.button-disabled {
  opacity: 0.3;
  cursor: not-allowed;
  pointer-events: none;
}

.button-icon {
  display: inline-flex;
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
  display: inline-flex;
  align-items: center;
}
</style>

