import React from 'react';

const TopBar = () => {
    return (
        <>
        <div className='py-3 secondary-bg hidden md:block'>
            <div className="flex justify-between items-center px-5 md:px-10 lg:px-14">
                <div><h4 className='text-xs text-white'>Welcome to Enomio store message or remove it!</h4>
                </div>
                <div className='flex'>
                    <div className='flex items-center mr-8'>
                        <i className="fa-solid text-gray-300 fa-location-dot mr-1"></i>
                        <h4 className='text-xs text-white'>Contact</h4>
                    </div>
                    <div className='flex items-center mr-8'>
                        <i className="fa-solid text-gray-300 fa-circle-info mr-1"></i>
                        <h4 className='text-xs text-white'>Need help</h4>
                    </div>
                    <div className='flex items-center'>
                        <i className="fa-solid text-gray-300 fa-user mr-1"></i>
                        <h4 className='text-xs text-white'>Sign in</h4>
                        <span className='text-white px-1'>/</span>
                        <h4 className='text-xs text-white'>Register</h4>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        </>
    );
};

export default TopBar;