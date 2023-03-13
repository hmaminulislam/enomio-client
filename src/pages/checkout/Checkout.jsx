import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import CheckoutCart from "./CheckoutCart";

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState();
  const total = useLocation();
  const [fristName, setFristName] = useState();
  const [lastName, setLastName] = useState();
  const [orderEmail, setOrderEmail] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [phone, setPhone] = useState();
  const [zip, setZip] = useState();
  const orderUserInfo = {
    fullName: fristName + ` ${lastName}`,
    orderEmail,
    city,
    state,
    phone,
    zip,
    price: totalPrice ? totalPrice : total.state,
  };
  const handleOrderBtn = (e) => {
    e.preventDefault();
    const url = `https://enomio-server.vercel.app/ssl-request`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data: orderUserInfo }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.paymentUrl);
      });
  };
  return (
    <div>
      <div className="px-5 md:px-10 lg:px-14 mb-20">
        <h4 className="text-center text-2xl font-semibold my-10">Checkout</h4>
        <form onSubmit={handleOrderBtn} className="lg:flex justify-between">
          <div className="lg:flex-auto lg:mr-5 mr-0">
            <>
              <div className="flex justify-center items-center border border-gray-200 mb-10">
                <div className="w-full px-10 mt-10 mb-10">
                  <div>
                    <div className="mb-4">
                      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6 mb-6">
                        <div>
                          <label htmlFor="fristName" className="text-gray-600">
                            Frist Name
                          </label>
                          <input
                            onChange={(e) => setFristName(e.target.value)}
                            type="text"
                            name="fristName"
                            placeholder="Frist Name"
                            className="input w-full text-sm outline-none border border-gray-300"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="text-gray-600">
                            Last Name
                          </label>
                          <input
                            onChange={(e) => setLastName(e.target.value)}
                            type="last Name"
                            name="lastName"
                            placeholder="Last Name"
                            className="input w-full text-sm outline-none border border-gray-300"
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="text-gray-600">
                          Email
                        </label>
                        <input
                          onChange={(e) => setOrderEmail(e.target.value)}
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="input w-full text-sm outline-none border border-gray-300"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                      <div className="">
                        <label htmlFor="city" className="text-gray-600">
                          City
                        </label>
                        <input
                          onChange={(e) => setCity(e.target.value)}
                          type="text"
                          name="city"
                          placeholder="City"
                          className="input w-full text-sm outline-none border border-gray-300"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="state" className="text-gray-600">
                          State
                        </label>
                        <input
                          onChange={(e) => setState(e.target.value)}
                          type="text"
                          name="state"
                          placeholder="State"
                          className="input w-full text-sm outline-none border border-gray-300"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
                      <div className="">
                        <label htmlFor="zip" className="text-gray-600">
                          Zip
                        </label>
                        <input
                          onChange={(e) => setZip(e.target.value)}
                          type="text"
                          name="zip"
                          placeholder="Zip"
                          className="input w-full text-sm outline-none border border-gray-300"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label htmlFor="phone" className="text-gray-600">
                          Phone
                        </label>
                        <input
                          onChange={(e) => setPhone(e.target.value)}
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          className="input w-full text-sm outline-none border border-gray-300"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
          <CheckoutCart
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            total={total}
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
