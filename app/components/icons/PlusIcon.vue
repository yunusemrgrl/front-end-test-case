<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 12 12" fill="none">
        <path
            d="M11.5 5C11.6458 5 11.7604 5.05208 11.8438 5.15625C11.9479 5.23958 12 5.35417 12 5.5V6.5C12 6.64583 11.9479 6.77083 11.8438 6.875C11.7604 6.95833 11.6458 7 11.5 7H7V11.5C7 11.6458 6.94792 11.7708 6.84375 11.875C6.76042 11.9583 6.64583 12 6.5 12H5.5C5.35417 12 5.22917 11.9583 5.125 11.875C5.04167 11.7708 5 11.6458 5 11.5V7H0.5C0.354167 7 0.229167 6.95833 0.125 6.875C0.0416667 6.77083 0 6.64583 0 6.5V5.5C0 5.35417 0.0416667 5.23958 0.125 5.15625C0.229167 5.05208 0.354167 5 0.5 5H5V0.5C5 0.354167 5.04167 0.239583 5.125 0.15625C5.22917 0.0520833 5.35417 0 5.5 0H6.5C6.64583 0 6.76042 0.0520833 6.84375 0.15625C6.94792 0.239583 7 0.354167 7 0.5V5H11.5Z"
            :fill="color" />
    </svg>
</template>

<script>
export default {
    name: 'PlusIcon',
    props: {
        width: {
            type: [Number, String],
            default: 12
        },
        height: {
            type: [Number, String],
            default: 12
        },
        color: {
            type: [String],
            default: undefined
        }
    }
}
</script>

<style lang="scss" scoped>
svg path:not([fill]) {
    fill: $color-graphene;
}
</style>