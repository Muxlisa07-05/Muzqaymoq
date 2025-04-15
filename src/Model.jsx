import React, { useEffect } from 'react';
import aparat2 from './img/aparat2.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Model = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // длительность по умолчанию
      once: true, // чтобы анимация срабатывала только один раз
    });
  }, []);

  return (
    <>
      <section>
        <div className="font-[Poppins] mt-[100px]">
          <div className="w-full px-4 md:px-[90px]">
            <div className="bg-blue-400 rounded-[100px]">
              <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-[100px] py-[50px]">
                <img
                  src={aparat2}
                  alt=""
                  data-aos="fade-right"
                  className="w-full md:w-[50%] mb-4 md:mb-0"
                />
                <div className="flex flex-col text-center md:text-left" data-aos="fade-left">
                  <h3 className="text-[#FFFF] font-bold text-[32px] sm:text-[40px]">MODEL BL-240 <br /> XUSUSIYATLARI</h3>
                  <p className="text-[#000] font-semibold text-[20px] sm:text-[30px]">
                    Ishlash quvvati - 40-50/soat <br />
                    Dvigatel quvvati - 4,0 kVt <br />
                    Kuchlanish - 380 - 50Hz - 3 faza
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Model;
