import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../features/counter/CounterSlice"

const Counter = () => {
    let dispatch = useDispatch()
    let count = useSelector((state) => state.counter.count);

  return (
    <div className='text-2xl flex gap-10 justify-center h-screen items-center'>
        <button onClick={()=> dispatch(decrement())} className='bg-red-700 py-1 px-2 rounded-md text-white'>decrease</button>
        <p className='text-3xl'>{count}</p>
        <button onClick={()=> dispatch(increment())} className='bg-blue-700 py-1 px-2 rounded-md text-white'>increase</button>
    </div>
  )
}

export default Counter