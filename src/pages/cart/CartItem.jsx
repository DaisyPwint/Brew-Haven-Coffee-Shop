import { TrashIcon } from '@heroicons/react/24/outline';
import { increase,decrease, removeFromCart } from '../../app/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  return (
    <div
    className="flex sm:flex-row flex-col p-3 my-2 border rounded-md shadow-md gap-5 md:gap-10"
    >
    <img
    src={item.image}
    alt={item.name}
    className="w-24 h-24 object-cover rounded-lg"
    />
    <div className="flex items-center space-x-6">        
        <div className="flex flex-col">
            <h1 className="text-xl capitalize">{item.name}</h1>
            {item.options &&
                item.options.map((option,index) => (
                <span key={index} className="text-gray-600">
                    {option.value} 
                </span>
                ))}
        </div>
    </div>
    <div className="flex flex-1 items-center sm:justify-end space-x-4 mb-2 sm:mb-0">
        <h1 className="font-xl">
        ${item.price}
        </h1>
        <div className="flex space-x-2">
        <button className="ms-2 px-3 bg-primary-200 text-white rounded-md" onClick={() => dispatch(decrease(item))}>-</button>
        <h1 className="font-xl">
            {item.amount}
        </h1>
        <button className="ms-2 px-3 bg-primary-200 text-white rounded-md" onClick={() => dispatch(increase(item))}>+</button>
        </div>
        <button className="ms-2 py-[3px] px-3 bg-red-600 text-white rounded-md" onClick={() => dispatch(removeFromCart(item))}>
        <TrashIcon className="h-5 w-5" />
        </button>
    </div>
    </div>
  )
}

export default CartItem