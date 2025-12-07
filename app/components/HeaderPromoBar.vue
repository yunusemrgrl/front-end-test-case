<template>
  <div class="header-promo-bar">
    <Container padding="0" width="100%">
      <div class="header-promo-bar__content">
        <div class="header-promo-bar__left">
          <Button variant="product-card" size="small" :has-left-icon="true" @click="onStoresClick">
            <template #left-icon>
              <StoreIcon />
            </template>
            {{ HEADER_PROMO_TEXTS.STORES }}
          </Button>
          <Button variant="product-card" size="small" :has-left-icon="true" @click="onCatalogClick">
            <template #left-icon>
              <CatalogIcon />
            </template>
            {{ HEADER_PROMO_TEXTS.CATALOG }}
          </Button>
        </div>
        <div class="header-promo-bar__spot-text desktop-only">
          <p>{{ HEADER_PROMO_TEXTS.SPOT_TEXT }}</p>
        </div>
        <div class="header-promo-bar__right">
          <a class="desktop-only" :href="`tel:${HEADER_PROMO_PHONE_NUMBER_TEL}`">{{ HEADER_PROMO_TEXTS.CALL_US }} {{ HEADER_PROMO_PHONE_NUMBER }}</a>
          <PhoneIcon />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { Button, Container } from '@/components/ui';
import { HEADER_PROMO_TEXTS, HEADER_PROMO_PHONE_NUMBER, HEADER_PROMO_PHONE_NUMBER_TEL } from '@/constants/header-promo';
import { StoreIcon, CatalogIcon, PhoneIcon } from '@/components/icons';

export default {
  name: 'HeaderPromoBar',
  components: {
    Button,
    Container,
    StoreIcon,
    CatalogIcon,
    PhoneIcon,
  },
  data() {
    return {
      HEADER_PROMO_TEXTS,
      HEADER_PROMO_PHONE_NUMBER,
      HEADER_PROMO_PHONE_NUMBER_TEL,
    };
  },
  methods: {
    onStoresClick() {

    },
    onCatalogClick() {

    },
  },
};
</script>

<style lang="scss" scoped>
.header-promo-bar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: $color-dark-gray;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  &__left {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__spot-text {
    display: flex;
    align-items: center;
    color: $color-smoke-50;
    font-size: $text-sm;
  }

  &__right {
    display: flex;
    align-items: center;
    font-size: $text-sm;
    line-height: 24px;
    color: $color-white;
    vertical-align: middle;
    gap: 8px;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>

