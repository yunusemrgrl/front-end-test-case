<template>
    <section :class="['section', customClass]" :style="sectionStyles">
        <slot />
    </section>
</template>

<script>
import { normalizeCssValue } from '@/utils/normalize-css-value';

export default {
    name: 'Section',
    props: {
        width: {
            type: [String, Number],
            default: '100%',
        },
        background: {
            type: String,
            default: null,
        },
        paddingBlock: {
            type: [String, Number],
            default: '40px',
        },
        paddingBlockMobile: {
            type: [String, Number],
            default: '16px',
        },
        paddingInline: {
            type: [String, Number],
            default: null,
        },
        paddingInlineMobile: {
            type: [String, Number],
            default: null,
        },
        customClass: {
            type: String,
            default: '',
        },
    },
    methods: {
        getMobilePaddingValue(mobileValue, defaultValue) {
            const value = mobileValue || defaultValue;
            return value ? normalizeCssValue(value) : null;
        },
    },
    computed: {
        sectionStyles() {
            const normalizeProps = ['width', 'paddingBlock', 'paddingInline'];
            const styles = {};

            normalizeProps.forEach((prop) => {
                if (this[prop]) styles[prop] = normalizeCssValue(this[prop]);
            });

            if (this.background) styles.background = this.background;

            return styles;
        },
        paddingBlockMobileValue() {
            return this.getMobilePaddingValue(this.paddingBlockMobile, this.paddingBlock);
        },
        paddingInlineMobileValue() {
            return this.getMobilePaddingValue(this.paddingInlineMobile, this.paddingInline);
        },
    },
};
</script>

<style lang="scss" scoped>
.section {
    @include for-mobile {
        padding-block: v-bind('paddingBlockMobileValue') !important;
        padding-inline: v-bind('paddingInlineMobileValue') !important;
    }
}
</style>

