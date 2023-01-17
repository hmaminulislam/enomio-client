import React, { useEffect, useState } from 'react';
import ProductCard from '../../common/product-card/ProductCard';
import './shop.css'

const Shop = ({CategoryProducts}) => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12)

    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        console.log(page, size);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products);
            })
    }, [page, size])

    const pages = Math.ceil(count / size);
    return (
        <>
            <div className='shop-banner h-64 flex items-center mt-10'>
                <h2 className='text-4xl font-semibold sm:pl-52 pl-5'>Shop</h2>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-20 px-5 md:px-10 lg:px-14 my-20'>
                    <ProductCard products={CategoryProducts? CategoryProducts: products} />
                </div>
                {
                    CategoryProducts? "" : <div className='text-center mb-10'>
                    {
                        [...Array(pages).keys()].map(number => <button onClick={() => setPage(number)} className={page === number? "border border-gray-300 w-9 h-8 text-xs mr-2 font-semibold bg-sky-500" : 'border border-gray-300 w-9 h-8 text-xs mr-2 font-semibold'} key={number}>{number + 1}</button>)
                    }
                </div>
                }
            </div>
        </>
    );
};

export default Shop;