<template>
    <div class="accordion" :class="{ 'is-open': isOpen }">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    provide() {
        return {
            accordion: {
                isOpen: () => this.isOpen,
                toggle: this.toggle,
            },
        };
    },
    props: {
        defaultOpen: {
            type: Boolean,
            default: false,
        },
        alwaysOpenOnDesktop: {
            type: Boolean,
            default: false,
        },
        desktopBreakpoint: {
            type: Number,
            default: 1440,
        },
    },
    data() {
        return {
            isOpen: this.defaultOpen,
        };
    },
    mounted() {
        if (this.alwaysOpenOnDesktop) {
            this.checkDesktop();
            window.addEventListener('resize', this.checkDesktop);
        }
    },
    beforeUnmount() {
        if (this.alwaysOpenOnDesktop) {
            window.removeEventListener('resize', this.checkDesktop);
        }
    },
    methods: {
        toggle() {
            if (this.alwaysOpenOnDesktop && window.innerWidth >= this.desktopBreakpoint) {
                return;
            }
            this.isOpen = !this.isOpen;
        },
        checkDesktop() {
            if (this.alwaysOpenOnDesktop && window.innerWidth >= this.desktopBreakpoint) {
                this.isOpen = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.accordion {
    display: flex;
    flex-direction: column;
}
</style>

