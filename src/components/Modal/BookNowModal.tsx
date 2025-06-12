import React, { useState } from "react";

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPay: (data: BookingData) => void;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  city: string;
}

const BookNowModal: React.FC<BookNowModalProps> = ({ isOpen, onClose, onPay }) => {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [errors, setErrors] = useState<{ [key in keyof BookingData]?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors: { [key in keyof BookingData]?: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits.";

    if (!formData.city.trim()) newErrors.city = "City is required.";

    return newErrors;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onPay(formData);
      onClose();
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
      });
      setErrors({});
    }
  };
  
  if (!isOpen) return null;

  const inputStyle =
    "w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0c125f]";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-800"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0c125f] mb-6">
          Book Your Spot
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {(["name", "email", "phone", "city"] as (keyof BookingData)[]).map((field) => (
            <div key={field}>
              <input
                type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                name={field}
                placeholder={
                  field === "name"
                    ? "Your Name*"
                    : field === "email"
                    ? "Email*"
                    : field === "phone"
                    ? "Phone*"
                    : "Your City*"
                }
                value={formData[field]}
                onChange={handleChange}
                className={inputStyle}
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0c125f] text-white text-lg font-semibold py-3 rounded-xl hover:bg-[#0a104b] transition"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowModal;
