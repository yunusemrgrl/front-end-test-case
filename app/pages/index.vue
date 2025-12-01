<template>
  <div>
    <HeroSection />
    <FeaturedProducts 
      :limit="4"
      @add-to-cart="handleAddToCart"
      @quick-view="handleQuickView"
      @view-all="handleViewAll"
    />
  </div>
</template>

<script>
import FeaturedProducts from '@/components/products/FeaturedProducts.vue';

export default {
  name: 'IndexPage',
  components: {
    FeaturedProducts,
  },
  setup() {
    const handleAddToCart = (product) => {
      console.log('Add to cart:', product);
    };

    const handleQuickView = (product) => {
      console.log('Quick view:', product);
    };

    const handleViewAll = () => {
      console.log('View all products');
    };

    return {
      handleAddToCart,
      handleQuickView,
      handleViewAll,
    };
  },
};
</script>