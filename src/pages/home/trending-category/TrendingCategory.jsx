import React from 'react';

const TrendingCategory = () => {
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
            <div className='trending-women flex justify-end items-center px-10 rounded'>
                <div>
                    <h4 className='text-xl text-white'>NEW ARRIVALS</h4>
                    <h3 className='text-3xl font-bold text-white pb-2'>Women's Sale</h3>
                    <div className='btn-container'>
                        <button className='text-white btn-trending flex items-center'>Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className='trending-shoes flex justify-end items-center px-10 rounded'>
                <div>
                    <h4 className='text-xl text-white'>TRENDING</h4>
                    <h3 className='text-3xl font-bold text-white pb-2'>New Sneaker</h3>
                    <div className='btn-container'>
                        <button className='text-white btn-trending flex items-center'>Shop Now <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCategory;