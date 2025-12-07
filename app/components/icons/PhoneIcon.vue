<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 15 15" fill="none">
        <path
            d="M13.5898 0.792969C13.9362 0.865885 14.1094 1.07552 14.1094 1.42188C14.1094 4.92188 12.8698 7.91146 10.3906 10.3906C7.91146 12.8698 4.92188 14.1094 1.42188 14.1094C1.07552 14.1094 0.865885 13.9362 0.792969 13.5898L0.136719 10.7461C0.0455729 10.3997 0.173177 10.1536 0.519531 10.0078L3.58203 8.69531C3.8737 8.56771 4.12891 8.63151 4.34766 8.88672L5.6875 10.5273C6.76302 10.0352 7.71094 9.36979 8.53125 8.53125C9.36979 7.69271 10.0352 6.74479 10.5273 5.6875L8.88672 4.32031C8.63151 4.11979 8.56771 3.86458 8.69531 3.55469L10.0078 0.492188C10.1536 0.164062 10.3997 0.0455729 10.7461 0.136719L13.5898 0.792969Z"
            :fill="color" />
    </svg>
</template>

<script>
export default {
    name: 'PhoneIcon',
    props: {
        width: {
            type: [Number, String],
            default: 15
        },
        height: {
            type: [Number, String],
            default: 15
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
