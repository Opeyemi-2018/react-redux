import React, { useEffect } from 'react'; // Importing React and useEffect hook
import { useDispatch, useSelector } from 'react-redux'; // Importing Redux hooks
import { calculateTotals } from './features/Carts/CartSlice'; // Importing calculateTotals action from cart slice
import Navbar from './components/Navbar'; // Importing Navbar component
import CartContainer from './components/CartContainer'; // Importing CartContainer component
import Modal from './components/Modal'; // Importing Modal component
import Counter from './components/Counter';

// Main App component
function App() {
  let { cartItems } = useSelector((store) => store.cart); // Getting cart items from the Redux store
  let {isOpen} = useSelector((store) => store.modal) //It extracts the isOpen property from the modal slice.
  let dispatch = useDispatch(); // Getting dispatch function to dispatch actions

  useEffect(() => { // useEffect to dispatch calculateTotals whenever cartItems change
    dispatch(calculateTotals()); // Dispatching calculateTotals action to update totals
  }, [cartItems]); // Dependency array with cartItems

  return (
    <div className='bg-green-100 px-4 h-screen'> 
      <div className='max-w-[700px] mx-auto'> 
        <div className='hidden'>
          {isOpen && <Modal /> }
          <Navbar /> 
          <CartContainer /> 
        </div>
        <Counter/>
      </div>
    </div>
  );
}

export default App; // Exporting App component
