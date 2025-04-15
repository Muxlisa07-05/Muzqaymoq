import React from "react";
import { FaStar } from "react-icons/fa";
import comma from "./img/comma.webp";
import sutli from './img/Milc.webp';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Reyting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // длительность по умолчанию
      once: true // чтобы анимация срабатывала только один раз
    });
  }, []);

  return (
    <>
      <section>
        <div className="pt-[100px] font-[Poppins]">
          <div className="w-full px-4 sm:px-[90px]">
            <div>
              <h1 className="text-center uppercase text-[40px] font-semibold">
                Bizlarga eng asosiysi
                <span className="text-blue-600">maxsulotning sifati</span>
              </h1>
              <div className="mt-[50px] flex flex-col space-y-10 sm:space-y-0 sm:flex-row sm:flex-wrap sm:justify-between">
                <div className="bg-[#FFFF] shadow w-full sm:w-[400px] p-[25px] rounded-[15px]" data-aos="fade-right">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[15px]">
                      <h3 className="text-[25px] font-semibold">John Devson</h3>
                      <div className="flex gap-[10px] text-[20px]">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-gray-300" />
                      </div>
                    </div>
                    <img src={comma} alt="" className="w-[60px]" />
                  </div>
                  <p className="mt-5 font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque exercitationem soluta aliquam et tempora enim sequi
                    amet, corporis vitae sapiente.
                  </p>
                </div>

                <div className="w-full sm:w-[300px] sm:mx-4 mt-4 sm:mt-0">
                  <img src={sutli} alt="" className="w-full" />
                </div>

                <div className="bg-[#FFFF] shadow w-full sm:w-[400px] p-[25px] rounded-[15px]" data-aos="fade-left">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[15px]">
                      <h3 className="text-[25px] font-semibold">John Devson</h3>
                      <div className="flex gap-[10px] text-[20px]">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-gray-300" />
                      </div>
                    </div>
                    <img src={comma} alt="" className="w-[60px]" />
                  </div>
                  <p className="mt-5 font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque exercitationem soluta aliquam et tempora enim sequi
                    amet, corporis vitae sapiente.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFFF] shadow w-full sm:w-[400px] p-[25px] rounded-[15px] mx-auto mt-[50px]" data-aos="fade-up">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-[15px]">
                    <h3 className="text-[25px] font-semibold">John Devson</h3>
                    <div className="flex gap-[10px] text-[20px]">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-gray-300" />
                    </div>
                  </div>
                  <img src={comma} alt="" className="w-[60px]" />
                </div>
                <p className="mt-5 font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque exercitationem soluta aliquam et tempora enim sequi
                  amet, corporis vitae sapiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reyting;
