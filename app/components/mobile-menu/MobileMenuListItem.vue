<template>
    <li class="mobile-menu__item">
        <button class="mobile-menu__item-button" @click="onClick">
            <span class="mobile-menu__item-left">
                <ChevronIcon v-if="panelIndex === 0" :width="14" :height="14" rotate="left" />
            </span>
            <span class="mobile-menu__item-label">{{ item.label }}</span>
        </button>

        <Divider v-if="!last" class="mobile-menu__item-divider" variant="thin" orientation="horizontal"  />
    </li>
</template>

<script>
import ChevronIcon from '../icons/ChevronIcon.vue'
import { Divider } from "../ui";

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

<style lang="scss" src="./MobileMenuListItem.scss"></style>
