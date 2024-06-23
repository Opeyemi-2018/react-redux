import  { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
    let {amount} = useSelector((store) => store.cart)
  return (
    <div className="flex items-center justify-between p-4 bg-blue-600">
        <h3 className="text-white text-3xl">Redux Toolkit</h3>
        <div className="relative">
            <FaShoppingCart className="text-white text-4xl" />
            <div className="bg-blue-500 absolute left-6 bottom-4 rounded-full ">
                <p className="p-1 text-white">{amount}</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
