import React, { useState } from 'react';
import QuickViewModal from '../quick-view-modal/QuickViewModal';
import './product-card.css';

const ProductCard = ({products}) => {
    const number = '0.00';
    const [product, setProduct] = useState('')
    return (
        <>
            {
                products?.map(pro => 
                <div className='product-container'>
                    <div className='h-64 product-img'>
                        <img className='h-full mx-auto' src={pro.img} alt="" />
                        <div className='product-icon-container'>
                            <i class="fa-regular fa-heart product-icon block mb-2 p-3 rounded-full hover:bg-sky-500 hover:text-white cursor-pointer"></i>
                            <i class="fa-solid fa-bag-shopping product-icon block p-3 rounded-full hover:bg-sky-500 hover:text-white cursor-pointer"></i>
                        </div>
                        <label onClick={() => setProduct(pro)} htmlFor="QuickViewModal" className='quick-btn'>Quick view</label>
                    </div>
                    <div className='px-2 mt-2'>
                        <h5 className='text-xs text-gray-400 capitalize'>{pro.category}</h5>
                        <h4 className='text-sm'>{pro.name}</h4>
                        <h3 className='font-semibold text-lg'>${pro.price}</h3>
                        <div className="tooltip cursor-pointer" data-tip={number}>
                            <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        </div>
                    </div>
                </div>)
            }
            {/* product quick view modal */}
            <QuickViewModal product={product} />
        </>
    );
};

export default ProductCard;