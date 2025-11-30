<template>
  <section class="hero-section">
    <swiper :modules="modules" :navigation="true" :pagination="{ clickable: true }" class="hero-swiper">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="slide-content">
          <div class="content-wrapper">
            <div class="text-content">
              <h6 class="slide-subtitle">{{ slide.subtitle }}</h6>
              <h2 class="slide-title">{{ slide.title }}</h2>
              <p class="slide-description">{{ slide.description }}</p>
              <Button variant="primary" @click="handleShopNow">
                {{ slide.buttonText }}
              </Button>
            </div>
            <div class="image-content">
              <figure>
                <img :src="slide.image" :alt="slide.title" />
              </figure>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@/components/ui';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination, Autoplay];

const slides = [
  {
    subtitle: 'NATURALS BY WATSONS',
    title: 'The new 2021 collection',
    description:
      'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    buttonText: 'SHOP NOW',
    image: '/images/right-part.png',
  },
  {
    subtitle: 'NATURALS BY WATSONS',
    title: 'The new 2021 collection',
    description:
      'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    buttonText: 'SHOP NOW',
    image: '/images/right-part.png',
  },
  {
    subtitle: 'NATURALS BY WATSONS',
    title: 'The new 2021 collection',
    description:
      'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
    buttonText: 'SHOP NOW',
    image: '/images/right-part.png',
  },
];

const handleShopNow = () => {
  // Navigate to shop page or open product modal
};
</script>

<style lang="scss" scoped>
.hero-section {
  width: 100%;
  position: relative;
  background: linear-gradient(0deg, #F2F0FF, #F2F0FF),
    linear-gradient(87.81deg, #F2F0FF 35.04%, rgba(255, 255, 255, 0.67) 53.63%, rgba(252, 252, 255, 0.96) 64.78%, #F2F0FF 90.91%);


  @include for-mobile {
    background: linear-gradient(0deg, #F2F0FF, #F2F0FF),
      linear-gradient(163.21deg, #F2F0FF 9.01%, rgba(251, 251, 255, 0.77) 26.47%, rgba(255, 255, 255, 0.72) 52.19%, #F2F0FF 67.81%);
  }
}

.hero-swiper {
  width: 100%;
  height: 400px;

  @include for-mobile {
    height: 543px;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-graphene;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;


    &:not(.swiper-button-disabled):hover {
      background: $color-smoke;
      cursor: pointer;
    }

    &.swiper-button-disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;

      &:hover {
        background: transparent;
      }
    }

    svg {
      width: 16px;
      height: 32px;
    }

    @include for-mobile {
      display: none;
    }
  }

  :deep(.swiper-button-prev) {
    left: 44px;
  }

  :deep(.swiper-button-next) {
    right: 44px;
  }

  :deep(.swiper-pagination) {
    left: 50%;
    transform: translateX(-50%);
    max-width: 1080px;
    width: 100%;
    bottom: 60px;
    display: flex;
    justify-content: flex-start;
    padding-left: 0;

    @include for-mobile {
      bottom: 16px;
      justify-content: center;
      padding-left: 0;
    }
  }

  :deep(.swiper-pagination-bullet) {
    width: 6px;
    height: 6px;
    background: $color-gray;
    opacity: 0.4;
    transition: all 0.3s ease;
  }

  :deep(.swiper-pagination-bullet-active) {
    width: 8px;
    height: 8px;
    background: $color-coal;
    opacity: 1;
    border-radius: 4px;
  }
}

.slide-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @include for-mobile {
    align-items: flex-start;
  }
}

.content-wrapper {
  max-width: 1160px;
  display: flex;
  align-items: center;

  @include for-mobile {
    height: 100%;
    flex-direction: column-reverse;
    justify-content: start;
  }
}

.text-content {
  flex: 1;
  max-width: 520px;

  @include for-mobile {
    flex: 0 1 auto;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 16px 24px 16px;
  }
}

.slide-subtitle {
  font-size: $text-sm;
  font-weight: $fw-bold;
  text-transform: uppercase;
  color: $color-gray;

  @include for-mobile {
    font-size: $text-xs;
    font-weight: $fw-bold;

  }
}

.slide-title {
  height: 48px;
  display: flex;
  align-items: center;
  font-size: $text-2xl;
  font-weight: $fw-bold;
  color: $color-coal;

  @include for-mobile {
    height: 34px;
    font-size: $text-xl;
  }
}

.slide-description {
  font-size: $text-base;
  color: $color-graphene;
  padding-block: 16px;
  line-height: 1.5;

  @include for-mobile {}
}

.image-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 560px;

  @include for-mobile {
    height: 295px;
    align-items: flex-start;
  }

  figure {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    object-fit: contain;

    @include for-mobile {
      width: 343px;
      padding: 16px;
    }
  }
}
</style>