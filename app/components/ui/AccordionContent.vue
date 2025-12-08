<template>
    <div
        :id="`accordion-content-${sectionId}`"
        class="accordion-content"
        :class="{ 'is-open': isOpen }"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'AccordionContent',
    inject: ['accordion'],
    props: {
        sectionId: {
            type: [String, Number],
            required: true,
        },
        defaultOpen: {
            type: Boolean,
            default: true,
        },
        alwaysOpenOnDesktop: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isOpen() {
            return this.accordion ? this.accordion.isOpen() : this.defaultOpen;
        },
    },
};
</script>

<style lang="scss" scoped>
.accordion-content {
    @include for-desktop {
        display: block !important;
        max-height: none !important;
    }

    @include for-mobile {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out, padding 0.3s ease-out;
        padding-top: 0;
        padding-bottom: 0;

        &.is-open {
            max-height: 2000px;
            transition: max-height 0.3s ease-in, padding 0.3s ease-in;
        }
    }
}
</style>

