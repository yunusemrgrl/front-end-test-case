import { ref, computed } from 'vue';
import { addCart, updateCart } from '@/services/api';
import { CART_ERROR_MESSAGES, CART_CONFIG } from '@/constants/cart';

const cartItems = ref([]);
const currentCartId = ref(null);
const isLoading = ref(false);
const error = ref(null);

export const useCart = () => {
  const addToCart = async (product) => {
    isLoading.value = true;
    error.value = null;

    try {
      const existingItem = cartItems.value.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cartItems.value.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.thumbnail || product.image
        });
      }

      const productsForApi = cartItems.value.map(item => ({
        id: item.id,
        quantity: item.quantity
      }));

      if (currentCartId.value) {
        try {
          const response = await updateCart(currentCartId.value, productsForApi, true);
          syncCartFromApi(response);
        } catch (apiError) {
          currentCartId.value = null;
          const newResponse = await addCart(CART_CONFIG.DEFAULT_USER_ID, productsForApi);
          currentCartId.value = newResponse.id;
          syncCartFromApi(newResponse);
        }
      } else {
        const response = await addCart(CART_CONFIG.DEFAULT_USER_ID, productsForApi);
        currentCartId.value = response.id;
        syncCartFromApi(response);
      }
    } catch (err) {
      error.value = err.message || CART_ERROR_MESSAGES.ADD_TO_CART;
    } finally {
      isLoading.value = false;
    }
  };

  const removeFromCart = async (productId) => {
    isLoading.value = true;
    error.value = null;

    try {
      const index = cartItems.value.findIndex(item => item.id === productId);
      if (index !== -1) {
        cartItems.value.splice(index, 1);
      }

      if (cartItems.value.length === 0) {
        currentCartId.value = null;
        return;
      }

      const productsForApi = cartItems.value.map(item => ({
        id: item.id,
        quantity: item.quantity
      }));

      if (currentCartId.value) {
        try {
          const response = await updateCart(currentCartId.value, productsForApi, false);
          syncCartFromApi(response);
        } catch (apiError) {
          currentCartId.value = null;
          const newResponse = await addCart(CART_CONFIG.DEFAULT_USER_ID, productsForApi);
          currentCartId.value = newResponse.id;
          syncCartFromApi(newResponse);
        }
      }
    } catch (err) {
      error.value = err.message || CART_ERROR_MESSAGES.REMOVE_FROM_CART;
    } finally {
      isLoading.value = false;
    }
  };

  const updateQuantity = async ({ id, quantity }) => {
    isLoading.value = true;
    error.value = null;

    try {
      if (quantity <= 0) {
        await removeFromCart(id);
        return;
      }

      const item = cartItems.value.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }

      const productsForApi = cartItems.value.map(item => ({
        id: item.id,
        quantity: item.quantity
      }));

      if (currentCartId.value) {
        try {
          const response = await updateCart(currentCartId.value, productsForApi, false);
          syncCartFromApi(response);
        } catch (apiError) {
          currentCartId.value = null;
          const newResponse = await addCart(CART_CONFIG.DEFAULT_USER_ID, productsForApi);
          currentCartId.value = newResponse.id;
          syncCartFromApi(newResponse);
        }
      }
    } catch (err) {
      error.value = err.message || CART_ERROR_MESSAGES.UPDATE_QUANTITY;
    } finally {
      isLoading.value = false;
    }
  };

  const syncCartFromApi = (apiResponse) => {
    if (!apiResponse || !apiResponse.products) return;

    cartItems.value = apiResponse.products.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
      image: item.thumbnail
    }));
  };

  const clearCart = () => {
    cartItems.value = [];
    currentCartId.value = null;
    error.value = null;
  };

  const isInCart = (productId) => {
    return cartItems.value.some(item => item.id === productId);
  };

  const getItemQuantity = (productId) => {
    const item = cartItems.value.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const cartItemsCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
  });

  const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  });

  const total = computed(() => {
    return subtotal.value + CART_CONFIG.SHIPPING_COST;
  });

  return {
    cartItems,
    isLoading,
    error,
    currentCartId,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity,
    cartItemsCount,
    subtotal,
    total,
  };
};

