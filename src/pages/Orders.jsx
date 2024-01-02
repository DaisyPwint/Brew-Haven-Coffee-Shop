import { useSelector } from "react-redux"

const Orders = () => {

  const {orders} = useSelector(state => state.order);

  return (
    <section className="text-sm md:text-base">
      <h1 className="text-2xl">
        {orders.length > 0 ? 'Your Orders' : 'Please Make An Order'}
      </h1>
      <hr className="my-8" />
      {
        orders.length > 0 ? (
          <>
            <p>Total Orders : {orders.length}</p>
            <table className="min-w-full lg:w-96 border-collapse border-spacing-2 text-left pl-1">
              <tr className="border-b border-primary-100">
                {
                  ['Name','Address','Products','Cost','Date'].map((item,index) => <th key={index} className="pt-10 pb-5 pr-3 md:pr-10 lg:pr-16">{item}</th>)
                }
              </tr>   
              {
                orders.map((order,index) => (
                  <tr key={index} className="hover:bg-slate-200 py-3 odd:bg-gray-100">
                    <td className="py-2">
                      <p>{order.name}</p>
                    </td>
                    <td>
                      <p>{order.address}</p>
                    </td>
                    <td>
                      <p>{order.totalItem}</p>
                    </td>
                    <td>
                      <p>{order.orderTotal}</p>
                    </td>
                    <td>
                      <p>{order.date}</p>
                    </td>
                  </tr>
                ))
              }
            </table>
          </>
        ) : null
      }
    </section>
  )
}

export default Orders