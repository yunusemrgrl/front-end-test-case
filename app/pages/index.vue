<template>
  <div>
    <HeroSection />
    <FeaturedProducts 
      :limit="4"
      @add-to-cart="handleAddToCart"
      @quick-view="handleQuickView"
      @view-all="handleViewAll"
    />
    <NewsletterSignUp
      @subscribe="handleSubscribe"
      @success="handleSubscribeSuccess"
      @error="handleSubscribeError"
    />
  </div>
</template>

<script>
import FeaturedProducts from '@/components/products/FeaturedProducts.vue';
import NewsletterSignUp from '@/components/newsletter/NewsletterSignUp.vue';

export default {
  name: 'IndexPage',
  components: {
    FeaturedProducts,
    NewsletterSignUp,
  },
  setup() {
    const handleAddToCart = (product) => {
    };

    const handleQuickView = (product) => {
    };

    const handleViewAll = () => {
    };

    const handleSubscribe = (email) => {
    };

    const handleSubscribeSuccess = (message) => {
    };

    const handleSubscribeError = (message) => {
    };

    return {
      handleAddToCart,
      handleQuickView,
      handleViewAll,
      handleSubscribe,
      handleSubscribeSuccess,
      handleSubscribeError,
    };
  },
};
</script>