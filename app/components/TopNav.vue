<template>
    <nav class="top-bar__nav">
        <ul class="top-bar__nav-list desktop-only">
            <li 
                v-for="item in navItems" 
                :key="item.label" 
                class="top-bar__nav-item"
            >
                <a :href="item.url" role="heading" aria-level="6">{{ item.label }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { NAV_ITEMS } from '@/constants/menu-items';

export default {
    name: 'TopBarNav', 
    data() {
        return {
            navItems: NAV_ITEMS,
        };
    },
};
</script>

<style lang="scss" scoped>
.top-bar__nav {
    height: 100%;
    width: 100%;

    &-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-item {
        padding: 16px;
        font-size: $text-sm;
        font-weight: $fw-bold;
        color: $color-coal;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            background-color: $color-smoke-30;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>
