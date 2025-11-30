<template>
    <div ref="panels" class="mobile-menu__panels">
        <div v-for="(panel, panelIndex) in stack" :key="panelIndex" class="mobile-menu__panel" :class="{
            'is-active': panelIndex === stack.length - 1,
            'is-children-active': panelIndex !== 0
        }">

            <div v-if="panelIndex === stack.length - 1 && panelIndex !== 0" class="mobile-menu__panel-header">
                <div class="mobile-menu__panel-pill">
                    <span class="mobile-menu__panel-pill-label">{{ panel.title }}</span>
                    <button v-if="canGoBack" class="mobile-menu__back" @click="goBack" aria-label="Go back">
                        <ChevronIcon rotate="right" />
                    </button>
                </div>
            </div>

            <MobileMenuList :items="panel.items" :panel-index="panelIndex" @open-children="onItemClick"
                @select="$emit('select', $event)" />
        </div>
    </div>
</template>

<script>
import ChevronIcon from '@/components/icons/ChevronIcon.vue'
import { Divider } from '@/components/ui';

import MobileMenuList from '@/components/mobile-menu/MobileMenuList.vue'

export default {
    name: 'MobileMenuPanels',
    components: { ChevronIcon, Divider, MobileMenuList },
    props: {
        stack: {
            type: Array,
            required: true,
        },
    },
    computed: {
        canGoBack() {
            return this.stack && this.stack.length > 1
        }
    },
    methods: {
        onItemClick(item) {
            if (item.children && item.children.length) {
                this.$emit('open-children', item)
            } else {
                this.$emit('select', item)
            }
        },
        goBack() {
            this.$emit('back')
        },
    }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
    &__panels {
        position: relative;
        flex: 1 1 auto;
        padding-top: 56px;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }

    &__panel {
        position: absolute;
        padding: 16px;
        inset: 0;
        transform: translateX(100%);
        transition: transform 100ms ease-in-out;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        background: $color-white;
        z-index: 1;

        &.is-active {
            transform: translateX(0);
        }

        &-header {
            margin-bottom: 16px;
        }

        &-pill {
            display: flex;
            align-items: center;
            justify-content: end;
            height: 40px;
            gap: 8px;
            background-color: $color-smoke-30;

            &-label {
                font-weight: $fw-medium;
                color: $color-coal;
            }
        }

        &.is-children-active {
            .mobile-menu__item-label {
                color: $color-graphene;
                font-weight: $fw-regular;
            }
        }
    }

    &__back {
        height: 24px;
        width: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
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
