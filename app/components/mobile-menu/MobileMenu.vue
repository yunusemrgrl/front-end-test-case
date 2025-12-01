<template>
    <div class="mobile-menu-overlay" @click.self="close">
        <aside class="mobile-menu" role="dialog" aria-label="Mobile menu">
            <MobileMenuHeader @close="close" :title="'Menu'" />

            <MobileMenuPanels :stack="stack" @open-children="openChildren" @select="handleSelect" @back="goBack" />

            <MobileMenuUserSection :user="user" :iconMap="iconMap" @select="handleSelect" />
        </aside>
    </div>
</template>

<script>
import MobileMenuHeader from '@/components/mobile-menu/MobileMenuHeader.vue';
import MobileMenuPanels from '@/components/mobile-menu/MobileMenuPanels.vue';
import MobileMenuUserSection from '@/components/mobile-menu/MobileMenuUserSection.vue';
import { HelpIcon, LogoutIcon, OrdersIcon, UserIcon } from '@/components/icons';
import { MENU_ITEMS } from '@/constants/menu-items';
import { USER_MENU_ITEMS } from '@/constants/user-menu-items';

export default {
    name: 'MobileMenu',
    components: { MobileMenuHeader, MobileMenuPanels, MobileMenuUserSection, UserIcon, OrdersIcon, HelpIcon, LogoutIcon },
    props: {
        items: {
            type: Array,
            default: () => MENU_ITEMS,
        },

        user: {
            type: Array,
            default: () => USER_MENU_ITEMS,
        }
    },
    data() {
        return {
            stack: [],
            _iconMap: {
                user: UserIcon,
                orders: OrdersIcon,
                help: HelpIcon,
                logout: LogoutIcon,
            }
        }
    },
    computed: {
        canGoBack() {
            return this.stack.length > 1
        }
    },
    created() {
        this.stack = [{ title: 'Menu', items: this.items }]
    },
    methods: {
        close() {
            this.$emit('close')
        },
        onItemClick(item) {
            if (item.children && item.children.length) {
                this.stack.push({ title: item.label, items: item.children })
            } else {
                this.$emit('select', item)
                this.close()
            }
        },
        openChildren(item) {
            if (item && item.children) {
                this.stack.push({ title: item.label, items: item.children })
            }
        },
        handleSelect(item) {
            this.$emit('select', item)
            this.close()
        },
        goBack() {
            if (this.stack.length > 1) this.stack.pop()
        },
    }
}
</script>

<style lang="scss" scoped>
.mobile-menu-overlay {
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: end;
    inset: 0;
    background: rgba(0, 0, 0, 0.36);
    z-index: 1000;
}

.mobile-menu {
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 300px;
    background: $color-white;
    transform: translateX(0);
}

.mobile-menu {
    &__panel {
        &.is-children-active {
            .mobile-menu__item-label {
                color: $color-graphene;
                font-weight: $fw-regular;
            }

        }
    }
}

.mobile-menu {
    &-enter-active,
    &-leave-active {
        transition: opacity 200ms ease-in-out;

        .mobile-menu {
            transition: transform 100ms ease-in-out;
        }
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;

        .mobile-menu {
            transform: translateX(100%);
        }
    }

    &-enter-to,
    &-leave-from {
        opacity: 1;

        .mobile-menu {
            transform: translateX(0);
        }
    }
}
</style>
