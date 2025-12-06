<template>
    <div :class="['container', customClass]" :style="containerStyles">
        <slot />
    </div>
</template>

<script>
import { normalizeCssValue } from '@/utils/normalize-css-value';

export default {
    name: 'Container',
    props: {
        maxWidth: {
            type: [String, Number],
            default: '1160px',
        },
        width: {
            type: [String, Number],
            default: null,
        },
        height: {
            type: [String, Number],
            default: null,
        },
        minWidth: {
            type: [String, Number],
            default: null,
        },
        minHeight: {
            type: [String, Number],
            default: null,
        },
        maxHeight: {
            type: [String, Number],
            default: null,
        },
        margin: {
            type: String,
            default: '0 auto',
        },
        padding: {
            type: String,
            default: '0 140px',
        },
        paddingMobile: {
            type: String,
            default: '0 16px',
        },
        customClass: {
            type: String,
            default: '',
        },
    },
    computed: {
        containerStyles() {
            const sizeProps = ['maxWidth', 'width', 'height', 'minWidth', 'minHeight', 'maxHeight'];
            const styles = {};

            sizeProps.forEach((prop) => {
                if (this[prop]) styles[prop] = normalizeCssValue(this[prop]);
            });

            if (this.margin) styles.margin = this.margin;
            if (this.padding) styles.padding = this.padding;

            return styles;
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    box-sizing: border-box;

    @include for-mobile {
        gap: 16px;
        padding: v-bind('paddingMobile') !important;
    }
}
</style>
