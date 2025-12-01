<template>
  <div class="checkout-page container">
    <Breadcrumbs :items="breadcrumbs" />

    <h1 class="page-title">{{ titles.PAGE_TITLE }}</h1>

    <div class="checkout-layout">
      <div class="checkout-left">
        <div class="shipping-form-wrapper">
          <ShippingForm @update="updateShippingDetails" />
        </div>

        <div class="payment-form-wrapper">
          <PaymentForm @update="updatePaymentDetails" />
        </div>

        <div class="action-button-wrapper">
          <Button size="large" :full-width="true" variant="primary" @click="handlePayment"
            :is-disabled="!shippingDetails.isValid || !paymentDetails.isValid">
            {{ payButtonText }}
          </Button>
        </div>
      </div>

      <div class="checkout-right">
        <OrderSummary :items="cartItems" :subtotal="subtotal" :shipping-cost="shippingCost" :total="total"
          @update-quantity="updateQuantity" />
      </div>
    </div>
  </div>
</template>

<script>
import ShippingForm from '@/components/checkout/ShippingForm.vue';
import PaymentForm from '@/components/checkout/PaymentForm.vue';
import OrderSummary from '@/components/checkout/OrderSummary.vue';
import { Button, Breadcrumbs } from '@/components/ui';
import { CHECKOUT_BREADCRUMBS, CHECKOUT_TITLES, PAYMENT_FORM_TEXTS } from '@/constants/checkout';
import { useCart } from '@/composables/use-cart';

export default {
  name: 'CheckoutPage',
  components: {
    ShippingForm,
    PaymentForm,
    OrderSummary,
    Button,
    Breadcrumbs,
  },
  setup() {
    const { cartItems, updateQuantity, subtotal } = useCart();

    return {
      cartItems,
      updateQuantity,
      subtotal,
    };
  },
  data() {
    return {
      shippingDetails: { isValid: false },
      paymentDetails: { isValid: false },
      shippingCost: 10.50,
      breadcrumbs: CHECKOUT_BREADCRUMBS,
      titles: CHECKOUT_TITLES,
      payButtonText: PAYMENT_FORM_TEXTS.PAY_BUTTON,
    };
  },
  computed: {
    total() {
      return this.subtotal + this.shippingCost;
    }
  },
  methods: {
    updateShippingDetails(details) {
      this.shippingDetails = details;
    },
    updatePaymentDetails(details) {
      this.paymentDetails = details;
    },
    handlePayment() {
      alert('Later...');
    }
  }
};
</script>

<style lang="scss" scoped>
.checkout-page {
  padding: 24px 0 48px;
  max-width: 1200px;
  margin: 0 auto;

  @include for-mobile {
    padding: 16px;
  }
}


.page-title {
  font-family: $ff-primary;
  font-size: $text-2xl;
  font-weight: $fw-bold;
  color: $color-coal;
  margin-bottom: 24px;
  line-height: 48px;

  @include for-mobile {
    display: flex;
    align-items: center;
    height: 48px;
    background-color: $color-smoke-16;
    font-size: $text-xl;
    line-height: 48px;
    letter-spacing: -0.2px;
  }
}

.checkout-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;

  @include for-mobile {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    gap: 16px;

  }
}

.checkout-left {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include for-mobile {
    gap: 24px;
    display: contents;
  }
}

.checkout-right {
  @include for-mobile {
    order: 1;
  }
}

.shipping-form-wrapper {
  @include for-mobile {
    order: 2;
  }
}

.payment-form-wrapper {
  @include for-mobile {
    order: 3;
  }
}

.action-button-wrapper {
  width: 50%;

  @include for-mobile {
    width: 100%;
    order: 4;
  }
}
</style>
