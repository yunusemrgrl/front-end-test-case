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

<style lang="scss" src="./MobileMenuHeader.scss"></style>
