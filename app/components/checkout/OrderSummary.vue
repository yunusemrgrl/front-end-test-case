<template>
  <div class="order-summary">
    <div class="order-summary__header">
      <h4 class="order-summary__title">{{ titles.ORDER_SUMMARY }}</h4>
    </div>

    <div class="order-summary__content">
      <div class="order-summary__items">
        <CartItem v-for="item in items" :key="item.id" :item="item" @update-quantity="handleUpdateQuantity" />
      </div>

      <div class="order-summary__discount">
        <Input v-model="discountCode" :placeholder="texts.DISCOUNT_PLACEHOLDER" :aria-label="texts.DISCOUNT_LABEL" />
      </div>

      <div class="order-summary__rows">
        <div class="order-summary__row">
          <span class="order-summary__row-label">{{ texts.SUBTOTAL }}</span>
          <span class="order-summary__row-value">{{ formattedSubtotal }}</span>
        </div>
        <div class="order-summary__row">
          <span class="order-summary__row-label">{{ texts.SHIPPING }}</span>
          <span class="order-summary__row-value">{{ formattedShippingCost }}</span>
        </div>
      </div>

      <Divider />

      <div class="order-summary__total">
        <h4 class="order-summary__total-label">{{ texts.TOTAL }}</h4>
        <h4 class="order-summary__total-value">{{ formattedTotal }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/checkout/CartItem.vue';
import { Input, Divider } from '@/components/ui';
import { CHECKOUT_TITLES, ORDER_SUMMARY_TEXTS } from '@/constants/checkout';

export default {
  name: 'OrderSummary',
  components: {
    CartItem,
    Input,
    Divider
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    subtotal: {
      type: Number,
      default: 0,
    },
    shippingCost: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update-quantity', 'apply-discount'],
  data() {
    return {
      discountCode: '',
      titles: CHECKOUT_TITLES,
      texts: ORDER_SUMMARY_TEXTS
    };
  },
  computed: {
    formattedSubtotal() {
      return this.formatPrice(this.subtotal);
    },
    formattedShippingCost() {
      return this.formatPrice(this.shippingCost);
    },
    formattedTotal() {
      return this.formatPrice(this.total);
    }
  },
  methods: {
    handleUpdateQuantity(payload) {
      this.$emit('update-quantity', payload);
    },
    formatPrice(price) {
      return `${price.toFixed(2).replace('.', ',')} TL`;
    }
  }
};
</script>

<style lang="scss" scoped>
.order-summary {
  display: flex;
  flex-direction: column;
  width: 360px;
  gap: 32px;


  @include for-mobile {
    gap: 20px;
    width: 100%;
  }

  &__title {
    font-size: $text-lg;
    font-weight: $fw-medium;
    line-height: 24px;
    color: $color-coal;
    margin: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    border: 1px solid $color-smoke;
    box-shadow: 0px 4px 16px 0px rgba(42, 42, 72, 0.04);
    border-radius: 6px;

    @include for-mobile {
      border: none;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    gap: 24px;

   
  }

  &__discount {
    margin-bottom: 8px;
  }

  &__rows {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-label {
      color: $color-coal-60;
    }

    &-value {
      font-weight: $fw-medium;
      color: $color-graphene;
    }
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-label {
      font-size: $text-lg;
      font-weight: $fw-bold;
      color: $color-coal;
      line-height: 24px;
    }

    &-value {
      font-size: $text-lg;
      font-weight: $fw-bold;
      color: $color-coal;
      line-height: 24px;
    }
  }

  :deep(.divider) {
    margin-block: -4px
  }
}
</style>
