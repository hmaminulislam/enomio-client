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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4 mt-10'>
            {services.map((ser, index) => <div key={index}>
                <div className='flex items-center py-8 px-4 service-box'>
                    <i className={`${ser.icon} text-4xl text-primary mr-3`}></i>
                    <div>
                        <h3 className='text-lg text-black'>{ser.title}</h3>
                        <p className='text-sm text-gray-500'>{ser.body}</p>
                    </div>
                </div>
                </div>)
            }
        </div>
    );
};

export default ServicesInfo;