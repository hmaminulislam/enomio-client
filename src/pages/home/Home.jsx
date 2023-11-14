import React from 'react';
import Categories from './categories/Categories';
import Hero from './hero/Hero';
import ServicesInfo from './services-info/ServicesInfo';
import TrendingCategory from './trending-category/TrendingCategory';
import './Home.css'
import BestSelling from './best-selling/BestSelling';
import AboutFeedback from '../about/AboutFeedback';

const Home = () => {

    return (
        <>
            <div>
                <Hero />
            </div>
            <div className='px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto'>
                <TrendingCategory />
                <ServicesInfo />
            </div>
            <div className='md:px-10 lg:px-14 px-10 max-w-[1400px] mx-auto'>
                <Categories />
            </div>
            <div className='px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto'>
                <BestSelling />
            </div>
            <div className='px-5 md:px-10 lg:px-14 max-w-[1400px] mx-auto'>
            <AboutFeedback />
            </div>
        </>
    );
};

export default Home;