import { useDispatch } from "react-redux"
import { closeModal } from "../features/modal/ModalSlice"
import { clearCart } from "../features/Carts/CartSlice"

const Modal = () => {
  let dispatch = useDispatch()
  return (
    <aside className='absolute left-[50%] top-[50%] transform -translate-y-1/2
     -translate-x-1/2 bg-white rounded-md p-4'>
        <div className=''>
            <h4 className='py-3  text-center font-semibold'>remove all items from your shopping cart</h4>
            <div className='flex items-center gap-14 justify-center'>
                <button onClick={()=> {dispatch(clearCart());
                                       dispatch(closeModal())}
                } className='border border-blue-700 rounded-sm px-3 py-1'>confirm</button>
                <button onClick={()=> dispatch(closeModal())} className='border border-red-700 rounded-sm px-3 py-1'>cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal