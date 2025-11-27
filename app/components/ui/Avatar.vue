<template>
    <figure class="avatar" :style="avatarStyle">
        <img v-if="src" :src="src" :alt="alt" class="avatar__image" />
    </figure>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            default: 'avatar',
        },
        size: {
            type: Number,
            default: 36,
        },
        border: {
            type: Number,
            default: 2,
        },
        borderColor: {
            type: String,
            default: null,
        },
        backgroundColor: {
            type: String,
            default: null,
        },
    },
    computed: {
        avatarStyle() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                ...(this.border && { borderWidth: `${this.border}px` }),
                ...(this.borderColor && { borderColor: this.borderColor }),
                ...(this.backgroundColor && { backgroundColor: this.backgroundColor }),
            };
        },
    },
};
</script>

<style lang="scss" scoped>
.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: 16px;
    border-radius: 50%;
    border-style: solid;
    border-color: $color-white;
    overflow: hidden;
    flex-shrink: 0;

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>

