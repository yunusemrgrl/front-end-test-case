const API_BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (limit = 30, skip = 0) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/products`, {
      params: { limit, skip }
    });
    return response;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/products/${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/products/search`, {
      params: { q: query }
    });
    return response;
  } catch (error) {
    console.error('Error searching products:', error);
    throw error;
  }
};

