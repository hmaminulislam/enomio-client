import React, { useState } from 'react';
import OfferModal from '../../common/modal/OfferModal';
import Hero from './hero/Hero';
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
            
        </div>
        </>
    );
};

export default Home;