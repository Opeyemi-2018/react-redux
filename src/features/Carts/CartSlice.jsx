import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice from Redux Toolkit
import cartItems from "../../components/CartItems"; // Importing initial cart items

// Defining the initial state for the cart slice
let initialState = {
    cartItems: cartItems, // Initial cart items
    total: 0, // Initial total price
    amount: 0, // Initial total amount of items
    isLoading: true, // Initial loading state
};

// Creating the cart slice
let cartSlice = createSlice({
    name: 'cart', // Name of the slice
    initialState, // Initial state
    reducers: {
        clearCart: (state) => { // Reducer to clear the cart
            state.cartItems = []; // Empty the cart items array
        },
        removeItem: (state, action) => { // Reducer to remove an item from the cart
            let itemId = action.payload; // Get item ID from action payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId); // Filter out the item with the given ID
        },
        //Functionality: This reducer takes an itemId from the action payload and removes the item with that ID from the cartItems array.
        //Usage: Used when a user wants to remove a specific item from their cart.

        increase: (state, { payload }) => { // Reducer to increase the quantity of an item
            let cartItem = state.cartItems.find((item) => item.id === payload.id); // Find the item with the given ID
            cartItem.amount = cartItem.amount + 1; // Increase the amount by 1
        },
        //Functionality: This reducer finds the item in the cartItems array with the ID specified in the action payload and increments its amount by 1.
        //Usage: Used when a user wants to increase the quantity of an item in their cart.

        decrease: (state, { payload }) => { // Reducer to decrease the quantity of an item
            let cartItem = state.cartItems.find((item) => item.id === payload.id); // Find the item with the given ID
            cartItem.amount = cartItem.amount - 1; // Decrease the amount by 1
        },
        //Functionality: This reducer finds the item in the cartItems array with the ID specified in the action payload and decrements its amount by 1.
        //Usage: Used when a user wants to decrease the quantity of an item in their cart. If the quantity reaches 0, the item might be removed from the cart in the UI logic.
        
        calculateTotals: (state) => { // Reducer to calculate total price and amount
            let amount = 0; // Initialize amount
            let total = 0; // Initialize total price
            state.cartItems.forEach((item) => { // Iterate over cart items
                amount += item.amount; // Sum up the total amount
                total += item.amount * item.price; // Calculate total price
            });
            state.amount = amount; // Update total amount in state
            state.total = total; // Update total price in state
        }
    }
});

// Exporting actions and reducer
export let { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer; // Default export of the cart slice reducer
