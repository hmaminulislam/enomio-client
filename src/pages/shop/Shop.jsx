import React, { useEffect, useState } from 'react';
import ProductCard from '../../common/product-card/ProductCard';
import './shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect( () => {
        const getProducts = async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json()
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <>
            <div className='shop-banner h-64 flex items-center mt-10'>
                <h2 className='text-4xl font-semibold pl-52'>Shop</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-20 px-5 md:px-10 lg:px-14 my-20'>
                <ProductCard products={products} />
            </div>
        </>
    );
};

export default Shop;