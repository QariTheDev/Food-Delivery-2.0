import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            console.log("Item to add:", item);
            const existingItem = state.cartItems.find(cartItem => cartItem.name === item.name);

            if (!existingItem) {
                state.cartItems.push({
                    ...item, 
                    quantity: item.quantity || 1,
                    totalPrice: item.price * (item.quantity || 1)
                });
                state.totalQuantity += item.quantity || 1;
                state.totalAmount += item.price * (item.quantity || 1);
                console.log("New item added");
            } else {
                existingItem.quantity += item.quantity || 1;
                existingItem.totalPrice = existingItem.quantity * item.price;
                state.totalQuantity += item.quantity || 1;
                state.totalAmount += item.price * (item.quantity || 1);
                console.log("Item quantity increased");
            }

            console.log("Updated cart items:", state.cartItems);
        },
        removeFromCart: (state, action) => {
            const itemName = action.payload;
            const existingItem = state.cartItems.find(cartItem => cartItem.name === itemName);
            console.log(existingItem);

            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.cartItems = state.cartItems.filter(cartItem => cartItem.name !== itemName);
                    state.totalQuantity -= 1;
                    state.totalAmount -= existingItem.totalPrice;
                    console.log("Item removed from cart");
                } else {
                    existingItem.quantity -= 1;
                    existingItem.totalPrice = existingItem.quantity * existingItem.price;
                    state.totalQuantity -= 1;
                    state.totalAmount -= existingItem.price;
                    console.log("Item quantity decreased");
                }
            }
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
            console.log("Cart cleared");
        }
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;