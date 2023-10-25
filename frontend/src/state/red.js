import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
  products: [], // <-- New state for products
  loadingProducts: false, // <-- New state to check if products are being loaded
  error: null, // <-- New state for any errors during fetch
  selectedProduct: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      // Check if the product is already in the cart
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload.item._id
      );

      if (existingProduct) {
        // Increase the count of the existing product by 1
        existingProduct.count += 1;
      } else {
        // Add the new product with a count property
        state.cart = [...state.cart, { ...action.payload.item, count: 1 }];
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },

    increaseCount: (state, action) => {
      const product = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (product) product.count += 1;
    },

    decreaseCount: (state, action) => {
      const product = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (product && product.count > 1) product.count -= 1;
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
  selectProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
