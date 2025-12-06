<template>
  <article class="category-card" :style="{ backgroundImage: `url(${category.image})` }">
    <div class="category-card__content">
      <h3 class="category-card__title">{{ category.title }}</h3>
      <p class="category-card__description">{{ category.description }}</p>
      <Button variant="secondary" size="small" @click="handleBrowse">
        {{ FEATURED_CATALOG_TEXTS.BROWSE }}
      </Button>
    </div>
  </article>
</template>

<script>
import { Button } from '@/components/ui';
import { FEATURED_CATALOG_TEXTS } from '@/constants/featured-catalog';

export default {
  name: 'CategoryCard',
  components: {
    Button,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      FEATURED_CATALOG_TEXTS,
    };
  },
  methods: {
    handleBrowse() {
      if (this.category.link) {
        this.$router.push(this.category.link);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.category-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 280px;
  border: 1px solid $color-smoke-50;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.04);
  }

  @include for-mobile {
    width: 343px;
    height: 232px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-white-90;
    text-align: center;
    padding: 16px;
    gap: 8px;
  }

  &__title {
    width: 200px;
    font-size: $text-xl;
    font-weight: $fw-bold;
    color: $color-coal;
    line-height: 24px;

    @include for-mobile {
      width: 231px;
      font-size: $text-lg;
      line-height: 24px;
    }
  }

  &__description {
    width: 200px;
    font-size: $text-sm;
    font-weight: $fw-regular;
    color: $color-graphene;
    line-height: 24px;
    vertical-align: middle;

    @include for-mobile {
      width: 231px;
      font-size: $text-xs;
      line-height: 24px;
    }
  }
}
</style>
