import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = ({mobileMenu, setMobileMenu}) => {
    const { user, logOut } = useContext(AuthContext);
    //logOut Hanle
    const logOutHandle = () => {
      logOut()
        .then((result) => {})
        .catch((error) => console.log(error));
    };
    return (
      <>
        <div className="px-5 md:px-10 lg:px-14 hidden md:block mt-5">
          <div className="pt-5 flex justify-between">
            <div>
              <ul className="flex">
                <NavLink to="/">
                  <li className="menu-link hover:text-primary mr-7">Home</li>
                </NavLink>
                <NavLink to="/categories">
                  <li className="menu-link hover:text-primary mr-7">Categories</li>
                </NavLink>
                <NavLink to="/shop">
                  <li className="menu-link hover:text-primary mr-7">Shop</li>
                </NavLink>
                <NavLink to="/blog">
                  <li className="menu-link hover:text-primary mr-7">Blog</li>
                </NavLink>
                <NavLink to="/about">
                  <li className="menu-link hover:text-primary mr-7">About</li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="menu-link hover:text-primary mr-7">Contact</li>
                </NavLink>
              </ul>
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-tag text-xl mr-2 text-gray-600"></i>
              <h4 className="font-semibold">Special Offers</h4>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`absolute z-[999] top-0 ${
            mobileMenu
              ? "left-0 ease-in duration-500"
              : "left-[-400px] ease-out duration-500"
          }`}
        >
          <div className="relative mobile-menu">
            <NavLink to="/">
              <h3 className="text-2xl font-semibold text-primary ml-3 mt-5">
                Enomio
              </h3>
            </NavLink>
            <div className="text-base-content">
              <ul className="p-4">
                <NavLink to="/">
                  <li className="mb-3 text-white">Home</li>
                </NavLink>
                <NavLink to="/categories">
                  <li className="mb-3 text-white">Categories</li>
                </NavLink>
                <NavLink to="/shop">
                  <li className="mb-3 text-white">Shop</li>
                </NavLink>
                <NavLink to="/blog">
                  <li className="mb-3 text-white">Blog</li>
                </NavLink>
                <NavLink to="/about">
                  <li className="mb-3 text-white">About</li>
                </NavLink>
                <NavLink to="/contact">
                  <li className="mb-3 text-white">Contact</li>
                </NavLink>
              </ul>
              {user && (
                <div className="absolute bottom-5">
                  <button
                    onClick={logOutHandle}
                    className="bg-red-500 py-1 px-3 ml-3 rounded-sm text-white text-xs"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
            <i
              onClick={() => setMobileMenu(false)}
              className="fa-solid fa-xmark text-3xl cursor-pointer hover:text-gray-400 absolute top-[10px] right-[10px]"
            ></i>
          </div>
        </div>
      </>
    );
};

export default Navbar;