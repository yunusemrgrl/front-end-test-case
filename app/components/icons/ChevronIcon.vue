<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24" fill="none" :style="svgStyle">
        <path
            d="M18.4883 9.31641C18.6341 9.48047 18.6341 9.63542 18.4883 9.78125L12.7461 15.5234C12.6003 15.6693 12.4544 15.6693 12.3086 15.5234L6.56641 9.78125C6.42057 9.63542 6.42057 9.48047 6.56641 9.31641L7.11328 8.79688C7.25911 8.63281 7.41406 8.63281 7.57812 8.79688L12.5273 13.7188L17.4766 8.79688C17.6406 8.63281 17.7956 8.63281 17.9414 8.79688L18.4883 9.31641Z"
            :fill="color" :fill-opacity="fillOpacity" />
    </svg>
</template>
<script>

export default {
    name: 'ChevronIcon',
    props: {
        width: {
            type: [Number, String],
            default: 17
        },
        height: {
            type: [Number, String],
            default: 17
        },
        color: {
            type: [String],
            default: 'currentColor'
        },
        fillOpacity: {
            type: [Number, String],
            default: 1
        }
        ,
        rotate: {
            type: [String, Number],
            default: null
        }
    }
    ,
    computed: {
        svgStyle() {
            const rot = this.rotate
            if (rot === null || rot === undefined || rot === '') return null

            let angle = 0
            if (typeof rot === 'number') {
                angle = rot
            } else {
                const key = String(rot).toLowerCase()
                switch (key) {
                    case 'left':
                        angle = 90
                        break
                    case 'right':
                        angle = -90
                        break
                    case 'up':
                        angle = 180
                        break
                    case 'down':
                        angle = 0
                        break
                    default: {
                        const n = parseFloat(key)
                        angle = Number.isFinite(n) ? n : 0
                    }
                }
            }

            if (!angle) return null

            return {
                transform: `rotate(${angle}deg)`,
                transformOrigin: 'center',
                transformBox: 'fill-box'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
svg path:not([fill]) {
    fill: $color-gray-40;
}
</style>
