<template>
    <section class="discount-banner">
        <div class="discount-banner__container">
            <div v-html="bannerData.content"></div>
        </div>
    </section>
</template>

<script>
import { DISCOUNT_BANNER_DATA } from '@/constants/discount-banner';

export default {
    name: 'DiscountBannerSection',
    data() {
        return {
            bannerData: DISCOUNT_BANNER_DATA,
        };
    },
    methods: {
        handleContentClick(event) {
            if (event.target.classList.contains('discount-banner__button')) {
                this.handleShopNow();
            }
        },
        handleShopNow() {
            this.$router.push('/products');
        },
    },
};
</script>

<style lang="scss" scoped>
.discount-banner {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    color: $color-navy-blue;
    background: $color-secondary;
    background-image: url('/images/discount-banner-bg.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    &__container {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 1160px;
        height: 400px;

        @include for-mobile {
            height: 514px;
            flex-direction: column;
        }
    }

    :deep(.discount-banner__image-wrapper) {
        position: relative;
        flex-shrink: 0;
        margin: 0;
    }


    :deep(.discount-banner__image-wrapper--left) {
        position: absolute;
        width: 519px;
        left: 53px;
        bottom: 33px;

        @include for-mobile {
            width: 251px;
            height: 141px;
            left: 50%;
            transform: translateX(-14%);
            bottom: 17px;
            z-index: 2;
        }
    }

    :deep(.discount-banner__image-wrapper--right) {
        position: absolute;
        height: 294px;
        width: 296px;
        right: 205px;
        top: 51px;
        z-index: 2;

        @include for-mobile {
            width: 250px;
            height: 248px;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    :deep(.discount-banner__image) {
        width: 100%;
        height: auto;
        display: block;
    }

    :deep(.discount-banner__content-box) {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 51px;
        right: 451px;
        padding: 32px;
        background: $color-white;
        border-radius: 40px 0 40px 0;
        gap: 12px;

        @include for-mobile {
            top: 244px;
            right: 50%;
            transform: translateX(45%);
        }
    }

    :deep(.discount-banner__title) {
        display: flex;
        flex-direction: column;
        gap: 4px;

        @include for-mobile {
            width: 168px;
        }
    }

    :deep(.discount-banner__title-line) {
        display: block;
        font-size: $text-base;
        font-weight: $fw-regular;

        @include for-mobile {
            font-size: $text-sm;
            line-height: 16px;
        }
    }

    :deep(.discount-banner__title-line--bold) {
        font-size: $text-lg;
        font-weight: $fw-bold;
        line-height: 24px;

        @include for-mobile {
            font-size: $text-base;
            line-height: 16px;
            width: 168px;
        }
    }

    :deep(.discount-banner__discount) {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-family: $ff-secondary;
    }

    :deep(.discount-banner__discount-number) {
        font-size: $text-3xl;
        font-weight: $fw-bold;
        vertical-align: middle;

        @include for-mobile {
            font-size: $text-2xl;
            line-height: 44px;
        }
    }

    :deep(.discount-banner__discount-text) {
        font-size: $text-2xl;
        font-weight: $fw-bold;
        letter-spacing: -0.2px;

        @include for-mobile {
            font-size: $text-xl;
            line-height: 36px;
        }
    }

    :deep(.discount-banner__button) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 32px;
        width: max-content;
        padding: 6px 16px;
        color: $color-white;
        background: $color-secondary;
        border-radius: 4px;
        border: none;
        font-size: $text-sm;
        font-weight: $fw-bold;
        font-family: $ff-primary;
        transition: all 0.3s ease;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            background: $color-dark-secondary;
        }

        &:active {
            background: $color-dark-secondary;
        }

        &:focus-visible {
            outline: 2px solid $color-secondary;
            outline-offset: 2px;
        }

        @include for-mobile {
            padding: 6px 16px;
            font-size: $text-sm;
        }
    }

}
</style>
