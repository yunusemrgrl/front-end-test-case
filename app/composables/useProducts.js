import { ref } from 'vue';
import { fetchProducts, fetchProductById, searchProducts } from '@/services/api';

export const useProducts = (initialLimit = 30) => {
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
      error.value = err.message || 'Failed to fetch products';
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
      error.value = err.message || `Failed to fetch product ${id}`;
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
      error.value = err.message || 'Failed to search products';
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

