<template>
  <section class="newsletter-signup">
    <div class="container">
      <div class="newsletter-signup__content">
        <div class="newsletter-signup__text">
          <h3 class="newsletter-signup__title">{{ title }}</h3>
          <p class="newsletter-signup__subtitle">{{ subtitle }}</p>
        </div>
        <form class="newsletter-signup__form" @submit.prevent="handleSubmit">
          <Input v-model="email" type="email" :placeholder="placeholder" :has-error="hasError" :is-disabled="isLoading"
            input-id="newsletter-email" aria-label="Email address for newsletter" class="newsletter-signup__input" />
          <Button variant="primary" type="submit" class="newsletter-signup__button">
            {{ buttonText }}
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { Button, Input } from '@/components/ui';
import { NEWSLETTER_TEXTS } from '@/constants/newsletter';

export default {
  name: 'NewsletterSignUp',
  components: {
    Button,
    Input,
  },
  props: {
    title: {
      type: String,
      default: NEWSLETTER_TEXTS.TITLE,
    },
    subtitle: {
      type: String,
      default: NEWSLETTER_TEXTS.SUBTITLE,
    },
    placeholder: {
      type: String,
      default: NEWSLETTER_TEXTS.PLACEHOLDER,
    },
    buttonText: {
      type: String,
      default: NEWSLETTER_TEXTS.BUTTON,
    },
    successMessage: {
      type: String,
      default: NEWSLETTER_TEXTS.SUCCESS,
    },
    errorMessage: {
      type: String,
      default: NEWSLETTER_TEXTS.ERROR,
    },
  },
  emits: ['subscribe', 'success', 'error'],
  setup(props, { emit }) {
    const email = ref('');
    const hasError = ref(false);
    const isLoading = ref(false);

    const isEmailValid = computed(() => {
      if (!email.value) return false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.value);
    });

    const handleSubmit = async () => {
      hasError.value = false;

      if (!isEmailValid.value) {
        hasError.value = true;
        emit('error', props.errorMessage);
        return;
      }

      isLoading.value = true;

      try {
        emit('subscribe', email.value);
        emit('success', props.successMessage);
        email.value = '';
      } catch (error) {
        hasError.value = true;
        emit('error', props.errorMessage);
      } finally {
        isLoading.value = false;
      }
    };

    return {
      email,
      hasError,
      isLoading,
      isEmailValid,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss" scoped>
.newsletter-signup {
  width: 100%;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-titan-white;

  @include for-mobile {}

  &__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    @include for-mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }

  &__text {
    flex-shrink: 0;
  }

  &__title {
    font-size: $text-xl;
    font-weight: $fw-bold;
    color: $color-coal;
    line-height: 32px;
    margin-bottom: 16px;

    @include for-mobile {
      font-size: $text-lg;
      line-height: 24px;
      margin-bottom: 8px;
    }
  }

  &__subtitle {
    font-size: $text-base;
    font-weight: $fw-regular;
    color: $color-gray;
    margin: 0;

    @include for-mobile {
      font-size: $text-sm;
      font-weight: $fw-regular;
      line-height: 16px;
    }
  }

  &__form {
    width: 100%;
    max-width: 560px;
    display: flex;
    gap: 16px;

    @include for-mobile {
      max-width: 100%;
    }
  }

  &__input {
    flex: 1;
  }

  &__button {
    height: 48px;
    font-size: $text-sm;
  }
}

.container {
  height: 100%;
  max-width: 1240px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-inline: 40px;
  box-sizing: border-box;

  @include for-mobile {
    padding-inline: 16px;
  }
}
</style>
