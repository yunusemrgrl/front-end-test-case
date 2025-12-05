import { ref } from 'vue';
import { fetchProducts, fetchProductById, searchProducts } from '@/services/api';
import { PRODUCT_ERROR_MESSAGES, PRODUCT_CONFIG } from '@/constants/products';

export const useProducts = (initialLimit = PRODUCT_CONFIG.DEFAULT_LIMIT) => {
  const products = ref([]);
  const isLoading = ref(true);
  const error = ref(null);
  const total = ref(0);

  const getProducts = async (limit = initialLimit, skip = 0) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetchProducts(limit, skip);
      products.value = response.products;
      total.value = response.total;
    } catch (err) {
      error.value = err.message || PRODUCT_ERROR_MESSAGES.FETCH_PRODUCTS;
      products.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  const getProductById = async (id) => {
    isLoading.value = true;
    error.value = null;

    try {
      const product = await fetchProductById(id);
      return product;
    } catch (err) {
      error.value = err.message || `${PRODUCT_ERROR_MESSAGES.FETCH_PRODUCT_BY_ID} ${id}`;
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  const searchProductsByQuery = async (query) => {
    if (!query || query.trim() === '') {
      await getProducts();
      return;
    }

    isLoading.value = true;
    error.value = null;

    try {
      const response = await searchProducts(query);
      products.value = response.products;
      total.value = response.total;
    } catch (err) {
      error.value = err.message || PRODUCT_ERROR_MESSAGES.SEARCH_PRODUCTS;
      products.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  return {
    products,
    isLoading,
    error,
    total,
    getProducts,
    getProductById,
    searchProductsByQuery,
  };
};

