<template>
    <li class="mobile-menu__item">
        <button class="mobile-menu__item-button" @click="onClick">
            <span class="mobile-menu__item-left">
                <ChevronIcon v-if="panelIndex === 0" :width="14" :height="14" rotate="left" />
            </span>
            <span class="mobile-menu__item-label">{{ item.label }}</span>
        </button>

        <Divider v-if="(panelIndex === 0 && !last) || (panelIndex === 1 && last)"
            :class="panelIndex === 1 && last ? 'mobile-menu__item-divider--children' : 'mobile-menu__item-divider'"
            variant="thin" orientation="horizontal" />
    </li>
</template>

<script>
import ChevronIcon from '@/components/icons/ChevronIcon.vue'
import { Divider } from '@/components/ui';

export default {
    name: 'MobileMenuListItem',
    components: { ChevronIcon, Divider },
    props: {
        item: { type: Object, required: true },
        panelIndex: { type: Number, required: true },
        last: { type: Boolean, default: false },
    },
    methods: {
        onClick() {
            if (this.item.children && this.item.children.length) {
                this.$emit('open-children', this.item)
            } else {
                this.$emit('select', this.item)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
    &__item {
        &-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            height: 24px;
            gap: 8px;
            font-size: $text-base;
            background: transparent;
            border: 0;
            color: $color-coal;
            cursor: pointer;
        }

        &-divider {
            margin-top: 8px !important;

            &--children {
                margin-top: 16px !important;
            }
        }

        &-left {
            display: flex;
            align-items: center;
        }

        &-label {
            color: $color-coal;
            font-weight: $fw-medium;
        }
    }
}
</style>
