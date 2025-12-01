<template>
    <div class="mobile-menu__header">
        <div class="mobile-menu__header-left">
            <button class="mobile-menu__close" @click="close" aria-label="Close menu">
                <ClearIcon :width="24" :height="24" color="var(--color-graphene)" />
            </button>
        </div>

        <div class="mobile-menu__header-right">
            <h4 class="mobile-menu__title">{{ title }}</h4>
        </div>
    </div>
</template>

<script>
import ClearIcon from '../icons/ClearIcon.vue'

export default {
    name: 'MobileMenuHeader',
    components: { ClearIcon },
    props: {
        title: {
            type: String,
            default: 'Menu',
        },
    },
    methods: {
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style lang="scss" scoped>
.mobile-menu {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
        padding-inline: 16px;
        background: $color-titan-white;
        position: relative;

        &-left,
        &-right {
            display: flex;
            align-items: center;
        }

        &-title {
            font-weight: $fw-medium;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            margin: 0;
            line-height: 1;
        }
    }

    &__title {
        font-weight: $fw-medium;
        font-size: $text-lg;
        color: $color-coal;
    }

    &__close,
    &__back {
        width: 24px;
        height: 24px;
        background: transparent;
        padding: 0;
        border: 0;
        cursor: pointer;

        :deep(svg path) {
            stroke: $color-graphene;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
    }
}
</style>
