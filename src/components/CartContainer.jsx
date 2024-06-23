import React from 'react'; // Importing React library
import { useDispatch, useSelector } from 'react-redux'; // Importing Redux hooks to interact with the store
// import { clearCart } from '../features/Carts/CartSlice'; // Importing clearCart action from cart slice
import CartItem from './CartItem'; // Importing CartItem component
import { openModal } from '../features/modal/ModalSlice';

// CartContainer component to display cart items
const CartContainer = () => {
  let dispatch = useDispatch(); // Getting dispatch function to dispatch actions
  //useDispatch: The dispatch function is obtained and assigned to the variable dispatch. This function will be used to send actions to the store.

  let { cartItems, total, amount } = useSelector((store) => store.cart); // Getting cart state from the Redux store
  // let {openModal} = useSelector((store) => store.modal)
  //useSelector: The useSelector hook is used to get the cartItems, total, and amount from the Redux store. This part of the state is managed by the cart slice.

  if (amount < 1) { // If there are no items in the cart
    return (
      <div className="mt-16 flex items-center justify-center flex-col"> 
        <h2 className="text-3xl font-bold">YOUR BAG</h2> 
        <h4 className="text-[18px] mt-4">is currently empty</h4> 
      </div>
    );
  }

  return (
    <section>
      <header className="flex justify-center"> 
        <h2 className="text-3xl font-bold text-gray-600">your bag</h2> 
      </header>
      <div>
        {cartItems.map((item) => ( // Mapping over cart items
          <CartItem key={item.id} {...item} /> // Rendering CartItem component for each item
        ))}
      </div>
      <footer className="pt-6"> 
        <hr /> 
        <div className="py-3">
          <h4 className="flex justify-between font-bold text-1xl"> 
            total <span>${total.toFixed(2)}</span> 
        </h4>
        </div>
        <div className="flex justify-center my-2">
          <button
            className="border border-red-800 py-2 px-2 font-semibold text-red-800 rounded-sm text-1xl" 
            onClick={() => dispatch(openModal())} // Dispatching clearCart action on click. clearCart: This action creator is used to create an action that, when dispatched, clears the cart.
            // The action is dispatched in the onClick handler of the "clear cart" button:,  
            // When the button is clicked, dispatch(clearCart()) is called.
            //This sends the clearCart action to the Redux store, triggering the clearCart reducer, which clears the cart items.
          > clear cart </button>
        </div>
      </footer>
    </section>
  );
}

export default CartContainer; // Exporting CartContainer component
