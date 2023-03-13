import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='contact-banner h-64 mt-12'>
                <h3 className='text-center text-3xl text-white font-semibold'>Contact Us</h3>
            </div>
            <div className='sm:flex justify-between gap-20 px-5 md:px-10 lg:px-14 my-14'>
                <div>
                    <div className='my-5'>
                        <h4 className='text-xl font-semibold mb-2'>Headquarters</h4>
                        <p className='text-sm'>1600 Amphitheatre Parkway</p>
                        <p className='text-sm'>New York WC1 1BA</p>
                    </div>
                    <div className='my-5'>
                        <h4 className='text-xl font-semibold mb-2'>Phone Number</h4>
                        <p className='text-sm'>02994 340 0943</p>
                        <p className='text-sm'>23340 040 0434</p>
                    </div>
                    <div className='my-5'>
                        <h4 className='text-xl font-semibold mb-2'>Support</h4>
                        <p className='text-sm'>support@enomio.com</p>
                        <p className='text-sm'>enomio@customer.com</p>
                    </div>
                </div>
                <div className='w-full'>
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
                            <button className='px-8 py-3 bg-primary rounded-md hover:bg-emerald-600 text-white block ml-auto'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;