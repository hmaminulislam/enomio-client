import React, { useState } from 'react';
import OfferModal from '../../common/modal/OfferModal';
import Categories from './hero/Categories';
import Hero from './hero/Hero';
import ServicesInfo from './hero/ServicesInfo';
import './Home.css'

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);

    window.onload = function() {
        setTimeout(function(){
            setModalOpen(true)
        }, 2000)
    }
    return (
        <>
        {modalOpen? <OfferModal setModalOpen={setModalOpen} /> : ''}
        <div onClick={() => setModalOpen(false)} className='md:px-10 lg:px-14'>
            <Hero />
        </div>
        <div className='px-5 md:px-10 lg:px-14'>
            <ServicesInfo />
        </div>
        <div className='md:px-10 lg:px-14 px-2'>
            <Categories />
        </div>
        </>
    );
};

export default Home;