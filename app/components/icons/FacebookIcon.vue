<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 32 32" fill="none">
        <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#3B5998"/>
        <path d="M20.0225 16.6265H17.1675V27.0859H12.8419V16.6265H10.7847V12.9506H12.8419V10.5719C12.8419 8.8709 13.6499 6.20728 17.206 6.20728L20.4101 6.22068V9.78872H18.0853C17.704 9.78872 17.1678 9.97925 17.1678 10.7907V12.954H20.4004L20.0225 16.6265Z" fill="white"/>
    </svg>
</template>

<script>
export default {
    name: 'FacebookIcon',
    props: {
        width: {
            type: [Number, String],
            default: 32
        },
        height: {
            type: [Number, String],
            default: 32
        },
        color: {
            type: String,
            default: 'currentColor'
        },
    },
}
</script>

<style lang="scss" scoped>
svg path:not([fill]) {
    fill: $color-white;
}
</style>

