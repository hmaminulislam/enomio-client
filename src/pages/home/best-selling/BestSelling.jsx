import React, { useState } from 'react';
import ProductCard from '../../../common/product-card/ProductCard';
import Spinner from '../../../common/spinner/Spinner';

const BestSelling = () => {
    const [products, setProducts] = useState(null)
    useState( () => {
        const getProduct = async () => {
            const res = await fetch('https://enomio-server.vercel.app/products')
            const data = await res.json()
            setProducts(data.products.slice(0, 8))
        }
        getProduct()
    }, [])
    return (
        <div className='my-14'>
            <div>
                <h3 className='mb-3 text-xl sm:text-2xl'>Best Selling</h3>
            </div>
            {
                products ? <>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
                    <ProductCard products={products} />
                    </div>
                </>
                : 
                <Spinner height={'h-44'} />
            }
        </div>
    );
};

export default BestSelling;