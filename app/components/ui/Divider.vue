<template>
    <div
        :class="['divider', `divider--${variant}`, `divider--${orientation}`]"
        :style="dividerStyle"
    ></div>
</template>

<script>
export default {
    props: {
        variant: {
            type: String,
            default: 'thin',
            validator: (value) => ['thin', 'medium'].includes(value),
        },
        orientation: {
            type: String,
            default: 'horizontal',
            validator: (value) => ['horizontal', 'vertical'].includes(value),
        },
        color: {
            type: String,
            default: null,
        },
        height: {
            type: Number,
            default: null,
        },
        width: {
            type: Number,
            default: null,
        },
    },
    computed: {
        dividerStyle() {
            return {
                ...(this.color && { backgroundColor: this.color }),
                ...(this.height && { height: `${this.height}px` }),
                ...(this.width && { width: `${this.width}px` }),
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.divider {

    &:not([background-color]){
        background-color: $color-smoke;
    }

    &--horizontal {
        width: 100%;
    }

    &--vertical {
        height: 100%;
    }

    &--thin {
        &.divider--horizontal {
            height: 0.5px;
        }
        &.divider--vertical {
            width: 0.5px;
        }
    }

    &--medium {
        &.divider--horizontal {
            height: 1px;
        }
        &.divider--vertical {
            width: 1px;
        }
    }
}
</style>
