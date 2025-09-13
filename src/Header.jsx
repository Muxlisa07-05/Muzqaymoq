import React from "react";

const Header = () => {
  return (
    <>
      <section className="py-4">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[90px]">
          <div className="flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4">
{/*Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center relative">
                <div className="absolute top-1">
                  <div className="w-5 h-5 bg-yellow-300 rounded-t-full"></div>
                  <div className="w-4 h-4 bg-yellow-300 rounded-t-full mt-1"></div>
                </div>
                <div className="absolute bottom-1 w-3 h-4 bg-orange-600 clip-triangle"></div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-[Poppins] text-center sm:text-left">
                <span className="text-orange-500">MUZ</span>
                <span className="text-blue-500">QAYMOQ.UZ</span>
              </h1>
            </div>

            {/* Contact_button */}
            <button className="p-2 px-4 rounded bg-blue-500 text-white text-sm sm:text-base hover:bg-blue-600 transition">
              <a href="#kontakt">Kontaktlar</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
