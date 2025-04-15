import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import aparat1 from './img/aparat1.webp';
import aparat2 from './img/aparat2.webp';
import stanok from './img/ice_stanok.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Aparat = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  }, []);

  return (
    <section className="mt-24 px-4 sm:px-6 md:px-10 lg:px-[90px] font-[Poppins]">
      <h2 className="text-[24px] sm:text-[30px] font-semibold mb-8" data-aos="fade-right">
        Muzqaymoq aralashmalari
      </h2>
      <div data-aos="fade-left">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[{
            img: aparat1,
            text: "Blueberry mint"
          }, {
            img: aparat2,
            text: "Blueberry mint"
          }, {
            img: stanok,
            text: "Blueberry mint"
          }].map((item, index) => (
            <SwiperSlide key={index} className="bg-blue-400 py-10 flex flex-col items-center rounded-xl">
              <div className='flex flex-col items-center'>
              <img
                src={item.img}
                alt={item.text}
                className="rounded-full bg-blue-600 p-2 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] lg:w-[230px] lg:h-[230px] mx-auto"
              />
              <p className="mt-4 text-lg sm:text-xl font-semibold text-white text-center">
                {item.text}
              </p>
              <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                <a href="#modal">Buyurtma berish</a>
              </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Aparat;
