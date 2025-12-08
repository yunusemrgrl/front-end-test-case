<template>
    <footer class="app-footer">
        <Container padding="48px 0" padding-mobile="16px" custom-class="app-footer__container">
            <div class="app-footer__content">
                <AppFooterLinks :sections="FOOTER_SECTIONS" />
                <AppFooterContact :contact-info="CONTACT_INFO" />
            </div>

            <AppFooterBottom :copyright-text="COPYRIGHT_TEXT" :social-media="socialMediaWithComponents" />
        </Container>
    </footer>
</template>

<script>
import { Container } from '@/components/ui';
import { AppFooterLinks, AppFooterContact, AppFooterBottom } from '@/components/footer';
import {
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
        AppFooterLinks,
        AppFooterContact,
        AppFooterBottom,
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

    &__content {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 40px;

        @include for-mobile {
            grid-template-columns: 1fr;
            gap: 0;
        }
    }
}
</style>
