<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <span v-for="(item, index) in items" :key="index" class="breadcrumb-wrapper">
      <NuxtLink v-if="item.to && !item.isActive" :to="item.to"
        :class="['breadcrumb-item', 'breadcrumb-link', { active: item.isActive }]">
        {{ item.label }}
      </NuxtLink>
      <span v-else :class="['breadcrumb-item', { active: item.isActive }]">
        {{ item.label }}
      </span>
      <span v-if="index < items.length - 1" class="breadcrumb-separator">
        {{ separator }}
      </span>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    items: {
      type: Array,
      required: true,
    },
    separator: {
      type: String,
      default: '>',
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: $text-xs;
  color: $color-gray;
  margin-bottom: 16px;

  @include for-mobile {
    display: flex;
    align-items: center;
    height: 48px;
    background-color: $color-smoke-16;
    margin-bottom: 0;
  }
}

.breadcrumb-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-item {
  &.active {
    color: $color-secondary;
  }
}

.breadcrumb-link {
  text-decoration: none;
  color: $color-gray;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: $color-secondary;
  }
}

.breadcrumb-separator {
  color: $color-gray;
}
</style>

