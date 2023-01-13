import React, { useState } from 'react';
import { addToCartDb } from '../../utilities/AddToCart';
import './quick-view-modal.css'

const QuickViewModal = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    console.log(product);
    const {img, name, category, price, shortText, id} = product;
    // handle quantity minus button
    const handleQuantity = () => {
        if(quantity >= 2) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity)
        }
        else {
            setQuantity(1)
        }
    }
    const handleCart = () => {
        addToCartDb(id, quantity)
    }
    return (
        <>
    <input onClick={()=> setQuantity(1)} type="checkbox" id="QuickViewModal" className="modal-toggle" />
    <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
            <label htmlFor="QuickViewModal" className="absolute sm:right-4 right-2 top-1 sm:top-2 cursor-pointer"><i class="fa-solid fa-xmark text-xl"></i></label>
            <div className='sm:flex items-center'>
                <div className='quick-view-img'>
                    <img className='sm:h-96 h-56 mx-auto' src={img} alt="" />
                </div>
                <div className='mt-4 sm:mt-0'>
                    <h2 className='sm:text-2xl text-xl font-semibold'>{name}</h2>
                    <h5 className='text-xs text-gray-400 uppercase'>CATEGORY: {category}</h5>
                    <h2 className='sm:text-2xl text-xl font-semibold text-sky-600 mt-3'>${price}.00</h2>
                    <div className="tooltip cursor-pointer mt-1" data-tip={'0.00'}>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm mr-2"></i>
                        <span className='text-gray-400 text-sm'>{`(Reviews ${'0'})`}</span>
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>{shortText}</p>
                    <div className='mt-5'>
                        <span className='text-sm sm:text-base'>Size:</span>
                        <select className="quick-view-size">
                            <option selected>Choose a option</option>
                            <option selected>Small</option>
                            <option selected>Medium</option>
                            <option selected>Large</option>
                        </select>
                    </div>
                    <div className='sm:flex items-center mt-5'>
                        <div className='flex items-center'>
                            <i onClick={handleQuantity} class="fa-solid fa-minus quantity-icon"></i>
                            <h5 className='quantity-result'>{quantity}</h5>
                            <i onClick={() => setQuantity(quantity + 1)} class="fa-solid fa-plus quantity-icon"></i>
                        </div>
                        <button onClick={handleCart} className='flex items-center bg-sky-600 py-2 px-4 sm:ml-5 mt-4 sm:mt-0 hover:bg-sky-700'>
                            <i class="fa-solid fa-bag-shopping sm:text-xl text-base mr-3 text-white"></i>
                            <span className='text-white text-sm sm:text-base'>Add to Cart</span>
                        </button>
                    </div>
                    <button className='flex items-center mt-3'>
                        <i class="fa-regular fa-heart sm:text-xl text-base mr-2"></i>
                        <span className='text-sm sm:text-base'>Add to Wishlist</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};

export default QuickViewModal;