<template>
  <component :is="useFigure ? 'figure' : 'div'" :class="['image-container', containerClass]">
    <img :src="src" :alt="alt" :loading="loading" :class="['image', imageClass]" />
  </component>
</template>

<script>
export default {
  name: 'BaseImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    loading: {
      type: String,
      default: 'lazy',
      validator: (value) => ['lazy', 'eager'].includes(value),
    },
    useFigure: {
      type: Boolean,
      default: false,
    },
    containerClass: {
      type: String,
      default: '',
    },
    imageClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: $color-smoke-16;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

