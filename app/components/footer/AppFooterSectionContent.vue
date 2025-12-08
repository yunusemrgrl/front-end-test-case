<template>
    <div
        :id="`footer-section-${sectionId}`"
        class="app-footer-section-content"
        :class="{ 'is-open': isOpen }"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'AppFooterSectionContent',
    inject: ['footerSection'],
    props: {
        sectionId: {
            type: [String, Number],
            required: true,
        },
    },
    computed: {
        isOpen() {
            return this.footerSection ? this.footerSection.isOpen() : true;
        },
    },
};
</script>

<style lang="scss" scoped>
.app-footer-section-content {
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

