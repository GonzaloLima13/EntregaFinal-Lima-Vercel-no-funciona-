import {BsCart2} from 'react-icons/bs'
import { useCartContext } from '../../state/Cart.context'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
  const {getTotalItems} = useCartContext()
  const navigate = useNavigate()
  return (
    <button className='relative inline-flex items-center m-4' onClick={ () => navigate('/cart')}>
        <BsCart2 className='text-3xl text-white'/> 
        <span className="absolute inline-flex items-center justify-center w-[1.115rem] h-[1.115rem] text-[0.65rem] font-bold text-white bg-red-500 border-2 border-white rounded-full -bottom-2 -right-4 dark:border-gray-900">{getTotalItems}</span>      
    </button>
  )
}

export default CartWidget

