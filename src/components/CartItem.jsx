import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import {removeItem, increase, decrease} from '../features/Carts/CartSlice'
import { useDispatch,  } from "react-redux";


const CartItem = ({id, name, price, amount}) => {
 let dispatch = useDispatch()
  return (
    <article className="flex items-center justify-between py-1">
      <div>
        <h4 className="font-bold">{name}</h4>
        <h4 className="">${price}</h4>
        <button onClick={()=> dispatch(removeItem(id))} className="font-semibold text-gray-600">remove</button>
         {/*onClick Event: When the "remove" button is clicked, the dispatch(removeItem(id)) function is called.
        removeItem(id) Action: This action creator is imported from the CartSlice. When dispatched, it triggers the removeItem reducer in the Redux store.
        dispatch Function: The dispatch function is obtained using the useDispatch hook, which allows dispatching actions to the Redux store.
        */}
      </div>
      <div className="flex items-center flex-col"> 
        <button onClick={()=> { dispatch(increase({id}))}}> <FaChevronUp /></button>
        {/* onClick Event: When the "increase" button (with an up chevron icon) is clicked, the dispatch(increase({id})) function is called.
        increase({id}) Action: This action creator is imported from the CartSlice. When dispatched, it triggers the increase reducer in the Redux store.
        dispatch Function: The dispatch function is obtained using the useDispatch hook. The increase action is dispatched with the id of the item as the payload.*/}
        <p className="text-1xl">{amount}</p>
        <button onClick={()=> {
          if (amount === 1 ) {
            dispatch(removeItem(id))
            return
          }dispatch(decrease({id}))}}> <FaChevronDown /></button>
          {/*onClick Event: When the "decrease" button (with a down chevron icon) is clicked, the code inside the arrow function is executed.
          Condition Check: The function first checks if the amount is equal to 1.
          If True: If the amount is 1, it dispatches the removeItem(id) action to remove the item from the cart. The function then returns immediately, preventing any further execution.
          If False: If the amount is greater than 1, it dispatches the decrease({id}) action.
          decrease({id}) Action: This action creator is imported from the CartSlice. When dispatched, it triggers the decrease reducer in the Redux store, which decreases the quantity of the item by 1. */}
      </div>
    </article>
  )
}

export default CartItem