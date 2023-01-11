import React from 'react';

const ServicesInfo = () => {
    const services = [
        {
            title: "Free Shipping",
            body: "Free Shipping for orders over $130.",
            icon: "fa-solid fa-truck"
        },
        {
            title: "Money Guarantee",
            body: "Within 30 days for an exchange.",
            icon: "fa-regular fa-handshake"
        },
        {
            title: "Online Support",
            body: "24/7 hours Online support daily.",
            icon: "fa-solid fa-headset"
        },
        {
            title: "Flexible Payment",
            body: "Pay with Multiple Credit Cards.",
            icon: "fa-regular fa-credit-card"
        },
    ]
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10'>
            {services.map(ser => <>
                <div className='flex items-center py-3 px-4 service-box'>
                    <i className={`${ser.icon} text-4xl text-sky-600 mr-3`}></i>
                    <div>
                        <h3 className='text-lg text-black'>{ser.title}</h3>
                        <p className='text-sm text-gray-500'>{ser.body}</p>
                    </div>
                </div>
                </>)
            }
        </div>
    );
};

export default ServicesInfo;