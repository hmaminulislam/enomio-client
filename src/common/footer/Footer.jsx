import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="bg-zinc-800 pt-20 pb-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-10 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-14">
          <div className="">
            <h2 className="text-3xl font-semibold text-primary">Enomio</h2>
            <p className="text-xs text-gray-400 mt-4">
              Fringilla urna porttitor rhoncus dolor purus luctus venenatis
              lectus magna fringilla diam maecenas ultricies mi eget mauris.
            </p>
            <p className="text-xs text-gray-400 mt-2">contact@example.com</p>
            <p className="text-xs text-gray-400 mt-2">+880140000000</p>
          </div>
          <div>
            <h3 className="text-white text-sm sm:text-base mb-3">My Account</h3>
            <Link to="/login">
              <li className="list-none text-xs text-gray-400 mb-3">Sign In</li>
            </Link>
            <Link to="/cart">
              <li className="list-none text-xs text-gray-400 mb-3">
                View Cart
              </li>
            </Link>
            <Link to="wishlist">
              <li className="list-none text-xs text-gray-400 mb-3">
                My Wishlist
              </li>
            </Link>
            <li className="list-none text-xs text-gray-400 mb-3">My Order</li>
            <li className="list-none text-xs text-gray-400 mb-3">Help</li>
          </div>
          <div>
            <h3 className="text-white text-sm sm:text-base mb-3">
              Customer Service
            </h3>
            <li className="list-none text-xs text-gray-400 mb-3">
              Payment Methods
            </li>
            <li className="list-none text-xs text-gray-400 mb-3">
              Money-back Guarantee!
            </li>
            <li className="list-none text-xs text-gray-400 mb-3">Returns</li>
            <li className="list-none text-xs text-gray-400 mb-3">Shipping</li>
            <li className="list-none text-xs text-gray-400 mb-3">
              Terms and Conditions
            </li>
          </div>
          <div>
            <h3 className="text-white text-sm sm:text-base mb-3">About Us</h3>
            <li className="list-none text-xs text-gray-400 mb-3">
              Order History
            </li>
            <li className="list-none text-xs text-gray-400 mb-3">Returns</li>
            <li className="list-none text-xs text-gray-400 mb-3">
              Custom Service
            </li>
            <li className="list-none text-xs text-gray-400 mb-3">
              Terms & Condition
            </li>
            <Link to="/contact">
              <li className="list-none text-xs text-gray-400 mb-3">Contact</li>
            </Link>
          </div>
        </div>
        <hr className="mt-10" />
        <p className="text-gray-400 text-sm text-center mt-5">
          Enomio © 2023. All Rights Reserved
        </p>
      </div>
    );
};

export default Footer;