<template>
  <div class="section-header">
    <Divider variant="medium" orientation="horizontal" color="var(--color-secondary-10)" />
    <h2 class="section-header__title">{{ title }}</h2>
    <Divider variant="medium" orientation="horizontal" color="var(--color-secondary-10)" />
  </div>
</template>

<script>
import { Divider } from '@/components/ui';

export default {
  name: 'SectionHeader',
  components: {
    Divider,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;

  &__title {
    font-size: $text-xl;
    font-weight: $fw-bold;
    font-family: $ff-primary;
    color: $color-secondary;
    line-height: 32px;
    flex-shrink: 0;
    margin: 0;

    @include for-mobile {
      font-size: $text-lg;
      line-height: 24px;
    }
  }
}
</style>

