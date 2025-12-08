<template>
    <button
        class="accordion-title"
        :aria-expanded="isOpen"
        :aria-controls="`accordion-content-${sectionId}`"
        @click="handleClick"
    >
        <span class="accordion-title__text">
            <slot />
        </span>
        <ChevronIcon
            v-if="showChevron"
            :width="chevronWidth"
            :height="chevronHeight"
            :rotate="isOpen ? 'up' : 'down'"
            class="accordion-title__chevron"
        />
    </button>
</template>

<script>
import { ChevronIcon } from '@/components/icons';

export default {
    name: 'AccordionTitle',
    inject: ['accordion'],
    components: {
        ChevronIcon,
    },
    props: {
        sectionId: {
            type: [String, Number],
            required: true,
        },
        showChevron: {
            type: Boolean,
            default: true,
        },
        chevronWidth: {
            type: [Number, String],
            default: 24,
        },
        chevronHeight: {
            type: [Number, String],
            default: 24,
        },
        hideChevronOnDesktop: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isOpen() {
            return this.accordion ? this.accordion.isOpen() : false;
        },
    },
    methods: {
        handleClick() {
            if (this.accordion) {
                this.accordion.toggle();
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.accordion-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0;
    background: transparent;
    border: 0;
    cursor: pointer;
    text-align: left;
    gap: 8px;

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
        transition: transform 0.2s ease;

        @include for-desktop {
            display: v-bind('hideChevronOnDesktop ? "none" : "block"');
        }
    }
}
</style>

