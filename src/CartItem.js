import React from "react";
import "./CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };

  const subtractOne = () => {
    updateQty(id, qty - 1);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
              alt
            />
          </div>
          <div className="ml-4">
            <div className="text-sm leading-5 font-medium text-gray-900">
              {name}
            </div>
            <div className="text-sm leading-5 text-gray-700">${price}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">
        <div className="text-sm leading-5 text-gray-900">
          <button
            className={`bg-blue-500 ${
              qty >= 1 ? "hover:bg-blue-700" : "opacity-50 cursor-not-allowed"
            } text-white font-bold py-0 px-2 rounded-full`}
            onClick={subtractOne}
            disabled={qty < 1}
          >
            -
          </button>
          <span className="text-sm leading-5 font-medium text-gray-900 px-4">
            {qty}
          </span>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-2 rounded-full"
            onClick={addOne}
          >
            +
          </button>
        </div>
        <div className="text-sm leading-5 text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap">
        {qty > 0 ? (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            Active
          </span>
        ) : (
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
            Inactive
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-700">
        Totol: ${price * qty}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
}

export default CartItem;
