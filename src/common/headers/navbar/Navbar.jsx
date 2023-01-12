import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({mobileMenu, setMobileMenu}) => {
    return (
        <>
        <div className='px-5 md:px-10 lg:px-14 hidden md:block'>
            <div className='pt-5 flex justify-between'>
                <div>
                    <ul className='flex'>
                        <NavLink to='/'><li className='menu-link mr-7'>Home</li></NavLink>
                        <li className='menu-link mr-7'>Categories</li>
                        <li className='menu-link mr-7'>Products</li>
                        <li className='menu-link mr-7'>Blog</li>
                        <NavLink to='/about'><li className='menu-link mr-7'>About</li></NavLink>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <i className="fa-solid fa-tag text-xl mr-2 text-gray-600"></i>
                    <h4 className='font-semibold'>Special Offers</h4>
                </div>
            </div>
        </div>
        {/* Mobile menu */}
        <div className={`absolute z-[999] top-0 ${mobileMenu ? 'left-0 ease-in duration-500' : 'left-[-400px] ease-out duration-500'}`}>
            <div className="relative">
                <div className="mobile-menu bg-base-300 text-base-content">
                    <ul className="p-4">
                        <li className='mb-3'>Home</li>
                        <li className='mb-3'>Categories</li>
                        <li className='mb-3'>Products</li>
                        <li className='mb-3'>Blog</li>
                        <li className='mb-3'>About</li>
                    </ul>
                </div>
                <i onClick={() => setMobileMenu(false)}className="fa-solid fa-xmark text-3xl cursor-pointer absolute top-[10px] right-[10px]"></i>
            </div>
        </div>
        </>
    );
};

export default Navbar;