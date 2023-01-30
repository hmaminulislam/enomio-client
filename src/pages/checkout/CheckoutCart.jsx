import React from 'react';

const CheckoutCart = ({totalPrice, setTotalPrice, total}) => {
    const handleFreeShip = () => {
        setTotalPrice(total?.state)
    }
    const handleLocalPickup = () => {
        setTotalPrice(parseInt(total?.state) + 50)
    }
    const handleFlatRate = () => {
        setTotalPrice(parseInt(total?.state) + 100)
    }
    return (
        <div className='lg:w-96 cart-total w-full border border-gray-300 lg:px-8 px-20 py-10 lg:py-0'>
            <h4 className='text-lg font-semibold mt-5'>Cart Totals</h4>
            <div className='flex justify-between border-b border-gray-200 pb-2 pt-4'>
                <h4 className='font-semibold text-sm'>Subtotal</h4>
                <h4 className='text-sm'>${total.state}</h4>
            </div>
            <h4 className='font-semibold text-sm mt-4'>Shipping</h4>
            <div className='flex items-center mt-2 mb-2'>
                <input onClick={handleFreeShip} type="radio" defaultChecked name="radio-2" id='free' className="radio checked:bg-blue-500 radio-sm mr-3" />
                <label className='text-sm text-gray-500' htmlFor="free">Free shipping</label>
            </div>
            <div className='flex items-center mb-2 mt-3'>
                <input onClick={handleLocalPickup} type="radio" id='local' name="radio-2" className="radio checked:bg-blue-500 radio-sm mr-3" />
                <label className='text-sm text-gray-500' htmlFor="local">Local pickup</label>
            </div>
            <div className='flex items-center mb-4'>
                <input onClick={handleFlatRate} type="radio" name="radio-2" id='flat' className="radio checked:bg-blue-500 radio-sm mr-3" />
                <label className='text-sm text-gray-500' htmlFor="flat">Flat rate</label>
            </div>
            <hr />
            <div className='mt-3'>
                <h3 className='font-semibold text-sm'>Payment Method</h3>
                <div className='flex items-center mt-2 mb-4'>
                    <input type="radio" name="payment" id='sslcom' defaultChecked className="radio checked:bg-green-500 radio-sm mr-3" />
                    <label className='text-sm text-gray-500' htmlFor="sslcom">SSLCOMMERCE</label>
                </div>
                <div className='flex items-center mt-2 mb-4'>
                    <input type="radio" name="payment" id='cash' className="radio checked:bg-green-500 radio-sm mr-3" />
                    <label className='text-sm text-gray-500' htmlFor="cash">Cash on Delivery</label>
                </div>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <h4 className='font-semibold'>Total</h4>
                <h4 className='text-gray-500 font-semibold'>${totalPrice? totalPrice: total.state}</h4>
            </div>
            <button type='submit' className='w-full bg-slate-800 hover:bg-gray-700 py-3 text-white text-sm font-semibold lg:mt-5 mt-10'>Place Order</button>
        </div>
    );
};

export default CheckoutCart;