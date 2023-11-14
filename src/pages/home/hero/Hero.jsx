import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import image1 from '../../../assets/img/slider/hero-right.png'
import image2 from '../../../assets/img/slider/hero-right-2.webp'
import image3 from '../../../assets/img/slider/hero-right-3.webp'

const Hero = () => {
    const sliderItem = [
    {
      title: "T-Shirt Collections",
      description: "Sale up to 50% off on selected items",
      image: image1,
    },
    {
      title: "Exclusive collection",
      description: "Sale up to 60% off on selected items",
      image: image2,
    },
    {
      title: "Exclusive collection",
      description: "Sale up to 70% off on selected items",
      image: image3,
    },
  ];
  return (
    <div className="mt-4 bg-[#eff0ed]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderItem.map((slider, index) => (
          <SwiperSlide key={index}>
            <>
              <div className={`flex items-center py-10 sm:py-0 sm:rounded-md max-w-[1400px] mx-auto`}>
                <div className="w-full sm:flex-1">
                  <div className="flex h-full justify-center items-center">
                    <div className="w-9/12">
                      <h2 className="text-2xl text-primary sm:text-5xl font-semibold mb-3">
                        {slider.title}
                      </h2>
                      <h3 className="sm:text-lg text-black text-xs mb-5">
                        {slider.description}
                      </h3>
                      <button className="btn bg-transparent border-primary text-sm text-primary px-10 rounded-full hover:bg-primary hover:text-white">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:flex-1">
                  <img className="sm:w-full w-[100%]" src={slider.image} alt="" />
                </div>
              </div>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;