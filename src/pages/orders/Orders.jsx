import React from 'react';

const Orders = () => {
    return (
        <div className='px-5 md:px-10 lg:px-14 mt-5'>
            <div>
                <div>
                    <h3 className='text-2xl text-primary font-semibold'>My Account</h3>
                    <h4 className='text-xl font-semibold mt-4'>Welcome to, aminul</h4>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <i class="fa-solid fa-cube text-xl text-gray-600"></i>
                        <span className='text-gray-600'>Orders</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <i class="fa-regular fa-user text-xl text-gray-600"></i>
                        <span className='text-gray-600'>Personal info</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <i class="fa-solid fa-lock text-xl text-gray-600"></i>
                        <span className='text-gray-600'>Change password</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <i class="fa-regular fa-map text-xl text-gray-600"></i>
                        <span className='text-gray-600'>Address</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <i class="fa-solid fa-arrow-right-from-bracket text-xl text-gray-600"></i>
                        <span className='text-gray-600'>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;