<template>
    <ul class="mobile-menu__list">
        <MobileMenuListItem
            v-for="(item, i) in items"
            :key="i"
            :item="item"
            :panel-index="panelIndex"
            :last="i === items.length - 1"
            @open-children="$emit('open-children', $event)"
            @select="$emit('select', $event)"
        />
    </ul>
</template>

<script>
import MobileMenuListItem from './MobileMenuListItem.vue'

export default {
    name: 'MobileMenuList',
    components: { MobileMenuListItem },
    props: {
        items: { type: Array, default: () => [] },
        panelIndex: { type: Number, required: true },
    },
}
</script>

<style lang="scss" src="./MobileMenuList.scss"></style>
