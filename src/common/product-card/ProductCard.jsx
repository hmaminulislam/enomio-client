import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { addToCartDb } from '../../utilities/AddToCart';
import QuickViewModal from '../quick-view-modal/QuickViewModal';
import './product-card.css';

const ProductCard = ({products}) => {
    const number = '0.00';
    const [product, setProduct] = useState('');
    const {setCart} = useContext(AuthContext)
    const handleAddToCart = (id) => {
        setCart(true)
        addToCartDb(id, 1)
    }
    return (
        <>
            {
                products?.map(pro => 
                <div key={pro._id} className='product-container'>
                    <div className='h-64 product-img'>
                        <Link to={`/shop/${pro._id}`}><img className='h-full mx-auto' src={pro.img} alt="" /></Link>
                        <div className='product-icon-container'>
                            <i className="fa-regular fa-heart product-icon block mb-2 p-3 rounded-full hover:bg-sky-500 hover:text-white cursor-pointer"></i>
                            <i onClick={() => handleAddToCart(pro._id)} className="fa-solid fa-bag-shopping product-icon block p-3 rounded-full hover:bg-sky-500 hover:text-white cursor-pointer"></i>
                        </div>
                        <label onClick={() => setProduct(pro)} htmlFor="QuickViewModal" className='quick-btn'>Quick view</label>
                    </div>
                    <div className='px-2 mt-2'>
                        <h5 className='text-xs text-gray-400 capitalize'>{pro.category}</h5>
                        <Link to={`/shop/${pro._id}`}><h4 className='text-sm'>{pro.name}</h4></Link>
                        <h3 className='font-semibold text-lg'>${pro.price}</h3>
                        <div className="tooltip cursor-pointer" data-tip={number}>
                            <i className="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i className="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i className="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i className="fa-solid fa-star text-gray-300 text-sm"></i>
                            <i className="fa-solid fa-star text-gray-300 text-sm"></i>
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