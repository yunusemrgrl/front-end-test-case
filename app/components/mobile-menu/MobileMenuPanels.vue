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
                        <ChevronIcon :width="14" :height="14" rotate="right" />
                    </button>
                </div>
            </div>

            <MobileMenuList
                :items="panel.items"
                :panel-index="panelIndex"
                @open-children="onItemClick"
                @select="$emit('select', $event)"
            />
        </div>
    </div>
</template>

<script>
import ChevronIcon from '../icons/ChevronIcon.vue'
import { Divider } from "../ui";
import MobileMenuList from './MobileMenuList.vue'

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

<style lang="scss" src="./MobileMenuPanels.scss">

</style>
