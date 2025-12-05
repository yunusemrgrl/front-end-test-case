import { reactive, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';

/**
 * @param {Object} initialData
 * @param {Object} validationRules
 * @param {Function} onUpdate
 * @returns {Object}
 */
export const useFormValidation = (initialData, validationRules, onUpdate) => {
  const formData = reactive({ ...initialData });

  const rules = computed(() => ({
    formData: validationRules
  }));

  const v$ = useVuelidate(rules, { formData });

  const isValid = computed(() => !v$.value.$invalid);

  const updateForm = () => {
    if (onUpdate) {
      onUpdate({ ...formData, isValid: isValid.value });
    }
  };

  const resetForm = () => {
    Object.keys(initialData).forEach(key => {
      formData[key] = initialData[key];
    });
    v$.value.$reset();
    updateForm();
  };

  const touchField = (fieldName) => {
    if (v$.value.formData[fieldName]) {
      v$.value.formData[fieldName].$touch();
    }
  };

  const getFieldError = (fieldName, errorMessage) => {
    return v$.value.formData[fieldName]?.$error ? errorMessage : '';
  };

  const hasFieldError = (fieldName) => {
    return v$.value.formData[fieldName]?.$error || false;
  };

  return {
    formData,
    v$,
    isValid,
    updateForm,
    resetForm,
    touchField,
    getFieldError,
    hasFieldError
  };
};

