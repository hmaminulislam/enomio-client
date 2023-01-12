import React from 'react';
import './quick-view-modal.css'

const QuickViewModal = ({product}) => {
    console.log(product);
    const {img, name, category, price, shortText} = product
    return (
        <>
    <input type="checkbox" id="QuickViewModal" className="modal-toggle" />
    <label htmlFor="QuickViewModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
            <label htmlFor="QuickViewModal" className="absolute right-4 top-2 cursor-pointer"><i class="fa-solid fa-xmark text-xl"></i></label>
            <div className='flex'>
                <div className='quick-view-img'>
                    <img className='h-full mx-auto' src={img} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>{name}</h2>
                    <h5 className='text-xs text-gray-400 uppercase'>CATEGORY: {category}</h5>
                    <h2 className='text-2xl font-semibold text-sky-600 mt-2'>${price}.00</h2>
                    <div className="tooltip cursor-pointer" data-tip={'0.00'}>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                        <i class="fa-solid fa-star text-gray-300 text-sm mr-2"></i>
                        <span className='text-gray-400 text-sm'>{`(Reviews ${'0'})`}</span>
                    </div>
                    <p className='text-sm text-gray-500 mt-2'>{shortText}</p>
                    <div className='mt-3'>
                        <span>Size:</span>
                        <select className="quick-view-size">
                            <option selected>Choose a option</option>
                            <option selected>Small</option>
                            <option selected>Medium</option>
                            <option selected>Large</option>
                        </select>
                    </div>
                    <div className='flex items-center mt-5'>
                        <i class="fa-solid fa-minus quantity-icon"></i>
                        <h5 className='quantity-result'>{0}</h5>
                        <i class="fa-solid fa-plus quantity-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </label>
        </>
    );
};

export default QuickViewModal;