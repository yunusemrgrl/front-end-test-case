<template>
  <HeaderPromoBar />
  <TopBar />
</template>
<script>
import HeaderPromoBar from '@/components/HeaderPromoBar.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'AppHeader',
  components: {
    HeaderPromoBar,
    TopBar,
  },
};
</script>