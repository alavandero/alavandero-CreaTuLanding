import { createContext } from 'react';

// Create the cart context
export const cartContext = createContext({
  cart: [],
  getQuantity: () => 0,
  getTotal: () => 0,
  addToCart: () => {},
  clearCart: () => {}
});