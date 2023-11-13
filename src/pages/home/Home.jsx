import React from 'react';
import Categories from './categories/Categories';
import Hero from './hero/Hero';
import ServicesInfo from './services-info/ServicesInfo';
import TrendingCategory from './trending-category/TrendingCategory';
import './Home.css'
import BestSelling from './best-selling/BestSelling';

const Home = () => {

    return (
        <>
            <div className='md:px-10 lg:px-14'>
                <Hero />
            </div>
            <div className='px-5 md:px-10 lg:px-14'>
                <TrendingCategory />
                <ServicesInfo />
            </div>
            <div className='md:px-10 lg:px-14 px-2'>
                <Categories />
            </div>
            <div className='px-5 md:px-10 lg:px-14'>
                <BestSelling />
            </div>
        </>
    );
};

export default Home;