import React from 'react';
import CheckoutCart from './CheckoutCart';

const Checkout = () => {
    
    return (
        <div>
            <div className='px-5 md:px-10 lg:px-14 mb-20'>
                <h4 className='text-center text-2xl font-semibold my-10'>Checkout</h4>
                <div className='lg:flex justify-between'>
                    <div className='lg:flex-auto lg:mr-5 mr-0'>
                        <>
                        <div className="">
                            <div className="flex justify-center items-center border border-gray-200 mb-10">
                                <div className="w-full px-10 mt-10 mb-10">
                                <form onSubmit={"handleSubmit"}>
                                    <div className="mb-4">
                                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6 mb-6'>
                                        <div>
                                            <label htmlFor="fristName" className="text-gray-600">
                                            Frist Name
                                            </label>
                                            <input
                                                type="text"
                                                name="fristName"
                                                placeholder="Frist Name"
                                                className="input w-full text-sm outline-none border border-gray-300"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="text-gray-600">
                                            Last Name
                                            </label>
                                            <input
                                                type="last Name"
                                                name="lastName"
                                                placeholder="Last Name"
                                                className="input w-full text-sm outline-none border border-gray-300"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="text-gray-600">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="input w-full text-sm outline-none border border-gray-300"
                                            required
                                        />
                                    </div>
                                    </div>
                                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6'>
                                        <div className="">
                                            <label htmlFor="city" className="text-gray-600">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                placeholder="City"
                                                className="input w-full text-sm outline-none border border-gray-300"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="state" className="text-gray-600">
                                                State
                                            </label>
                                            <input
                                                type="text"
                                                name="state"
                                                placeholder="State"
                                                className="input w-full text-sm outline-none border border-gray-300"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6'>
                                        <div className="">
                                            <label htmlFor="zip" className="text-gray-600">
                                                Zip
                                            </label>
                                            <input
                                                type="text"
                                                name="zip"
                                                placeholder="Zip"
                                                className="input w-full text-sm outline-none border border-gray-300"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="phone" className="text-gray-600">
                                                Phone
                                            </label>
                                            <input
                                                type="text"
                                                name="phone"
                                                placeholder="Phone"
                                                className="input w-full text-sm outline-none border border-gray-300"
                                                required
                                            />
                                        </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </>
                    </div>
                    <CheckoutCart />
                </div>
            </div>
        </div>
    );
};

export default Checkout;