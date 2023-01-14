import React from 'react';
import './description-review.css'
import img from '../../../../assets/img/shop/author.jpg'

const DescriptionReview = ({product}) => {
    const {featureList, featureText, weight, width, color} = product;
    return (
        <div className='sm:mt-20 mt-10'>
            <div className='flex items-center'>
                <div className='relative'>
                    <h3 className='sm:text-2xl text-lg font-semibold'>Description</h3>
                    <span className='description-text'></span>
                </div>
                <div className='mr-12'>
                </div>
                <div className='relative'>
                    <h3 className='sm:text-2xl text-lg font-semibold'>Reviews</h3>
                    <span className='description-text'></span>
                </div>
            </div>
            <div className='mt-8'>
                <div>
                    <h4 className='text-xl font-semibold'>Features</h4>
                    <p className='text-sm mt-3'>{featureText}</p>
                    <ul className='mt-4'>
                        {
                            featureList.map(li => <li className='text-sm mb-2'><i class="fa-solid fa-check mr-2"></i>{li.list}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h4 className='text-xl font-semibold my-4'>Specifications</h4>
                     <tr>
                        <th className='border-all text-sm font-normal py-3 px-8'>Width</th>
                        <td className='py-3 px-14 text-center border-t-r-b text-xs'>{width}</td>
                    </tr>
                     <tr>
                        <th className='border-all text-sm font-normal py-3 px-8'>Weight</th>
                        <td className='py-3 px-14 text-center border-t-r-b text-xs'>{weight}</td>
                    </tr>
                     <tr>
                        <th className='border-all text-sm font-normal py-3 px-8'>Color</th>
                        <td className='py-3 px-14 text-center border-t-r-b text-xs'>{color}</td>
                    </tr>
                     <tr>
                        <th className='border-all text-sm font-normal py-3 px-8'>Size</th>
                        <td className='py-3 px-14 text-center border-t-r-b text-xs'>Small, Medium, Large</td>
                    </tr>
                </div>
            </div>
            <div>
                <div className='mt-10 sm:flex'>
                    <img className='mr-5 w-20 h-20' src={img} alt="" />
                    <div>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-sky-600 font-semibold sm:flex items-center mt-2 sm:mt-0'>Aminul Islam <p className='text-xs sm:ml-5 mb-2 sm:mb-0 font-normal text-gray-400'>Sep 22, 2020 at 9:42 pm</p></h4>
                            <div className="tooltip cursor-pointer mt-1" data-tip={'0.00'}>
                                <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                                <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                                <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                                <i class="fa-solid fa-star text-gray-300 text-sm"></i>
                                <i class="fa-solid fa-star text-gray-300 text-sm mr-2"></i>
                            </div>
                        </div>
                        <p className='text-sm w-[90%] text-zinc-500'>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                    </div>
                </div>
                <form className='mt-10'>
                    <h4 className='sm:text-lg text-base font-semibold'>Add a Review</h4>
                    <div className='flex items-center mt-4'>
                        <h5 className='mr-3'>Your Rating</h5>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DescriptionReview;