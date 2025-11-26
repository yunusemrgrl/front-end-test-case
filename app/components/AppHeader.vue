<template>
    <header>
        <figure>
            <img :src="browserDesktop" alt="Browser Desktop" width="100%" height="100%" class="desktop-only" />
            <img :src="browserMobile" alt="Browser Mobile" width="100%" height="100%" class="mobile-only" />
        </figure>
    </header>
</template>

<script>
import browserDesktop from "assets/desktop/browser-desktop.png";
import browserMobile from "assets/mobile/browser-mobile.png";

export default {
  data() {
    return {
      browserDesktop: browserDesktop,
      browserMobile: browserMobile,
    }
  },
};
</script>

<style scoped lang="scss">

</style>