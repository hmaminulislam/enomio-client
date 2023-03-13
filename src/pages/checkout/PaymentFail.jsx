import React from "react";
import { NavLink } from "react-router-dom";

const PaymentFail = () => {
  return (
    <div className="md:min-h-screen h-96 flex justify-center items-center">
      <div className="text-center">
        <div className="w-12 h-12 flex justify-center items-center border-4 mx-auto border-red-500 text-red-500 rounded-full">
          <i className="fa-solid fa-xmark text-xl"></i>
        </div>
        <h2 className="text-2xl uppercase font-semibold mt-2">Payment Faild</h2>
        <p className="my-2">Somthing went wrong!</p>
        <NavLink
          to="/shop"
          className="bg-sky-500 border inline-block py-2 px-4 text-white mt-2 hover:bg-white hover:text-sky-500 hover:border-sky-500"
        >
          Continue Shopping
        </NavLink>
      </div>
    </div>
  );
};

export default PaymentFail;
