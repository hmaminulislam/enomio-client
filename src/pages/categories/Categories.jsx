import React, { useEffect, useState } from 'react';
import ProductCard from '../../common/product-card/ProductCard';
import Spinner from '../../common/spinner/Spinner';
import './categories.css'

const Categories = () => {
    const [cate, setCate] = useState('men')
    const [products, setProducts] = useState()
    useEffect(() => {
        const url = `https://enomio-server.vercel.app/category/${cate}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [cate])
    return (
        <div className='my-20 sm:flex items-start gap-20 pl-5 sm:px-10 px-5 max-w-[1400px] mx-auto'>
            <div className='categor-btn-container sm:sticky'>
                <div className='sm:flex flex-col grid grid-cols-2 gap-5'>
                    <button onClick={() => setCate('men')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>Men</button>
                    <button onClick={() => setCate('women')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>Women</button>
                    <button onClick={() => setCate('tshirt')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>T-shirt</button>
                    <button onClick={() => setCate('laptop')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>Laptop</button>
                    <button onClick={() => setCate('bag')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>Bag</button>
                    <button onClick={() => setCate('jacket')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>Jacket</button>
                    <button onClick={() => setCate('pant')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>Pant</button>
                    <button onClick={() => setCate('shoes')} className='px-8 py-3 bg-primary  text-white sm:mb-5 mb-0'>Shoes</button>
                </div>
            </div>
            <div className='categories-products mt-20 sm:mt-0'>
            {
                products? <>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 px-5 md:pl-10 md:pr-0 lg:pl-14'>
                    <ProductCard products={ products && products} />
                </div>  
            </>
            : <Spinner height={'h-60'} />
            }
            </div>
        </div>
    );
};

export default Categories;