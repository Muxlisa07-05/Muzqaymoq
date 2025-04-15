import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Основные стили
import "swiper/css/pagination"; // Если нужна пагинация

import { Pagination } from "swiper/modules";
import stakan from './img/stakan.webp'
import stakancha from './img/stakancha.webp'
import konteyner from './img/konteyner.webp'
import konteyner2 from './img/konteyner2.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Stakan = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // длительность по умолчанию
      once: true // чтобы анимация срабатывала только один раз
    });
  }, []);
  
  return (
    <section>
      <div className="font-[Poppins] mt-[100px]">
        <div className="w-full px-4 sm:px-[90px]">
          <h2 className="text-[30px] font-semibold" data-aos="fade-right">Muzqaymoq aralashmalari</h2>
          <div className="mt-[30px]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                320: { slidesPerView: 1 },        // На мобильных устройствах один слайд
                768: { slidesPerView: 2 },        // На экранах от 768px два слайда
                1024: { slidesPerView: 3 },       // На экранах от 1024px три слайда
              }}
              pagination={{
                clickable: true, // Делаем пагинацию кликабельной
              }}
              modules={[Pagination]}
              data-aos="fade-left"
            >
              {/* Слайд 1 */}
              <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                <div className="flex flex-col items-center">
                  <img
                    src={stakan}
                    alt="Sut ta'mli"
                    className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px] mx-auto"
                  />
                  <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Blueberry mint</p>
                  <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                    <a href="#modal">Buyurtma berish</a>
                  </button>
                </div>
              </SwiperSlide>
              
              {/* Слайд 2 */}
              <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                <div className="flex flex-col items-center">
                  <img
                    src={stakancha}
                    alt="Banan ta'mli"
                    className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px]"
                  />
                  <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Blueberry mint</p>
                  <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                    <a href="#modal">Buyurtma berish</a>
                  </button>
                </div>
              </SwiperSlide>
              
              {/* Слайд 3 */}
              <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                <div className="flex flex-col items-center">
                  <img
                    src={konteyner}
                    alt="Caramel ta'mli"
                    className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px] mx-auto"
                  />
                  <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Blueberry mint</p>
                  <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                    <a href="#modal">Buyurtma berish</a>
                  </button>
                </div>
              </SwiperSlide>
              
              {/* Слайд 4 */}
              <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                <div className="flex flex-col items-center">
                  <img
                    src={konteyner2}
                    alt="Qora shokolad ta'mli"
                    className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px]"
                  />
                  <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Blueberry mint</p>
                  <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                    <a href="#modal">Buyurtma berish</a>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stakan;
