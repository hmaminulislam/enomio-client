import React from "react";
import feedBackImg1 from "../../assets/img/about/feedback-1.png";
import feedBackImg2 from "../../assets/img/about/feedback-2.png";
import feedBackImg3 from "../../assets/img/about/feedback-3.png";
import feedBackImg4 from "../../assets/img/about/feedback-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "./About.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const AboutFeedback = () => {
  const feedbacks = [
    {
      name: "Dipiya Jni",
      location: "Europe",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem doloremque, numquam deleniti in delectus, quas aliquid esse, dolorem adipisci voluptatem assumenda! Est amet, necessitatibus iure dolorem aspernatur accusantium officia.",
      img: feedBackImg1,
    },
    {
      name: "Ridoy Rock",
      location: "London",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem doloremque, numquam deleniti in delectus, quas aliquid esse, dolorem adipisci voluptatem assumenda! Est amet, necessitatibus iure dolorem aspernatur accusantium officia.",
      img: feedBackImg2,
    },
    {
      name: "Minum Min",
      location: "Australia",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem doloremque, numquam deleniti in delectus, quas aliquid esse, dolorem adipisci voluptatem assumenda! Est amet, necessitatibus iure dolorem aspernatur accusantium officia.",
      img: feedBackImg3,
    },
    {
      name: "Tonmoy Kobir",
      location: "Sweden",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem doloremque, numquam deleniti in delectus, quas aliquid esse, dolorem adipisci voluptatem assumenda! Est amet, necessitatibus iure dolorem aspernatur accusantium officia.",
      img: feedBackImg4,
    },
  ];
  return (
    <div className="my-20">
      <h2 className="text-center text-3xl font-semibold mb-12">
        Customers Feedback
      </h2>
      <Swiper
        // responsive
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1280: {
            width: 1280,
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <div className="">
          {feedbacks.map((feedback) => (
            <SwiperSlide>
              <>
                <div>
                  <i className="fa-solid fa-star text-orange-300 mr-1"></i>
                  <i className="fa-solid fa-star text-orange-300 mr-1"></i>
                  <i className="fa-solid fa-star text-orange-300 mr-1"></i>
                  <i className="fa-solid fa-star text-orange-300 mr-1"></i>
                  <i className="fa-solid fa-star text-orange-300 mr-1"></i>
                  <span>(5.0)</span>
                </div>
                <p className="text-sm my-4">{feedback.description}</p>
                <div className="flex items-center gap-3">
                  <img
                    className="w-20 h-20 rounded-full"
                    src={feedback.img}
                    alt=""
                  />
                  <div>
                    <h5 className="font-semibold">{feedback.name}</h5>
                    <p className="text-sm">{feedback.location}</p>
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default AboutFeedback;
