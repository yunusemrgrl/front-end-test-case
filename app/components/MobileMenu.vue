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
// Local imports for subcomponents and icons
import MobileMenuHeader from './mobile-menu/MobileMenuHeader.vue'
import MobileMenuPanels from './mobile-menu/MobileMenuPanels.vue'
import MobileMenuUserSection from './mobile-menu/MobileMenuUserSection.vue'
import UserIcon from './icons/UserIcon.vue'
import OrdersIcon from './icons/OrdersIcon.vue'
import HelpIcon from './icons/HelpIcon.vue'
import LogoutIcon from './icons/LogoutIcon.vue'

export default {
    name: 'MobileMenu',
    components: { MobileMenuHeader, MobileMenuPanels, MobileMenuUserSection },
    props: {
        items: {
            type: Array,
            default: () => [
                { label: 'Campaigns' },
                { label: 'Personal Care' },
                {
                    label: 'Skin Care',
                    children: [
                        { label: 'Facial Treatment' },
                        { label: 'Hand and Face Care' },
                        { label: 'Natural Skin Products' },
                    ],
                },
                { label: 'Make - Up' },
                { label: 'Mother & Baby' },
                { label: 'Men Care' },
                { label: 'Healthy Life' },
                { label: 'Brands' },
            ],
        },

        user: {
            type: Array,
            default: () => [
                { label: 'My Profile', icon: 'user', route: '#' },
                { label: 'Order history', icon: 'orders', route: '#' },
                { label: 'Help center', icon: 'help', route: '#' },
                { label: 'Logout', icon: 'logout', route: '#' },
            ]
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

<style lang="scss" src="./mobile-menu/mobile-menu.scss">
</style>
