<template>
  <div class="credit-card">
    <div class="card-chip">
      <CardChipIcon />
    </div>

    <h4 class="card-number">{{ formattedCardNumber }}</h4>

    <div class="card-details">
      <div class="detail-group">
        <span class="detail-label">{{ labels.CARD_HOLDER }}</span>
        <span class="detail-value">{{ cardHolder || placeholders.CARD_HOLDER }}</span>
      </div>
      <div class="detail-group">
        <span class="detail-label">{{ labels.EXPIRES }}</span>
        <span class="detail-value">{{ expiryDate || placeholders.EXPIRY_DATE }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { CardChipIcon } from '@/components/icons';
import { formatCardNumber } from '@/helpers/format-card-number';
import { CREDIT_CARD_PLACEHOLDERS, CREDIT_CARD_LABELS } from '@/constants/credit-card';

export default {
  name: 'CreditCardVisual',
  components: {
    CardChipIcon
  },
  props: {
    cardNumber: {
      type: String,
      default: '',
    },
    cardHolder: {
      type: String,
      default: '',
    },
    expiryDate: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      placeholders: CREDIT_CARD_PLACEHOLDERS,
      labels: CREDIT_CARD_LABELS,
    };
  },
  computed: {
    formattedCardNumber() {
      return formatCardNumber(this.cardNumber);
    }
  }
};
</script>

<style lang="scss" scoped>
.credit-card {
  width: 282px;
  height: 184px;
  background: linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%);
  border: 1px solid $color-smoke;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  @include for-mobile {
    width: 100%;
    max-width: 320px;
  }
}

.card-chip {
  align-self: flex-end;
}

.card-number {
  color: $color-coal;
  font-size: $text-lg;
  font-weight: $fw-bold;
  margin-bottom: 32px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.card-details {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.detail-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-label {
  font-size: $text-sm;
  color: $color-gray;
}

.detail-value {
  font-size: $text-base;
  font-weight: $fw-medium;
  color: $color-graphene;
  text-transform: uppercase;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
