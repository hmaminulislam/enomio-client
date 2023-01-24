import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToCartDb, removeWishListDb } from '../../utilities/AddToCart';

const WishList = () => {
    const [products, setProducts] = useState(0)
    const [refresh, setRefresh] = useState(false);

    useEffect( () => {
        const getProducts = JSON.parse(localStorage.getItem("enomio-wishlist"))
        setProducts(getProducts)
    }, [refresh]);

    const handleRemoveWishlist = (id) => {
        removeWishListDb(id)
        setRefresh(!refresh)
    }
    const handleCart = (product) => {
        addToCartDb(product, 1)
    }
    return (
        <div>
            <>
            {
                products? 
                <>
                    <div className='px-5 md:px-10 lg:px-14 mb-20'>
                        <h4 className='text-center text-2xl font-semibold my-10'>Wishlist</h4>
                        <div className=''>
                            <div className='md:block hidden lg:flex-auto lg:mr-5 mr-0'>
                                <table className="table w-full">
                                    <thead>
                                    <tr>
                                        <th className='font-semibold text-zinc-500 text-sm text-center'>Product</th>
                                        <th className='font-semibold text-zinc-500 text-sm text-center'>Price</th>
                                        <th className='font-semibold text-zinc-500 text-sm text-center'>Quantity</th>
                                        <th className='font-semibold text-zinc-500 text-sm text-center'>Subtotal</th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {/* row */}
                                    {
                                        products.map(pro => <>
                                            <tr className=''>
                                                <td>
                                                <div className="flex items-center">
                                                    <div className='w-24 h-24 bg-base-300 p-4 mr-4'>
                                                        <img className='w-full h-full' src={pro.img} alt="" />
                                                    </div>
                                                    <h4 className='text-sm'>{pro.name}</h4>
                                                </div>
                                                </td>
                                                <td className='text-center'>
                                                    ${pro.price}
                                                </td>
                                                <td>
                                                    In Stock
                                                </td>
                                                <td className='text-center'>
                                                    <button onClick={() => handleCart(pro)} className='bg-gray-900 py-2 px-2 text-xs text-white'>Add to cart</button>
                                                </td>
                                                <td className='text-center'>
                                                    <i onClick={() => handleRemoveWishlist(pro._id)} className="fa-solid fa-xmark bg-slate-400 hover:bg-slate-700 cursor-pointer w-6 h-6 rounded-full text-white flex items-center justify-center"></i>
                                                </td>
                                            </tr>
                                        </>)
                                    }
                                    </tbody>
                                </table>
                            </div>
                            {/* small device */}
                            <div className='md:hidden block'>
                                {
                                    products.map(pro => <>
                                        <div className='text-center relative border border-gray-200 mb-5 py-8'>
                                            <div className='w-24 h-24  bg-base-300 p-4 mx-auto'>
                                                <img className='w-full h-full' src={pro.img} alt="" />
                                            </div>
                                            <h3 className='text-sm text-center mt-2'>{pro.name}</h3>
                                            <h3 className='text-sm text-center mt-2'><span className='font-semibold'>Price: </span>${pro.price}</h3>
                                            <h3 className='text-sm text-center mt-2'><span className='font-semibold'>STOCK STATUS: </span>In Stock</h3>
                                            <h3 className='text-sm text-center mt-2'><span className='font-semibold'>Subtotal: </span>${pro.quantity * pro.price}</h3>
                                            <i onClick={() => handleRemoveWishlist(pro._id)} className="fa-solid fa-xmark bg-slate-400 w-6 h-6 rounded-full text-white flex items-center justify-center remove-cart-icon"></i>
                                        </div>
                                    </>)
                                }
                            </div>
                        </div>
                    </div>
                </> : 
                <>
                    <div className='px-5 md:px-10 lg:px-14 my-20 text-center'>
                        <h4 className='text-lg text-gray-600 font-semibold text-center mb-2'>Your wishlist is currently empty.</h4>
                        <i className="fa-regular fa-heart text-9xl text-gray-400 text-center w-full"></i>
                        <Link to="/shop"><button className='text-sm bg-zinc-800 py-3 px-5 text-gray-100 mt-5'>RETURN TO SHOP</button></Link>
                    </div>
                </>
            }
            </>
        </div>
    );
};

export default WishList;