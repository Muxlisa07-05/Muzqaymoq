import React from "react";

const Footer = () => {
  return (
    <section id="kontakt" className="mt-24 bg-blue-400 font-[Poppins]">
      <div className="w-full px-4 sm:px-6 lg:px-[90px] py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Логотип и контакты */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center relative">
                <div className="absolute top-1">
                  <div className="w-5 h-5 bg-yellow-300 rounded-t-full"></div>
                  <div className="w-4 h-4 bg-yellow-300 rounded-t-full mt-1"></div>
                </div>
                <div className="absolute bottom-1 w-3 h-4 bg-orange-600 clip-triangle"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                <span className="text-orange-500">MUZ</span>
                <span className="text-blue-500">QAYMOQ.UZ</span>
              </h1>
            </div>

            <div className="flex flex-col gap-2 text-white">
              <p className="text-lg font-semibold">Kontaktlar</p>
              <p>Samarqand: +998 (91) 526-80-88</p>
              <p>Toshkent: +998 (90) 941-57-57</p>
            </div>
          </div>

          {/* Карта */}
          <div className="w-full lg:w-[400px]">
            <p className="font-semibold text-xl text-white mb-3">Manzil</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24006.019203606033!2d69.35022286499081!3d41.22716591448818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5eb804544a99%3A0xe582fa914cec7d52!2z0JjQudC6LdCe0YLQsCwg0KLQsNGI0LrQtdC90YLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1744692075782!5m2!1sru!2s"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
