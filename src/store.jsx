import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit for creating the store
import cartReducer from './features/Carts/CartSlice'; // Importing the cart slice reducer
import modalReducer from './features/modal/ModalSlice'
import counterReducer from './features/counter/CounterSlice'

// Configuring the Redux store with cart slice reducer
export let store = configureStore({
    reducer: {
        cart: cartReducer, // Adding the cart slice reducer to the store
        modal: modalReducer,
        counter: counterReducer,
    },
});
//Store Configuration:

//The store is configured using configureStore from Redux Toolkit.
//The reducer object defines the structure of the state. Here, it has a single property cart which is managed by cartReducer.
//This setup makes the cart state accessible throughout the application via the Redux store.
//Usage:

//The store is exported and typically provided to the React application using the Provider component from react-redux, making the Redux state available to all components.
//Components can then interact with the store using hooks like useSelector to access state and useDispatch to dispatch actions.
//This configuration is a crucial part of the Redux setup, enabling state management and making the application's state predictable and easier to debug and maintain.







