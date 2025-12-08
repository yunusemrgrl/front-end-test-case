<template>
    <Section custom-class="featured-catalog">
        <Container>
            <SectionHeader :title="FEATURED_CATALOG_TEXTS.TITLE" />
            <div class="featured-catalog__grid">
                <CategoryCard v-for="category in FEATURED_CATALOG_CATEGORIES" :key="category.id" :category="category" />
            </div>
        </Container>
    </Section>
</template>

<script>
import CategoryCard from '@/components/featured-catalog/CategoryCard.vue';
import { Container, Section, SectionHeader } from '@/components/ui';
import { FEATURED_CATALOG_TEXTS, FEATURED_CATALOG_CATEGORIES } from '@/constants/featured-catalog';

export default {
    name: 'FeaturedCatalogSection',
    components: {
        CategoryCard,
        Container,
        Section,
        SectionHeader,
    },
    data() {
        return {
            FEATURED_CATALOG_TEXTS,
            FEATURED_CATALOG_CATEGORIES,
        };
    },
};
</script>

<style lang="scss" scoped>
.featured-catalog {
    &__grid {
        display: grid;
        grid-template-columns: repeat(2, 360px);
        gap: 40px;
        justify-content: center;

        @include for-mobile {
            grid-template-columns: 1fr;
            gap: 16px;
            justify-items: center;
        }
    }
}
</style>
