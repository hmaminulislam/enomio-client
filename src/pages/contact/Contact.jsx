import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-banner h-64 mt-7'>
                <h3 className='text-center text-3xl text-white font-semibold'>Contact Us</h3>
            </div>
            <div className='px-5 md:px-10 lg:px-14 my-14 max-w-[1400px] mx-auto'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-10 mb-10 md:mb-20'>
                    <div className='contact-card'>
                        <i class="fa-regular fa-building text-[35px] text-primary mb-4"></i>
                        <h4 className='text-xl font-semibold mb-2'>Headquarters</h4>
                        <p className='text-sm'>1600 Amphitheatre Parkway</p>
                        <p className='text-sm'>New York WC1 1BA</p>
                    </div>
                    <div className='contact-card'>
                        <i class="fa-solid fa-phone text-[35px] text-primary mb-4"></i>
                        <h4 className='text-xl font-semibold mb-2'>Phone Number</h4>
                        <p className='text-sm'>02994 340 0943</p>
                        <p className='text-sm'>23340 040 0434</p>
                    </div>
                    <div className='contact-card'>
                        <i class="fa-regular fa-envelope text-[35px] text-primary mb-4"></i>
                        <h4 className='text-xl font-semibold mb-2'>Support</h4>
                        <p className='text-sm'>support@enomio.com</p>
                        <p className='text-sm'>enomio@customer.com</p>
                    </div>
                </div>
                <div className='max-w-[850px] mx-auto'>
                    <h4 className='text-2xl font-semibold my-5'>Let’s Connect</h4>
                    <form>
                        <div className='grid grid-cols-2 sm:gap-8 gap-5'>
                            <input required className="input w-full border border-gray-400" type="email" placeholder='Your email' />
                            <input required className="input w-full border border-gray-400" type="text" placeholder='Your name' />
                        </div>
                        <div className='sm:mt-8 mt-5'>
                            <textarea required className="textarea w-full border border-gray-400 h-32" placeholder='Your message...'></textarea>
                        </div>
                        <div className='sm:my-8 my-4'>
                            <button className='px-8 py-3 border-[1px] border-primary bg-primary rounded-full hover:bg-white hover:text-primary transition duration-500 text-white block ml-auto'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;