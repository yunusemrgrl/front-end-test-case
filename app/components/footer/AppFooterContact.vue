<template>
    <Accordion :always-open-on-desktop="true" class="app-footer-contact">
        <AccordionTitle :section-id="'contact'" :hide-chevron-on-desktop="true" class="app-footer-contact__title">
            {{ contactInfo.title }}
        </AccordionTitle>
        <AccordionContent :section-id="'contact'" :always-open-on-desktop="true" class="app-footer-contact__content">
            <div class="app-footer-contact__info">
                <a
                    v-for="(item, index) in contactInfo.items"
                    :key="index"
                    :href="item.href"
                    :target="item.type === 'address' ? '_blank' : undefined"
                    :rel="item.type === 'address' ? 'noopener noreferrer' : undefined"
                    class="app-footer-contact__item"
                >
                    <LocationIcon v-if="item.type === 'address'" color="var(--color-graphene)" />
                    <PhoneEmptyIcon v-else-if="item.type === 'phone'" color="var(--color-graphene)" />
                    <EmailIcon v-else-if="item.type === 'email'" color="var(--color-graphene)" />
                    <span class="app-footer-contact__text">{{ item.label }}</span>
                </a>
            </div>
        </AccordionContent>
    </Accordion>
</template>

<script>
import { Accordion, AccordionTitle, AccordionContent } from '@/components/ui';
import { LocationIcon, PhoneEmptyIcon, EmailIcon } from '@/components/icons';

export default {
    name: 'AppFooterContact',
    components: {
        Accordion,
        AccordionTitle,
        AccordionContent,
        LocationIcon,
        PhoneEmptyIcon,
        EmailIcon,
    },
    props: {
        contactInfo: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.app-footer-contact {
    display: flex;
    flex-direction: column;
    gap: 32px;

    @include for-mobile {
        gap: 0;
    }

    &__title {
        font-size: $text-xs;
        font-weight: $fw-medium;
        line-height: 16px;
        color: $color-coal;
        text-transform: uppercase;
        padding: 16px 0;

        @include for-desktop {
            padding: 0;
            pointer-events: none;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @include for-mobile {
            padding-top: 16px;
            padding-bottom: 16px;
        }
    }

    &__item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        text-decoration: none;
    }

    &__text {
        font-size: $text-xs;
        font-weight: $fw-regular;
        line-height: 16px;
        color: $color-graphene;
        flex: 1;
    }
}
</style>

