<template>
    <div class="app-footer-bottom">
        <p class="app-footer-bottom__copyright">{{ copyrightText }}</p>
        <div class="app-footer-bottom__social">
            <a
                v-for="(social, index) in socialMedia"
                :key="index"
                :href="social.url"
                :aria-label="social.name"
                class="app-footer-bottom__social-link"
            >
                <component :is="social.component" :width="32" :height="32" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooterBottom',
    props: {
        copyrightText: {
            type: String,
            required: true,
        },
        socialMedia: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.app-footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include for-mobile {
        align-items: flex-start;
        flex-direction: column;
        gap: 24px;
    }

    &__copyright {
        font-size: $text-2xs;
        font-weight: $fw-medium;
        line-height: 16px;
        color: $color-gray;
        margin: 0;

        @include for-mobile {
            width: 100%;
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

