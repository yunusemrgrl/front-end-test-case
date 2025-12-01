<template>
  <div class="skeleton-card">
    <div class="skeleton-card__image"></div>
    <div class="skeleton-card__content">
      <div class="skeleton-card__price"></div>
      <div class="skeleton-card__title"></div>
      <div class="skeleton-card__title skeleton-card__title--short"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardSkeleton',
};
</script>

<style lang="scss" scoped>
.skeleton-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid $color-smoke-50;
  border-radius: 6px;
  background: $color-white;

  &__image {
    width: 100%;
    height: 184px;
    background: linear-gradient(
      90deg,
      $color-smoke-30 0%,
      $color-smoke 40%,
      $color-smoke-30 60%,
      $color-smoke-30 100%
    );
    background-size: 400% 100%;
    animation: shimmer 1.8s ease-in-out infinite;

    @include for-mobile {
      height: 200px;
    }
  }

  &__content {
    height: 144px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline: 32px;
    gap: 12px;

    @include for-mobile {
      height: 128px;
      padding-inline: 16px;
    }
  }

  &__price {
    width: 80px;
    height: 24px;
    background: linear-gradient(
      90deg,
      $color-smoke-30 0%,
      $color-smoke 40%,
      $color-smoke-30 60%,
      $color-smoke-30 100%
    );
    background-size: 400% 100%;
    animation: shimmer 1.8s ease-in-out infinite;
    border-radius: 4px;
  }

  &__title {
    width: 100%;
    height: 16px;
    background: linear-gradient(
      90deg,
      $color-smoke-30 0%,
      $color-smoke 40%,
      $color-smoke-30 60%,
      $color-smoke-30 100%
    );
    background-size: 400% 100%;
    animation: shimmer 1.8s ease-in-out infinite;
    border-radius: 4px;
    animation-delay: 0.1s;

    &--short {
      width: 60%;
      animation-delay: 0.2s;
    }
  }
}

@keyframes shimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: -100% 50%;
  }
}
</style>

