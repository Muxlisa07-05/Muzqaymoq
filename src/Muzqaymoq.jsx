import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Основные стили
import "swiper/css/pagination"; // Если нужна пагинация
import 'animate.css';
import { Pagination } from "swiper/modules"; // Или другие модули
import milk from './img/Milc.webp'
import banan from './img/banan.webp'
import Caramel from './img/Caramel.webp'
import dark_choqo from './img/dark_choqo.webp'
import kiwi from './img/Kiwi.webp'
import mango from './img/mango.webp'
import nutella from './img/Nutella.webp'
import raffaello from './img/raffaello.webp'
import strawberry from './img/strawberry.webp'
import tarvuz from './img/Tarvuz.webp'

const Muzqaymoq = () => {
  return (
    <>
      <section>
        <div className="font-[Poppins] mt-[100px]">
          <div className="w-full px-4 md:px-[90px]">
            <h2 className="text-[30px] font-semibold">Muzqaymoq aralashmalari</h2>
            <div className="mt-[30px]">
              <Swiper
                spaceBetween={30}
                slidesPerView={3}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {[milk, banan, Caramel, dark_choqo, kiwi, mango, nutella, raffaello, strawberry, tarvuz].map((item, index) => (
                  <SwiperSlide key={index} className="bg-blue-400 py-[50px] flex flex-col items-center rounded-xl">
                    <div className="flex flex-col items-center">
                      <img
                        src={item}
                        alt=""
                        className="rounded-full bg-blue-600 p-2 w-[230px] h-[230px] mb-4"
                      />
                      <p className="mt-[10px] text-[24px] font-semibold text-[#FFFF]">Ta'mli</p>
                      <button className="bg-blue-600 mt-4 px-4 py-2 rounded text-white hover:bg-blue-700 transition">
                        <a href="#modal">Buyurtma berish</a>
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Muzqaymoq;
