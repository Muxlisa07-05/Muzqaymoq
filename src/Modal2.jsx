import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const OrderModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Ism majburiy";
    }
    if (!phone.trim()) {
      newErrors.phone = "Telefon raqam majburiy";
    } else if (!/^\+?\d{9,14}$/.test(phone)) {
      newErrors.phone = "To'g'ri telefon raqam kiriting";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Buyurtma:", { name, phone });
    toast.success("Buyurtma muvaffaqiyatli yuborildi!", {
      position: "top-center",
      autoClose: 3000,
    });

    setName("");
    setPhone("");
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-sky-300 p-8 rounded-xl w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl font-bold text-black"
        >
          ×
        </button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Ism"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded w-full"
          />
          {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}

          <input
            type="text"
            placeholder="Telefon nomer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-2 rounded w-full"
          />
          {errors.phone && <div className="text-red-600 text-sm">{errors.phone}</div>}

          <button
            type="submit"
            className="bg-cyan-800 text-white py-2 rounded hover:bg-cyan-900"
          >
            Buyurtma berish
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default OrderModal;
