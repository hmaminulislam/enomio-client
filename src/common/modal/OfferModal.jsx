import React from 'react';
import image from '../../assets/img/modal/modal.png';
import './OfferModal.css'

const OfferModal = ({setModalOpen}) => {
    return (
        <div className='offer-modal'>
            <img className='w-64  hidden lg:block' src={image} alt="" />
            <div>
                <h4 className='text-2xl text-center'>UP TO 20% OFF</h4>
                <h3 className='text-4xl text-center font-semibold mt-1'>Subscribe Now</h3>
                <p className='text-sm text-center mt-2'>Subscribe to the Enomio newsletter to receive timely updates from your favorite products.</p>
                <div className='flex justify-center h-10 items-center mt-4 w-[80%] mx-auto'>
                    <input placeholder='Email' className='w-[80%] h-full offer-email outline-none px-3 text-sm' type="text" />
                    <i class="fa-solid fa-magnifying-glass text-xl text-center flex-auto h-full bg-black text-white cursor-pointer offer-icon"></i>
                </div>
            </div>
            <i onClick={() => setModalOpen(false)} class="fa-solid fa-xmark text-2xl cursor-pointer absolute top-[5px] right-[10px]"></i>
        </div>
    );
};

export default OfferModal;