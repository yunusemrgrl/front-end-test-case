<template>
  <div>
    <HeroSection />
    <FeaturedProducts 
      :limit="4"
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
import HeroSection from '@/components/hero/HeroSection.vue';
import FeaturedProducts from '@/components/products/FeaturedProducts.vue';
import NewsletterSignUp from '@/components/newsletter/NewsletterSignUp.vue';

export default {
  name: 'IndexPage',
  components: {
    HeroSection,
    FeaturedProducts,
    NewsletterSignUp,
  },
  setup() {
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
      handleQuickView,
      handleViewAll,
      handleSubscribe,
      handleSubscribeSuccess,
      handleSubscribeError,
    };
  },
};
</script>