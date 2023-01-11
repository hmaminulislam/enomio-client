import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
import image1 from '../../../assets/img/slider/slider-1.png'
import image2 from '../../../assets/img/slider/slider-2.png'
import image3 from '../../../assets/img/slider/slider-3.png'

const Hero = () => {
    const sliderItem = [
    {
      title: "T-Shirt Collections",
      description: "Sale up to 50% off on selected items",
      image: image1,
      bgColor: "slider-bg-1",
    },
    {
      title: "Bag Collections",
      description: "Sale up to 60% off on selected items",
      image: image2,
      bgColor: "slider-bg-2",
    },
    {
      title: "UHD Televisions",
      description: "Sale up to 70% off on selected items",
      image: image3,
      bgColor: "slider-bg-3",
    },
  ];
  return (
    <div className="mt-10">
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
              <div className={`flex py-10 sm:rounded-md ${slider.bgColor}`}>
                <div className="w-full sm:flex-1">
                  <div className="flex h-full justify-center items-center">
                    <div className="w-9/12">
                      <h2 className="text-2xl sm:text-5xl font-semibold mb-3">
                        {slider.title}
                      </h2>
                      <h3 className="sm:text-lg text-xs mb-5">
                        {slider.description}
                      </h3>
                      <button className="btn bg-transparent text-sm text-black rounded-full hover:bg-white">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:flex-1">
                  <img className="sm:w-full w-[90%] sm:h-96 h-44" src={slider.image} alt="" />
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