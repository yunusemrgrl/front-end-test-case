<template>
    <footer class="app-footer">
        <Container padding="48px 0" padding-mobile="16px" custom-class="app-footer__container">
            <div class="app-footer__links">
                <AppFooterSection
                    v-for="(section, index) in FOOTER_SECTIONS"
                    :key="index"
                    class="app-footer__section"
                >
                    <AppFooterSectionTitle :title="section.title" :section-id="index" />
                    <AppFooterSectionContent :section-id="index">
                        <ul class="app-footer__section-list">
                            <li
                                v-for="(link, linkIndex) in section.links"
                                :key="linkIndex"
                                class="app-footer__section-item"
                            >
                                <a :href="link.url" class="app-footer__section-link">{{ link.label }}</a>
                            </li>
                        </ul>
                    </AppFooterSectionContent>
                    <Divider variant="medium" orientation="horizontal" color="var(--color-smoke)" class="app-footer__section-divider" />
                </AppFooterSection>

                <AppFooterSection class="app-footer__section app-footer__section--contact">
                    <AppFooterSectionTitle :title="CONTACT_INFO.title" :section-id="'contact'" />
                    <AppFooterSectionContent :section-id="'contact'">
                        <div class="app-footer__contact-info">
                            <div class="app-footer__contact-item">
                                <LocationIcon color="var(--color-graphene)" />
                                <span class="app-footer__contact-text">{{ CONTACT_INFO.address }}</span>
                            </div>
                            <div class="app-footer__contact-item">
                                <PhoneEmptyIcon color="var(--color-graphene)" />
                                <span class="app-footer__contact-text">{{ CONTACT_INFO.phone }}</span>
                            </div>
                            <div class="app-footer__contact-item">
                                <EmailIcon color="var(--color-graphene)" />
                                <span class="app-footer__contact-text">{{ CONTACT_INFO.email }}</span>
                            </div>
                        </div>
                    </AppFooterSectionContent>
                </AppFooterSection>
            </div>

            <div class="app-footer__bottom">
                <p class="app-footer__copyright">{{ COPYRIGHT_TEXT }}</p>
                <div class="app-footer__social">
                    <a v-for="(social, index) in socialMediaWithComponents" :key="index" :href="social.url"
                        :aria-label="social.name" class="app-footer__social-link">
                        <component :is="social.component" :width="32" :height="32" />
                    </a>
                </div>
            </div>
        </Container>
    </footer>
</template>

<script>
import { Container } from '@/components/ui';
import {
    AppFooterSection,
    AppFooterSectionTitle,
    AppFooterSectionContent,
} from '@/components/footer';
import {
    LocationIcon,
    PhoneEmptyIcon,
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    YouTubeIcon,
    PinterestIcon,
} from '@/components/icons';
import { FOOTER_SECTIONS, CONTACT_INFO, SOCIAL_MEDIA, COPYRIGHT_TEXT } from '@/constants/footer';

export default {
    name: 'AppFooter',
    components: {
        Container,
        AppFooterSection,
        AppFooterSectionTitle,
        AppFooterSectionContent,
        LocationIcon,
        PhoneEmptyIcon,
        EmailIcon,
        FacebookIcon,
        TwitterIcon,
        InstagramIcon,
        YouTubeIcon,
        PinterestIcon,
    },
    computed: {
        socialMediaWithComponents() {
            const iconMap = {
                FacebookIcon,
                TwitterIcon,
                InstagramIcon,
                YouTubeIcon,
                PinterestIcon,
            };

            return SOCIAL_MEDIA.map((social) => ({
                ...social,
                component: iconMap[social.icon] || null,
            }));
        },
    },
    data() {
        return {
            FOOTER_SECTIONS,
            CONTACT_INFO,
            COPYRIGHT_TEXT,
        };
    },
};
</script>

<style lang="scss" scoped>
.app-footer {
    background-color: $color-white;
    width: 100%;

    &__container {
        gap: 32px;
    }

    &__links {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 40px;

        @include for-mobile {
            grid-template-columns: 1fr;
            gap: 0;
        }
    }

    &__section {
        @include for-mobile {
            &:not(.app-footer__section--contact) {
                border-bottom: 1px solid $color-smoke;
            }
        }
    }

    &__section-list {
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

    &__section-item {
        margin: 0;
    }

    &__section-link {
        font-size: $text-xs;
        font-weight: $fw-regular;
        line-height: 16px;
        color: $color-graphene;
        text-decoration: none;
    }

    &__contact-info {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @include for-mobile {
            padding-top: 16px;
            padding-bottom: 16px;
        }
    }

    &__contact-item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
    }

    &__contact-text {
        font-size: $text-xs;
        font-weight: $fw-regular;
        line-height: 16px;
        color: $color-graphene;
        flex: 1;
    }

    &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include for-mobile {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
        }
    }

    &__copyright {
        font-size: $text-2xs;
        font-weight: $fw-medium;
        line-height: 16px;
        color: $color-gray;
        margin: 0;

        @include for-mobile {
            order: 2;
            text-align: center;
            text-wrap-style: balance;
        }
    }

    &__social {
        display: flex;
        align-items: center;
        gap: 24px;

        @include for-mobile {
            width: 100%;
            justify-content: center;
            order: 1;
        }
    }

    &__social-link {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
