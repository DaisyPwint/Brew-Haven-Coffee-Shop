import { useSelector } from "react-redux"
import BillInfo from "../components/BillInfo";
import { Link } from "react-router-dom";
import { useState } from "react";
import Confirm from "../components/Confirm";

const Checkout = () => {
  const {items,totalPrice} = useSelector(state => state.cart);
  const {isConfirm,setIsConfirm} = useState(false);

  return (
    <section>
      <h1 className="text-2xl">
        {items.length > 0 ? 'Place Your Order' : 'Your cart is empty'}
      </h1>
      <hr className="my-8" />
      <div className="mt-3 flex flex-col md:flex-row gap-20 items-center justify-center">
        {
          items.length > 0 ? (
            <>
              <div className="w-1/2">
                <h1 className="text-gray-900">Shipping Information</h1>
                <div className="mt-10 grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="first-name">
                      First Name
                    </label>
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full mt-2 rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-inset sm:text-sm"/>
                  </div>
                  <div>
                    <label htmlFor="address">
                      Address
                    </label>
                    <input id="address"
                    name="address"
                    type="text"
                    autoComplete="address" className="block w-full mt-2 rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 700 focus:outline-none focus:ring-2 focus:ring-primary-200 focus:ring-inset sm:text-sm"/>
                  </div>
                  <button className="w-full bg-primary-200 text-white px-4 py-2 mt-4 rounded-md hover:bg-primary-dark" onClick={() => setIsConfirm(true)}>
                  Confirm Order
                  </button>
                  {
                    isConfirm && <Confirm/>
                  }
                </div>
              </div>
              <div className="w-1/2"><BillInfo totalPrice={totalPrice}/></div>
            </>
          ) : <Link to="/menu" className="text-slate-600 mt-10">Your cart is empty! Why not continue shopping and explore our delightful coffee and treats? ☕🍰</Link>
        }
      </div>
    </section>
  )
}

export default Checkout