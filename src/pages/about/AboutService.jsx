import React from "react";

const AboutService = () => {
  return (
    <div className="py-10 grid grid-cols-1 gap-5 lg:gap-0 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex bg-primary py-10 px-4 rounded lg:rounded-none items-center gap-4">
        <i className="fa-solid fa-shop text-4xl text-white"></i>
        <div>
          <h5 className="text-lg text-white">FREE SHIPPING</h5>
          <p className="text-sm text-white">When ordering over $100</p>
        </div>
      </div>
      <div className="flex bg-primary py-10 px-4 rounded lg:rounded-none items-center gap-4">
        <i className="fa-solid fa-rotate-left text-4xl text-white"></i>
        <div>
          <h5 className="text-lg text-white">FREE RETURN</h5>
          <p className="text-sm text-white">Get Return within 30 days</p>
        </div>
      </div>
      <div className="flex bg-primary py-10 px-4 rounded lg:rounded-none items-center gap-4">
        <i className="fa-solid fa-lock text-4xl text-white"></i>
        <div>
          <h5 className="text-lg text-white">SECURE PAYMENT</h5>
          <p className="text-sm text-white">100% Secure Online Payment</p>
        </div>
      </div>
      <div className="flex bg-primary py-10 px-4 rounded lg:rounded-none items-center gap-4">
        <i className="fa-solid fa-trophy text-4xl text-white"></i>
        <div>
          <h5 className="text-lg text-white">BEST QUALITY</h5>
          <p className="text-sm text-white">Original Product Guarenteed</p>
        </div>
      </div>
    </div>
  );
};

export default AboutService;
