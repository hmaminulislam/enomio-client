import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg from "../../assets/img/about/about-banner.png";

const AboutHero = () => {
    return (
      <>
        <h3 className="text-center text-3xl font-semibold">About</h3>
        <div className="my-10 md:flex justify-between items-center gap-10">
          <div className="flex-1 mx-auto">
            <img className="w-full" src={AboutImg} alt="" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold mt-10 md:mt-0">
              What is e-commerce business?
            </h4>
            <p className="text-slate-600 leading-6 tracking-wide text-sm my-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries but also the on leap into
              electronic typesetting.
            </p>
            <ul className="list-disc text-slate-600 ml-5 md:ml-0">
              <li className="mt-2">When ordering over $100</li>
              <li className="mt-2">Get Return within 30 days</li>
              <li className="mt-2">100% Secure Online Payment</li>
              <li className="mt-2">Original Product Guarenteed</li>
            </ul>
            <Link
              className="bg-primary py-2 px-4 text-white inline-block mt-7 rounded-md"
              to={"/contact"}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </>
    );
};

export default AboutHero;