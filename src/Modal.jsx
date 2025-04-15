import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Modal = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) {
      toast.warn("Iltimos, ismingizni kiriting!");
      return;
    }

    if (!phone.trim()) {
      toast.warn("Iltimos, nomeringizni kiriting!");
      return;
    }

    const botToken = '7969110279:AAHADqnOsK7oBODfBGFejuloYYfTVIog2tA';
    const chatId = 7339019842;
    const message = `Yangi foydalanuvchi:\n\n👤 Ismi: ${name}\n📞 Telefon: ${phone}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      });

      if (response.ok) {
        toast.success("Ma'lumotlar yuborildi ✅");
        setName("");
        setPhone("");
      } else {
        toast.error("Xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error("Tarmoqda muammo bor!");
    }
  };

  return (
    <section id="modal" className="mt-24 px-4 sm:px-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="font-[Poppins] max-w-xl w-full mx-auto bg-blue-400 rounded-xl p-6 sm:p-10">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ism"
            className="w-full p-3 rounded border bg-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <IMaskInput
            mask="+998 (00) 000-00-00"
            value={phone}
            onAccept={(value) => setPhone(value)}
            placeholder="+998 (__) ___-__-__"
            className="w-full p-3 rounded border bg-white"
          />
          <button
            className="bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition"
            onClick={handleSubmit}
            disabled={!name.trim()}
          >
            Buyurtma berish
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
