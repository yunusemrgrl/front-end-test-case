<template>
  <section class="featured-catalog">
    <div class="container">
      <SectionHeader :title="FEATURED_CATALOG_TEXTS.TITLE" />

      <div class="featured-catalog__grid">
        <CategoryCard
          v-for="category in FEATURED_CATALOG_CATEGORIES"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
  </section>
</template>

<script>
import CategoryCard from './CategoryCard.vue';
import { SectionHeader } from '@/components/ui';
import { FEATURED_CATALOG_TEXTS, FEATURED_CATALOG_CATEGORIES } from '@/constants/featured-catalog';

export default {
  name: 'FeaturedCatalogSection',
  components: {
    CategoryCard,
    SectionHeader,
  },
  data() {
    return {
      FEATURED_CATALOG_TEXTS,
      FEATURED_CATALOG_CATEGORIES,
    };
  },
};
</script>

<style lang="scss" scoped>
.featured-catalog {
  width: 100%;
  background: $color-snow;
  padding-bottom: 40px;

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 360px);
    gap: 40px;
    justify-content: center;

    @include for-mobile {
      grid-template-columns: 1fr;
      gap: 16px;
      justify-items: center;
    }
  }
}

.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 140px;

  @include for-mobile {
    padding: 0 16px;
  }
}
</style>

