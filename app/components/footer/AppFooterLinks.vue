<template>
    <div class="app-footer-links">
        <Accordion
            v-for="(section, index) in sections"
            :key="index"
            :always-open-on-desktop="true"
            class="app-footer-links__section"
        >
            <AccordionTitle :section-id="index" :hide-chevron-on-desktop="true" class="app-footer-links__title">
                {{ section.title }}
            </AccordionTitle>
            <AccordionContent :section-id="index" :always-open-on-desktop="true" class="app-footer-links__content">
                <ul class="app-footer-links__list">
                    <li
                        v-for="(link, linkIndex) in section.links"
                        :key="linkIndex"
                        class="app-footer-links__item"
                    >
                        <a :href="link.url" class="app-footer-links__link">{{ link.label }}</a>
                    </li>
                </ul>
            </AccordionContent>
            <Divider
                variant="medium"
                orientation="horizontal"
                color="var(--color-smoke)"
                class="app-footer-links__divider mobile-only"
            />
        </Accordion>
    </div>
</template>

<script>
import { Accordion, AccordionTitle, AccordionContent, Divider } from '@/components/ui';

export default {
    name: 'AppFooterLinks',
    components: {
        Accordion,
        AccordionTitle,
        AccordionContent,
        Divider,
    },
    props: {
        sections: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.app-footer-links {
    display: contents;

    &__section {
        display: flex;
        flex-direction: column;
        gap: 32px;

        @include for-mobile {
            gap: 0;
            border-bottom: 1px solid $color-smoke;
        }
    }

    &__title {
        padding: 16px 0;

        @include for-desktop {
            padding: 0;
            pointer-events: none;
        }
    }

    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 12px;

        @include for-mobile {
            padding-top: 16px;
            padding-bottom: 16px;
        }
    }

    &__item {
        margin: 0;
    }

    &__link {
        font-size: $text-xs;
        font-weight: $fw-regular;
        line-height: 16px;
        color: $color-graphene;
        text-decoration: none;
    }
}
</style>

