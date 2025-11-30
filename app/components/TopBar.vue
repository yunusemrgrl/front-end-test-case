<template>
    <div class="top-bar">
        <div class="container">

            <div class="top-bar__middle">
                <div class="top-bar__left">
                    <img class="top-bar__logo" :src="logo" alt="logo">
                </div>

                <div class="top-bar__search">
                    <SearchIcon class="top-bar__search-icon desktop-only" :width="24" :height="24"
                        :color="inputValue ? 'var(--color-graphene)' : 'var(--color-gray-40)'" />

                    <SearchIcon class="top-bar__search-icon mobile-only" :width="24" :height="24"
                        color="var(--color-graphene)" />

                    <input class="top-bar__search-input desktop-only" type="text"
                        placeholder="Write the product or category you are looking for" v-model="inputValue"
                        @focus="isFocused = true" @blur="isFocused = false" />
                    <ClearIcon v-if="inputValue" class="top-bar__search-clear-icon desktop-only" :width="24"
                        :height="24" @click="inputValue = ''" />
                </div>

                <div class="top-bar__right">
                    <div class="top-bar__profile desktop-only">
                        <p class="top-bar__profile-greeting">Hello,</p>
                        <p class="top-bar__profile-name">Clara Clara</p>
                        <Avatar src="/images/profile.jpg" alt="user" :size="36" :border="2"
                            border-color="var(--color-white)" />
                        <ChevronIcon class="top-bar__profile-chevron" rotate="down" :width="24" :height="24" />
                    </div>

                    <Divider variant="thin" orientation="vertical" class="top-bar__divider desktop-only" :height="24" />

                    <div class="top-bar__basket">
                        <BasketIcon class="top-bar__basket-icon" :width="23" :height="18"
                            color="var(--color-graphene)" />
                        <ShoppingIndicator class="top-bar__basket-indicator" :size="16" color="var(--color-error)"
                            :count="2" />
                    </div>

                    <HamburgerMenuIcon class="top-bar__hamburger-menu-icon mobile-only" :width="32" :height="32"
                        @click="showMobileMenu = true" />
                </div>
            </div>

            <TopNav />

            <transition name="mobile-menu">
                <MobileMenu v-if="showMobileMenu" @close="showMobileMenu = false" @select="onMobileSelect" />
            </transition>
        </div>
    </div>
</template>

<script>
import { BasketIcon, ChevronIcon, ClearIcon, HamburgerMenuIcon, SearchIcon } from '@/components/icons';
import { Divider, Avatar, ShoppingIndicator } from '@/components/ui';
import TopNav from '@/components/TopNav.vue';
import MobileMenu from '@/components/MobileMenu.vue';

export default {
    data() {
        return {
            logo: '/images/logo.svg',
            isFocused: false,
            inputValue: '',
            showMobileMenu: false,
        }
    },
    components: {
        BasketIcon,
        SearchIcon,
        ChevronIcon,
        ClearIcon,
        ShoppingIndicator,
        HamburgerMenuIcon,
        Divider,
        Avatar,
        TopNav,
        MobileMenu
    },
    methods: {
        onMobileSelect(item) {
        }
    }
}
</script>

<style lang="scss" scoped>
.top-bar {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
    background-color: $color-white;

    @include for-mobile {
        height: 56px;
    }

    &__middle {
        display: flex;
        align-items: center;
        width: 100%;

        @include for-mobile {
            gap: 32px;
        }
    }

    &__left {
        flex-shrink: 0;
        margin-right: 20px;

        @include for-mobile {
            margin-right: 16px;
        }
    }

    &__search {
        position: relative;
        display: flex;
        align-items: center;
        width: 560px;
        height: 42px;
        margin-left: 140px;
        flex-shrink: 0;
        transition: all 0.3s ease;

        @include for-mobile {
            margin-left: auto;
            width: auto;
        }

        &-icon {
            position: absolute;
            left: 8px;

            @include for-mobile {
                position: relative;
                left: 0;
                cursor: pointer;

                :deep(path) {
                    fill: $color-graphene;
                }
            }
        }

        &-clear-icon {
            position: absolute;
            color: $color-graphene;
            right: 8px;
            cursor: pointer;
        }

        &-input {
            height: 42px;
            width: 100%;
            background-color: $color-smoke-30;
            border: 0;
            padding-left: 40px;
            padding-right: 40px;
            border-radius: 32px;
            box-sizing: border-box;

            &:focus {
                outline: none;
            }

            &::placeholder {
                font-size: $text-sm;
                color: $color-gray;
            }
        }
    }

    &__right {
        display: flex;
        justify-content: end;
        align-items: center;
        height: 72px;
        width: 100%;
        margin-left: 24px;
        gap: 32px;

        @include for-mobile {
            width: auto;
            height: 52px;
            margin-left: 0;
        }
    }

    &__hamburger-menu-icon {
        cursor: pointer;
    }

    &__basket {
        position: relative;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        cursor: pointer;

        &-indicator {
            position: absolute;
            bottom: 12px;
            left: 10px;
        }
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline: 140px;

    @include for-mobile {
        width: 100%;
        padding-inline: 16px;
    }
}

.top-bar__profile {
    display: flex;
    align-items: center;

    &-greeting {
        display: inline-block;
        font-size: $text-sm;
        color: $color-gray
    }

    &-name {
        display: inline-block;
        color: $color-coal;
        font-size: $text-sm;
        font-weight: $fw-medium;
        padding-left: 2px;
    }

    &-avatar {
        padding-inline: 16px;
    }

    &-chevron {
        color: $color-gray-40;
        cursor: pointer;
    }
}
</style>