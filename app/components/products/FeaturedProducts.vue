<template>
  <section class="featured-products">
    <div class="container">
      <SectionHeader :title="title" />

      <div v-if="isLoading" class="featured-products__loading">
        <ProductCardSkeleton v-for="n in limit" :key="n" />
      </div>

      <div v-else-if="error" class="featured-products__error">
        <p>{{ error }}</p>
        <Button variant="primary" @click="handleRetry">{{ retryText }}</Button>
      </div>

      <div v-else-if="!isLoading && displayedProducts.length === 0" class="featured-products__empty">
        <p>{{ emptyText }}</p>
      </div>

      <div v-else-if="displayedProducts.length > 0" class="featured-products__grid">
        <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product"
          :show-overlay="showOverlay" @add-to-cart="handleAddToCart"
          @quick-view="handleQuickView" />
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useProducts } from '@/composables/useProducts';
import { useCart } from '@/composables/use-cart';
import ProductCard from './ProductCard.vue';
import ProductCardSkeleton from './ProductCardSkeleton.vue';
import { Button, SectionHeader } from '@/components/ui';
import { FEATURED_PRODUCTS_TEXTS } from '@/constants/featured-products';

export default {
  name: 'FeaturedProducts',
  components: {
    ProductCard,
    ProductCardSkeleton,
    Button,
    SectionHeader,
  },
  props: {
    limit: {
      type: Number,
      default: 4,
    },
    title: {
      type: String,
      default: FEATURED_PRODUCTS_TEXTS.TITLE,
    },
    subtitle: {
      type: String,
      default: FEATURED_PRODUCTS_TEXTS.SUBTITLE,
    },
    showOverlay: {
      type: Boolean,
      default: true,
    },
    showViewAll: {
      type: Boolean,
      default: true,
    },
    loadingText: {
      type: String,
      default: FEATURED_PRODUCTS_TEXTS.LOADING,
    },
    emptyText: {
      type: String,
      default: FEATURED_PRODUCTS_TEXTS.EMPTY,
    },
    retryText: {
      type: String,
      default: FEATURED_PRODUCTS_TEXTS.RETRY,
    },
    viewAllText: {
      type: String,
      default: FEATURED_PRODUCTS_TEXTS.VIEW_ALL,
    },
  },
  emits: ['quick-view', 'view-all', 'error'],
  setup(props, { emit }) {
    const { products, isLoading, error, getProducts } = useProducts();
    const { addToCart } = useCart();

    const displayedProducts = computed(() => {
      return products.value.slice(0, props.limit);
    });

    const handleAddToCart = async (product) => {
      await addToCart(product);
    };

    const handleQuickView = (product) => {
      emit('quick-view', product);
    };

    const handleRetry = async () => {
      await getProducts(props.limit);
    };

    const handleViewAll = () => {
      emit('view-all');
    };

    onMounted(async () => {
      try {
        await getProducts(props.limit);
      } catch (err) {
        emit('error', err);
      }
    });

    return {
      products,
      isLoading,
      error,
      displayedProducts,
      handleAddToCart,
      handleQuickView,
      handleRetry,
      handleViewAll,
    };
  },
};
</script>

<style lang="scss" scoped>
.featured-products {
  width: 100%;
  background: $color-snow;


  &__loading,
  &__error,
  &__empty {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    min-height: 400px;

    @include for-mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }

  &__error,
  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    text-align: center;

    p {
      font-size: $text-lg;
      color: $color-gray;
      margin: 0;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;

    @include for-mobile {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
  }

  &__footer {
    display: flex;
    justify-content: center;
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
