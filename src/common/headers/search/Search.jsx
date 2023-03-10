import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Search = ({setMobileMenu}) => {
    const [productCart, setProductCart] = useState(0);
    const {cart, setCart} = useContext(AuthContext)
    useEffect( () => {
        const cartDb = JSON.parse(localStorage.getItem('enomio-cart'))
        console.log();
        let count = cartDb?.length;
        setProductCart(count)
        setCart(false)
    }, [cart])

    return (
        <div className='flex justify-between pt-5 px-5 md:px-10 lg:px-14'>
            <div className='md:hidden mr-5'>
                <i onClick={() => setMobileMenu(true)} className="fa-solid fa-bars-staggered sm:text-3xl text-2xl cursor-pointer"></i>  
            </div>
            <div className='flex-1'>
                <NavLink to='/'><h3 className='text-2xl sm:text-4xl font-bold secondary-text uppercase'>Enomio</h3></NavLink>
            </div>
            <div className='flex-1 hidden md:block'>
                <div className='border-2 h-12 border-gray-300 rounded-sm w-100 flex justify-between items-center'>
                    <input className='outline-none w-full h-full px-3 search' type="text" name="" placeholder='Search..' />
                    <i className="flex-auto fa-solid fa-magnifying-glass text-xl text-gray-600 mr-3 pl-3"></i>
                </div>
            </div>
            <div className='flex-1 flex justify-end md:ml-4 lg:ml-0'>
                <div className='hidden md:block'>
                    <div className='flex items-center mr-8'>
                        <i className="fa-solid fa-phone text-3xl text-gray-500 mr-2"></i>
                        <div>
                            <h4 className='text-xs'>Call now us</h4>
                            <h3 className='font-semibold'>01439493489</h3>
                        </div>
                    </div>
                </div>
                <Link to="/wishlist" className='sm:mr-8 mr-4'>
                    <i className="fa-regular fa-heart sm:text-3xl text-2xl"></i>
                </Link>
                <Link to={'/cart'} className="relative mr-4 sm:mr-8 md:mr-0">
                    <i className="fa-solid fa-cart-shopping sm:text-3xl text-2xl"></i>
                    <span className='bg-red-400 w-5 h-5 rounded-full text-center inline-block absolute top-[-7px] right-[-7px] text-zinc-50 text-xs'>{productCart? productCart : '0'}</span>
                </Link>
                <div className='block md:hidden'>
                    <i className="fa-regular fa-user sm:text-3xl text-2xl"></i>
                </div>
            </div>
        </div>
    );
};

export default Search;