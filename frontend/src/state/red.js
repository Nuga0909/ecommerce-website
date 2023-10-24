import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: true,
  cart: [],
  items: [],
  products: [], // <-- New state for products
  loadingProducts: false, // <-- New state to check if products are being loaded
  error: null, // <-- New state for any errors during fetch
};

export const selectProduct = (product) => ({
  type: "SELECT_PRODUCT",
  payload: product,
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    startFetchingProducts: (state) => {
      state.loadingProducts = true;
      state.error = null;
    },
    productsFetched: (state, action) => {
      state.products = action.payload;
      state.loadingProducts = false;
    },
    productsFetchError: (state, action) => {
      state.loadingProducts = false;
      state.error = action.payload;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  startFetchingProducts,
  productsFetched,
  productsFetchError,
} = cartSlice.actions;

export default cartSlice.reducer;
