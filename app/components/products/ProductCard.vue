<template>
    <article class="product-card">
        <div class="product-card__image-wrapper">
            <Image :src="imageUrl" :use-figure="true" container-class="product-card__image-container"
                image-class="product-card__image" loading="lazy" />

            <div v-if="showOverlay" class="product-card__overlay">
                <div class="product-card__actions">
                    <Button variant="product-card" :has-left-icon="true" @click="onQuickView">
                        <template #left-icon>
                            <EyeIcon />
                        </template>
                        {{ PRODUCT_CARD_TEXTS.QUICK_VIEW }}
                    </Button>
                    <Divider variant="thin" orientation="vertical" color="var(--color-white-20)" :height="32" />
                    <Button variant="product-card" :has-left-icon="true" @click="onAddToCart">
                        <template #left-icon>
                            <ShoppingCartIcon />
                        </template>
                        {{ PRODUCT_CARD_TEXTS.ADD }}
                    </Button>
                </div>
            </div>
        </div>

        <div class="product-card__content">
            <span class="product-card__price">{{ formattedPrice }}</span>
            <h3 class="product-card__title">{{ title }}</h3>
        </div>

        <div class="product-card__footer mobile-only">
            <Button variant="primary" size="small" :has-left-icon="true" @click="onAddToCart">
                <template #left-icon>
                    <ShoppingCartIcon />
                </template>
                {{ PRODUCT_CARD_TEXTS.ADD }}
            </Button>
        </div>
    </article>
</template>

<script>
import { Button, Divider, Image } from '@/components/ui';
import { EyeIcon, ShoppingCartIcon } from '@/components/icons';
import { PRODUCT_CARD_TEXTS } from '@/constants/product-card';
import { formatPrice } from '@/helpers/format-currency';

export default {
    name: 'ProductCard',
    components: {
        Button,
        Divider,
        Image,
        EyeIcon,
        ShoppingCartIcon,
    },
    props: {
        product: {
            type: Object,
            required: true,
        },
        showOverlay: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['add-to-cart', 'quick-view'],
    data() {
        return {
            PRODUCT_CARD_TEXTS,
        };
    },
    computed: {
        imageUrl() {
            return this.product.thumbnail || this.product.image;
        },
        title() {
            return this.product.title;
        },
        price() {
            return this.product.price;
        },
        formattedPrice() {
            return formatPrice(this.price);
        },
    },
    methods: {
        onAddToCart() {
            this.$emit('add-to-cart', this.product);
        },
        onQuickView() {
            this.$emit('quick-view', this.product);
        },
    },
};
</script>

<style lang="scss" scoped>
.product-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid $color-smoke-50;
    border-radius: 6px;

    &:hover {
        box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.04);
    }

    &:hover &__overlay {
        opacity: 1;
        visibility: visible;
    }

    &__image-wrapper {
        position: relative;
        width: 100%;
        height: 184px;
        overflow: hidden;

        @include for-mobile {}
    }

    &__image-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        background-color: $color-smoke-16;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 16px;

        @include for-mobile {
            height: 175px;
            aspect-ratio: 3 / 2;
            padding: 0;
        }

    }

    &__overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: end;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;

        @include for-mobile {
            display: none;
        }
    }

    &__actions {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: $color-black-80;
        padding: 8px 0;

        :deep(.divider) {
            margin-inline: 8px;
        }
    }

    &__content {
        height: 144px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: $color-graphene;
        padding-inline: 32px;
        gap: 8px;
        line-height: 1.5;

        @include for-mobile {
            height: 128px;
            padding-inline: 16px;
        }
    }

    &__price {
        font-size: $text-lg;
        font-weight: $fw-bold;
        color: $color-coal;
        margin: 0;
    }

    &__title {
        font-size: $text-sm;
        font-weight: $fw-regular;
        color: $color-graphene;
        line-height: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;

        @include for-mobile {
            min-height: 72px;
            -webkit-line-clamp: 3;
            line-clamp: 3;
        }
    }

    &__footer {
        display: flex;
        justify-content: center;
        padding: 16px;

        :deep(button) {
            width: 100%;
        }
    }
}
</style>
