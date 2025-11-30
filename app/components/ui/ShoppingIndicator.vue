<template>
    <div class="shopping-indicator" :style="indicatorStyle">
        <span class="shopping-indicator__count">{{ count }}</span>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: Number,
            default: 16
        },
        color: {
            type: String,
            default: 'currentColor'
        },
        count: {
            type: [Number, String],
            default: 0
        }
    },
    computed: {
        indicatorStyle() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                ...(this.color && { backgroundColor: this.color }),
            };
        },
    },
}
</script>

<style lang="scss" scoped>
.shopping-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $color-primary;

    &__count {
        color: $color-white;
        font-size: $text-xs;
        font-weight: $fw-bold;
    }
}
</style>

