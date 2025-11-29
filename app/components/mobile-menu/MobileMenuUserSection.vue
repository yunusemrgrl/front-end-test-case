<template>
    <div class="mobile-menu__user-section">
        <ul class="mobile-menu__user-list">
            <li v-for="(u, idx) in user" :key="idx" class="mobile-menu__user-item">
                <button class="mobile-menu__user-button" @click="select(u)">
                    <span class="mobile-menu__user-label">{{ u.label }}</span>
                    <component v-if="iconMap && iconMap[u.icon]" :is="iconMap[u.icon]" :width="20" :height="20"
                        :color="'var(--color-graphene)'" class="mobile-menu__user-icon" aria-hidden="true" />
                    <span v-else class="mobile-menu__user-icon" aria-hidden="true"></span>
                </button>
                <Divider v-if="idx !== user.length - 1" variant="thin" orientation="horizontal"
                    class="mobile-menu__item-divider" />
            </li>
        </ul>
    </div>
</template>

<script>
import HelpIcon from "../icons/HelpIcon.vue";
import LogoutIcon from "../icons/LogoutIcon.vue";
import OrdersIcon from "../icons/OrdersIcon.vue";
import UserIcon from "../icons/UserIcon.vue";
import { Divider } from "../ui";

export default {
    name: 'MobileMenuUserSection',
    components: { Divider, UserIcon, OrdersIcon, HelpIcon, LogoutIcon },
    props: {
        user: {
            type: Array,
            default: () => [
                { label: 'My Profile', icon: 'user', route: '#' },
                { label: 'Order history', icon: 'orders', route: '#' },
                { label: 'Help center', icon: 'help', route: '#' },
                { label: 'Logout', icon: 'logout', route: '#' },
            ]
        },
    },
    methods: {
        select(u) {
            this.$emit('select', u)
        }
    },
    computed: {
        iconMap() {
            return {
                user: UserIcon,
                orders: OrdersIcon,
                help: HelpIcon,
                logout: LogoutIcon,
            }
        }
    }
}
</script>

<style lang="scss" src="./MobileMenuUserSection.scss"></style>
