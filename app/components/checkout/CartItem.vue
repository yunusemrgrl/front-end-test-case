<template>
  <div class="cart-item">
    <Image :src="item.image" :alt="item.title" container-class="cart-item__image-wrapper" image-class="cart-item__image"
      loading="eager" />

    <div class="cart-item__content">
      <p class="cart-item__title">{{ item.title }}</p>
      <div class="cart-item__row-bottom">
        <div class="cart-item__price">{{ formattedPrice }}</div>

        <div class="cart-item__quantity-control">
          <button class="cart-item__quantity-btn" @click="updateQuantity(item.quantity + 1)"
            :aria-label="texts.DECREASE_QUANTITY">
            <div class="icon-wrapper">
              <PlusIcon />
            </div>
          </button>

          <span class="cart-item__quantity-value">{{ item.quantity }}</span>

          <button class="cart-item__quantity-btn" :disabled="item.quantity <= 1"
            @click="updateQuantity(item.quantity - 1)" :aria-label="texts.INCREASE_QUANTITY">
            <div class="icon-wrapper">
              <MinusIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Image } from '@/components/ui';
import { CART_ITEM_TEXTS } from '@/constants/checkout';
import { PlusIcon, MinusIcon } from '@/components/icons';
import { formatPrice } from '@/helpers/format-currency';

export default {
  name: 'CartItem',
  components: {
    Image,
    PlusIcon,
    MinusIcon
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  emits: ['update-quantity'],
  data() {
    return {
      texts: CART_ITEM_TEXTS
    };
  },
  computed: {
    formattedPrice() {
      return formatPrice(this.item.price);
    }
  },
  methods: {
    updateQuantity(newQuantity) {
      if (newQuantity > 0) {
        this.$emit('update-quantity', { id: this.item.id, quantity: newQuantity });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  gap: 16px;
  padding: 0;
  background: transparent;
  border-radius: 0;
  border: none;

  @include for-mobile {
    gap: 0;
  }

  &__image-wrapper {
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    border-radius: 4px;
    overflow: hidden;
    background-color: $color-smoke-16;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    @include for-mobile {
      width: 84px;
      height: 84px;
      padding: 16px;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 8px;
  }

  &__title {
    height: 48px;
    display: flex;
    align-items: center;
    font-size: $text-sm;
    font-weight: $fw-medium;
    color: $color-coal;
    margin-bottom: 8px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;

    @include for-mobile {
      max-width: 210px;
    }
  }

  &__row-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__price {
    font-size: $text-sm;
    color: $color-graphene;
    line-height: 24px;
  }

  &__quantity-control {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__quantity-btn {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: $color-smoke-16;
    border-radius: 4px;
    cursor: pointer;
    padding: 0;
    transition: all 0.2s;

    &:hover:not(:disabled) {
      background: $color-smoke-30;
    }
  }

  &__quantity-value {
    font-weight: $fw-medium;
    color: $color-graphene;
    min-width: 20px;
    line-height: 24px;
    text-align: center;
  }
}

.icon-wrapper {
  width: 24px !important;
  height: 24px !important;
}
</style>
