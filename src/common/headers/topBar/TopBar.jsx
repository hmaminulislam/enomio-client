import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const TopBar = () => {
    const {user, logOut} = useContext(AuthContext)
    //logOut Hanle
  const logOutHandle = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
    return (
      <>
        <div className="py-3 bg-primary hidden md:block">
          <div className="flex justify-between items-center px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
            <div>
              <h4 className="text-xs text-white">
                Welcome to Enomio store message or remove it!
              </h4>
            </div>
            <div className="flex">
              <div className="flex items-center mr-8">
                <i className="fa-solid text-white fa-location-dot mr-1"></i>
                <Link to="/contact" className="text-xs text-white">
                  Contact
                </Link>
              </div>
              <div className="flex items-center mr-8">
                <i className="fa-solid text-white fa-circle-info mr-1"></i>
                <h4 className="text-xs text-white">Need help</h4>
              </div>
              <div className="my-account">
                <i className="fa-solid text-white fa-user user-icon"></i>
                <div className="my-account-sub">
                  {user ? (
                    <>
                      <Link to="/">
                        <h4 className="text-xs text-white">My Account</h4>
                      </Link>
                      <Link to="/">
                        <h4 className="text-xs text-white">Orders</h4>
                      </Link>
                      <Link to="/cart">
                        <h4 className="text-xs text-white">Cart</h4>
                      </Link>
                      <Link to="/wishlist">
                        <h4 className="text-xs text-white">Wishlist</h4>
                      </Link>
                      <button
                        onClick={logOutHandle}
                        className="btn btn-sm text-xs bg-red-500 block mt-4"
                      >
                        Log out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <h4 className="text-xs text-white">Login</h4>
                      </Link>
                      <Link to="/register">
                        <h4 className="text-xs text-white">Register</h4>
                      </Link>
                      <Link to="/cart">
                        <h4 className="text-xs text-white">Cart</h4>
                      </Link>
                      <Link to="/wishlist">
                        <h4 className="text-xs text-white">Wishlist</h4>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
};

export default TopBar;