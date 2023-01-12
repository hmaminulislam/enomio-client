import React, { useState } from 'react';
import ProductCard from '../../../common/product-card/ProductCard';

const BestSelling = () => {
    const [products, setProducts] = useState([])
    useState( () => {
        const getProduct = async () => {
            const res = await fetch('http://localhost:5000/products')
            const data = await res.json()
            setProducts(data)
        }
        getProduct()
    }, [])
    return (
        <div className='mt-14'>
            <div>
                <h3 className='mb-3 text-xl'>Best Selling</h3>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                <ProductCard products={products} />
            </div>
        </div>
    );
};

export default BestSelling;