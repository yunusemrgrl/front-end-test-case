<template>
    <div class="app-footer-section" :class="{ 'is-open': isOpen }">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'AppFooterSection',
    provide() {
        return {
            footerSection: {
                isOpen: () => this.isOpen,
                toggle: this.toggle,
            },
        };
    },
    data() {
        return {
            isOpen: false,
        };
    },
    mounted() {
        this.checkDesktop();
        window.addEventListener('resize', this.checkDesktop);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkDesktop);
    },
    methods: {
        toggle() {
            if (window.innerWidth < 1440) {
                this.isOpen = !this.isOpen;
            }
        },
        checkDesktop() {
            if (window.innerWidth >= 1440) {
                this.isOpen = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.app-footer-section {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @include for-mobile {
        gap: 0;
    }
}
</style>

