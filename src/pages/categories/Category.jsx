import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Shop from '../shop/Shop';

const Category = () => {
    const products = useLoaderData()
    return (
        <div className='my-20'>
            <Shop CategoryProducts={products} />
        </div>
    );
};

export default Category;