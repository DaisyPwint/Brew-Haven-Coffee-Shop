import PropTypes from 'prop-types';

const BillInfo = ({ totalPrice }) => {
  const orderTotal = totalPrice + 5.00;
  
  return (
    <>
      <div className="mx-auto bg-primary-100 text-white rounded-md p-4">
        <table className="min-w-full border-collapse">
          <tbody>
            <tr>
              <td className="py-3 px-2" colSpan="3">
                Subtotal
              </td>
              <td className="py-3 px-2 font-bold">$ {totalPrice.toFixed(2)}</td>
            </tr>
            <tr className="border-b border-white">
              <td className="py-3 px-2" colSpan="3">
                Shipping
              </td>
              <td className="py-3 px-2 font-bold">$ 5.00</td>
            </tr>
            <tr>
              <td className="pt-5 px-2" colSpan="3">
                Order Total
              </td>
              <td className="pt-5 px-2 font-bold">$ {orderTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>     
    </>
  );
};

BillInfo.propTypes = {
  totalPrice: PropTypes.any,
};

export default BillInfo;
