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
import { Divider } from '@/components/ui';
import { HelpIcon, LogoutIcon, OrdersIcon, UserIcon } from '@/components/icons';
import { USER_MENU_ITEMS } from '@/constants/user-menu-items';

export default {
    name: 'MobileMenuUserSection',
    components: { Divider, HelpIcon, LogoutIcon, OrdersIcon, UserIcon },
    props: {
        user: {
            type: Array,
            default: () => USER_MENU_ITEMS,
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

<style lang="scss" scoped>
.mobile-menu {
    &__user {
        &-list {
            display: flex;
            flex-direction: column;
            padding: 16px;
            gap: 16px;
            background-color: $color-smoke-30;
        }

        &-button {
            display: flex;
            align-items: center;
            justify-content: end;
            width: 100%;
            height: 24px;
            gap: 14px;
            border: 0;
            background-color: transparent;
            cursor: pointer;
        }

        &-label {
            font-size: $text-sm;
            font-weight: $fw-medium;
            color: $color-graphene;
        }
    }
}
</style>
