import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

type Item = {
  id: number;
  quantity: number;
  price: string;
};

type CartState = {
  items: Array<Item>;
  totalPrice: number;
  totalQuantity: number;
};

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<{id: number; price: string}>) {
      const {id, price} = action.payload;
      const item = state.items.find(i => i.id === id);
      const priceValue = parseFloat(price.slice(1));

      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += priceValue;
      } else {
        state.items.push({id, quantity: 1, price});
        state.totalQuantity += 1;
        state.totalPrice += priceValue;
      }
    },

    removeItem(state, action: PayloadAction<{id: number; price: string}>) {
      const {id, price} = action.payload;
      const item = state.items.find(i => i.id === id);
      const priceValue = parseFloat(price.slice(1));

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= priceValue;
        } else {
          state.items = state.items.filter(i => i.id !== id);
          state.totalQuantity -= 1;
          state.totalPrice -= priceValue;
        }
      }
    },

    removeFullItem(state, action: PayloadAction<{id: number; price: string}>) {
      const {id, price} = action.payload;
      const item = state.items.find(i => i.id === id);
      const priceValue = parseFloat(price.slice(1));

      if (item) {
        state.items = state.items.filter(i => i.id !== id);
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.quantity * priceValue;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {addItem, removeItem, clearCart, removeFullItem} =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectItemById = (id: number) => (state: RootState) => {
  return selectCartItems(state).find(item => item.id === id);
};

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;

export const selectTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;

export default cartSlice.reducer;
