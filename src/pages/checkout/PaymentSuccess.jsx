import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const [order, setOrder] = useState();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transitionId = query.get("transitionId");
  console.log(transitionId);
  useEffect(() => {
    fetch(`https://enomio-server.vercel.app/orders/${transitionId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [transitionId]);
  console.log(order);
  return (
    <div className="md:min-h-screen h-96 flex justify-center items-center">
      <div className="text-center">
        <div className="w-12 h-12 flex justify-center items-center border-4 mx-auto border-sky-500 text-sky-500 rounded-full">
          <i className="fa-solid fa-check text-xl"></i>
        </div>
        <h2 className="text-2xl uppercase font-semibold mt-2">
          thank you for your purchase
        </h2>
        <p className="text-sm">
          Your Transition ID is:{" "}
          <span className="text-sky-600">{transitionId}</span>
        </p>
        <p className="my-2">
          We'll email you an order confirmation with details and tracking info
        </p>
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

export default PaymentSuccess;
