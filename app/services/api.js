const API_BASE_URL = 'https://dummyjson.com';

export const fetchProducts = async (limit = 30, skip = 0) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/products`, {
      params: { limit, skip }
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/products/${id}`);
    return response;
  } catch (error) {
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
    throw error;
  }
};

export const fetchCarts = async () => {
  try {
    const response = await $fetch(`${API_BASE_URL}/carts`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchCartById = async (id) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/carts/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addCart = async (userId, products) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/carts/add`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId,
        products
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateCart = async (cartId, products, merge = true) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/carts/${cartId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        merge,
        products
      })
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteCart = async (cartId) => {
  try {
    const response = await $fetch(`${API_BASE_URL}/carts/${cartId}`, {
      method: 'DELETE'
    });
    return response;
  } catch (error) {
    throw error;
  }
};
