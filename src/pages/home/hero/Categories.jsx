import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import men from '../../../assets/img/categories/men.jpg'
import women from '../../../assets/img/categories/women.jpg'
import tshirt from '../../../assets/img/categories/t-shirt.png'
import laptop from '../../../assets/img/categories/laptop.png'
import bag from '../../../assets/img/categories/bag.jpg'
import jecket from '../../../assets/img/categories/jeket.jpg'
import pen from '../../../assets/img/categories/pen.jpg'
import shoes from '../../../assets/img/categories/shoes.jpg'
import { FreeMode } from 'swiper';

const Categories = () => {
    const categories = [
        {
            name: 'Men',
            img: men
        },
        {
            name: 'Women',
            img: women
        },
        {
            name: 'T-Shirt',
            img: tshirt
        },
        {
            name: 'Laptop',
            img: laptop
        },
        {
            name: 'Bag',
            img: bag
        },
        {
            name: 'Jecket',
            img: jecket
        },
        {
            name: 'Pen',
            img: pen
        },
        {
            name: 'Shoes',
            img: shoes
        },
    ]
    return (
        <div className='mt-20'>
            <h2 className='sm:text-2xl text-xl mb-5 text-center sm:text-left'>Categories</h2>
            <Swiper
            breakpoints={{
                // when window width is >= 640px
                340: {
                width: 340,
                slidesPerView: 3,
                },
                // when window width is >= 768px
                768: {
                width: 768,
                slidesPerView: 5,
                },
            }}
        loop={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {categories.map(cate => <>
            <SwiperSlide>
                <div className='cursor-pointer categories-container'>
                    <img className='rounded-full w-20 sm:w-28 mx-auto' src={cate.img} alt="" />
                    <h4 className='sm:text-lg text-sm text-center categories-name'>{cate.name}</h4>
                </div>
            </SwiperSlide>
        </>)}
      </Swiper>
        </div>
    );
};

export default Categories;