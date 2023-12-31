import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import BillInfo from '../../components/BillInfo'
import CartItem from './CartItem';

const Cart = () => {
  const navigate = useNavigate();   
  const {items,totalPrice} = useSelector((state) => state.cart);
  const {token} = useSelector((state) => state.auth);

  const handleCheckout = () => {
    if(token){
      navigate('/checkout');
    }else{
      navigate('/register');
    }
  }

  return (
    <section>
      <h1 className="text-2xl">
        {items.length > 0 ? 'Shopping Cart' : 'Your cart is empty'}
      </h1>
      <hr className='my-8'/>
      <div className="mt-3 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center"> 
      {items.length > 0 ? (
        <>
          <div className="flex-col lg:w-3/4">
          {
          items.map((item,index) =>  (
              <CartItem key={index} item={item} />
            ))
          }     
          </div>
          <div className="lg:w-2/5">
            <h1 className="mb-4">Cart Totals</h1>
            <BillInfo totalPrice={totalPrice} />
            <button className="w-full bg-primary-200 text-white px-4 py-2 mt-4 rounded-md hover:bg-primary-dark" onClick={handleCheckout}>
              {
                token === null ? 'Please Register' : 'Proceed to Checkout'
              }
            </button>
          </div>
        </>) 
        : <Link to="/menu" className="text-slate-600 mt-10">Your cart is empty! Why not continue shopping and explore our delightful coffee and treats? ☕🍰</Link>
      }
      </div>
    </section>
  );
};

export default Cart;
