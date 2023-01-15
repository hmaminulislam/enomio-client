import React, { useEffect, useState } from 'react';
import './cart.css'

const Cart = () => {
    const [products, setProducts] = useState([])
    console.log(products);
    useEffect( () => {
        const getProducts = async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json()
            setProducts(data.slice(0, 3))
        }
        getProducts()
    }, [])
    return (
        <div className='lg:flex justify-between px-5 md:px-10 lg:px-14 my-20'>
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
                                    <div className='flex items-center justify-center'>
                                        <i onClick={''} className="fa-solid fa-minus quantity-icon"></i>
                                        <h5 className='quantity-result'>{1}</h5>
                                        <i onClick={''} className="fa-solid fa-plus quantity-icon"></i>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    ${pro.price}
                                </td>
                                <td className='text-center'>
                                    <i className="fa-solid fa-xmark bg-slate-400 w-6 h-6 rounded-full text-white flex items-center justify-center"></i>
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
                            <div className='flex items-center justify-center mt-3'>
                                <i onClick={''} className="fa-solid fa-minus quantity-icon"></i>
                                <h5 className='quantity-result'>{1}</h5>
                                <i onClick={''} className="fa-solid fa-plus quantity-icon"></i>
                            </div>
                            <h3 className='text-sm text-center mt-2'><span className='font-semibold'>Subtotal: </span>${pro.price}</h3>
                            <i className="fa-solid fa-xmark bg-slate-400 w-6 h-6 rounded-full text-white flex items-center justify-center remove-cart-icon"></i>
                        </div>
                    </>)
                }
            </div>
            <div className='lg:w-80 w-full border border-gray-300 lg:px-8 px-20 py-10 lg:py-0'>
                <h4 className='text-lg font-semibold mt-5'>Cart Totals</h4>
                <div className='flex justify-between border-b border-gray-200 pb-2 pt-4'>
                    <h4 className='font-semibold text-sm'>Subtotal</h4>
                    <h4 className='text-sm'>${'949'}</h4>
                </div>
                <h4 className='font-semibold text-sm mt-4'>Shipping</h4>
                <div className='flex items-center mb-2 mt-3'>
                    <input type="radio" id='local' name="radio-2" className="radio checked:bg-blue-500 radio-sm mr-3" checked />
                    <label className='text-sm text-gray-500' htmlFor="local">Local pickup</label>
                </div>
                <div className='flex items-center'>
                    <input type="radio" name="radio-2" id='flat' className="radio checked:bg-blue-500 radio-sm mr-3" />
                    <label className='text-sm text-gray-500' htmlFor="flat">Flat rate</label>
                </div>
                <div className='my-5'>
                    <input className='outline-none w-full text-sm border border-gray-200 px-3 py-2' type="text" placeholder='Coupon Code' />
                    <button className='bg-sky-500 py-2 px-5 hover:bg-sky-600 mt-3 text-xs text-white rounded-full'>Apply Coupon</button>
                </div>
                <hr />
                <div className='flex items-center justify-between mt-4'>
                    <h4 className='font-semibold'>Total</h4>
                    <h4 className='text-gray-500 font-semibold'>${'8744'}</h4>
                </div>
                <button className='w-full bg-slate-800 py-3 text-white text-sm font-semibold mt-4'>PROCEED TO CHECKOUT</button>
            </div>
        </div>
    );
};

export default Cart;