import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Search = ({setMobileMenu}) => {
  const [open, setOpen] = useState(false)
    const [productCart, setProductCart] = useState(0);
    const {cart, setCart, user, logOut} = useContext(AuthContext)
    useEffect( () => {
        const cartDb = JSON.parse(localStorage.getItem('enomio-cart'))
        console.log();
        let count = cartDb?.length;
        setProductCart(count)
        setCart(false)
    }, [setCart, cart])

    //logOut Hanle
  const logOutHandle = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  const userIcon = useRef(null)
  useEffect(()=> {
    document.addEventListener('click', handleOustSide, true)
  }, [])

  const handleOustSide = (e) => {
    if(!userIcon.current.contains(e.target)) {
      setOpen(false)
    }
  }
    return (
      <div className="flex justify-between pt-5 px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto">
        <div className="md:hidden mr-5">
          <i
            onClick={() => setMobileMenu(true)}
            className="fa-solid fa-bars-staggered sm:text-3xl text-2xl cursor-pointer"
          ></i>
        </div>
        <div className="flex-1">
          <NavLink to="/" className="inline-block">
            <h3 className="text-2xl sm:text-4xl font-bold text-primary uppercase">
              Enomio
            </h3>
          </NavLink>
        </div>
        <div className="flex-1 hidden md:block">
          <div className="border-2 h-12 border-primary rounded-sm w-100 flex justify-between items-center">
            <input
              className="outline-none w-full h-full px-3 search"
              type="text"
              name=""
              placeholder="Search.."
            />
            <span className="bg-primary h-full w-16 flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass text-xl text-white"></i>
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-end md:ml-4 lg:ml-0">
          <div className="hidden md:block">
            <div className="flex items-center mr-8">
              <i className="fa-solid fa-phone text-3xl text-black mr-2"></i>
              <div>
                <h4 className="text-xs">Call now us</h4>
                <h3 className="font-semibold">01439493489</h3>
              </div>
            </div>
          </div>
          <Link to="/wishlist" className="sm:mr-8 mr-4">
            <i className="fa-regular text-black fa-heart sm:text-3xl text-2xl"></i>
          </Link>
          <Link to={"/cart"} className="relative mr-4 sm:mr-8 md:mr-0">
            <i className="fa-solid fa-bag-shopping text-black sm:text-3xl text-2xl"></i>
            <span className="bg-primary w-5 h-5 rounded-full flex justify-center items-center font-semibold absolute top-[-7px] right-[-7px] text-zinc-50 text-xs">
              {productCart ? productCart : "0"}
            </span>
          </Link>
          <div className="block md:hidden relative">
              <i ref={userIcon} onClick={() => setOpen(!open)} className="fa-regular cursor-pointer fa-user sm:text-3xl text-2xl user-icon-mb"></i>
              <div className={`my-account-sub-mb ${open ? 'block' : 'hidden'}`}>
                  {
                      user ? 
                  <>
                      <Link to="/"><h4 className='text-xs'>My Account</h4></Link>
                      <Link to="/"><h4 className='text-xs'>Orders</h4></Link>
                      <Link to="/cart"><h4 className='text-xs'>Cart</h4></Link>
                      <Link to="/wishlist"><h4 className='text-xs'>Wishlist</h4></Link>
                      <button onClick={logOutHandle} className='btn btn-sm text-xs bg-red-500 block mt-4'>Log out</button>
                  </>
                  : <>
                      <Link to="/login"><h4 className='text-xs'>Login</h4></Link>
                      <Link to="/register"><h4 className='text-xs'>Register</h4></Link>
                      <Link to="/cart"><h4 className='text-xs'>Cart</h4></Link>
                      <Link to="/wishlist"><h4 className='text-xs'>Wishlist</h4></Link>
                  </>
                  }
              </div>
          </div>
        </div>
      </div>
    );
};

export default Search;