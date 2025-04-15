import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Основные стили
import "swiper/css/pagination"; // Если нужна пагинация

import { Pagination } from "swiper/modules"; // Или другие модули
import banan from './img/banan2.webp'
import berries from './img/berries.webp'
import mango from './img/mango2.webp'
import black from './img/black.webp'
import rasberry from './img/rasberry.webp'
import vanilla from './img/vanilla.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Topping = () => {
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
            <h2 className="text-[30px] font-semibold" data-aos="fade-right">Topping va Bezaklar</h2>
            <div className="mt-[30px]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}  // По умолчанию один слайд
                breakpoints={{
                  320: { slidesPerView: 1 },        // Один слайд на мобильных устройствах
                  768: { slidesPerView: 2 },        // Два слайда на экранах от 768px
                  1024: { slidesPerView: 3 },       // Три слайда на экранах от 1024px
                }}
                pagination={{
                  clickable: true, // Сделать пагинацию кликабельной
                }}
                modules={[Pagination]}  // Используем пагинацию
                data-aos="fade-left"
              >
                {/* Слайд 1 */}
                <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                  <div className="flex flex-col items-center">
                    <img
                      src={banan}
                      alt="Banan ta'mli"
                      className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px] mx-auto"
                    />
                    <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Banan ta'mli</p>
                    <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                      <a href="#modal">Buyurtma berish</a>
                    </button>
                  </div>
                </SwiperSlide>

                {/* Слайд 2 */}
                <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                  <div className="flex flex-col items-center">
                    <img
                      src={berries}
                      alt="Berries ta'mli"
                      className="rounded-full w-[230px] h-[230px] bg-blue-600 p-2"
                    />
                    <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Berries ta'mli</p>
                    <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                      <a href="#modal">Buyurtma berish</a>
                    </button>
                  </div>
                </SwiperSlide>

                {/* Слайд 3 */}
                <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                  <div className="flex flex-col items-center">
                    <img
                      src={mango}
                      alt="Mango ta'mli"
                      className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px] mx-auto"
                    />
                    <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Mango ta'mli</p>
                    <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                      <a href="#modal">Buyurtma berish</a>
                    </button>
                  </div>
                </SwiperSlide>

                {/* Слайд 4 */}
                <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                  <div className="flex flex-col items-center">
                    <img
                      src={black}
                      alt="Black ta'mli"
                      className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px]"
                    />
                    <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Black ta'mli</p>
                    <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                      <a href="#modal">Buyurtma berish</a>
                    </button>
                  </div>
                </SwiperSlide>

                {/* Слайд 5 */}
                <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                  <div className="flex flex-col items-center">
                    <img
                      src={rasberry}
                      alt="Raspberry ta'mli"
                      className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px]"
                    />
                    <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Raspberry ta'mli</p>
                    <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                      <a href="#modal">Buyurtma berish</a>
                    </button>
                  </div>
                </SwiperSlide>

                {/* Слайд 6 */}
                <SwiperSlide className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                  <div className="flex flex-col items-center">
                    <img
                      src={vanilla}
                      alt="Vanilla ta'mli"
                      className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px]"
                    />
                    <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Vanilla ta'mli</p>
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
  )
}

export default Topping;
