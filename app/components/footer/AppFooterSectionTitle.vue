<template>
    <button class="app-footer-section-title" :aria-expanded="isOpen" :aria-controls="`footer-section-${sectionId}`"
        @click="handleClick">
        <span class="app-footer-section-title__text">{{ title }}</span>
        <ChevronIcon :width="24" :height="24" :rotate="isOpen ? 'up' : 'down'"
            class="app-footer-section-title__chevron" />
    </button>
</template>

<script>
import { ChevronIcon } from '@/components/icons';

export default {
    name: 'AppFooterSectionTitle',
    inject: ['footerSection'],
    components: {
        ChevronIcon,
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        sectionId: {
            type: [String, Number],
            required: true,
        },
    },
    computed: {
        isOpen() {
            return this.footerSection ? this.footerSection.isOpen() : false;
        },
    },
    methods: {
        handleClick() {
            if (this.footerSection) {
                this.footerSection.toggle();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.app-footer-section-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 0;
    background: transparent;
    border: 0;
    cursor: pointer;
    font-size: $text-xs;
    font-weight: $fw-medium;
    line-height: 16px;
    color: $color-coal;
    text-transform: uppercase;
    text-align: left;
    gap: 8px;

    @include for-desktop {
        pointer-events: none;
        padding: 0;
    }

    &__text {
        flex: 1;
        font-family: $ff-primary;
        font-size: $text-xs;
        font-weight: $fw-medium;
        line-height: 16px;
        color: $color-coal;
        text-transform: uppercase;
    }

    &__chevron {
        flex-shrink: 0;
        color: $color-coal;
        transition: transform 0.2s ease;

        @include for-desktop {
            display: none;
        }
    }
}
</style>
