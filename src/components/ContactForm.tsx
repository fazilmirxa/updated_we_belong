import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add actual submission logic here (API call, validation, etc.)
  };

  return (
    <section className="mt-[63px] py-16 px-4 sm:px-10 pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Get in touch with us – let’s collaborate and create something amazing together!
        </p>

        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 p-6 sm:p-10  shadow-md rounded-bl-[30px] rounded-br-[30px] rounded-tl-none rounded-tr-none"
        >
          <div className="space-y-6">
            <input
className="w-full border-b border-gray-300 focus:border-black bg-white text-black placeholder-gray-400 focus:outline-none py-2"
type="text"
              name="name"
              placeholder="Name*"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <input
className="w-full border-b border-gray-300 focus:border-black bg-white text-black placeholder-gray-400 focus:outline-none py-2"
type="email"
              name="email"
              placeholder="Email*"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
className="w-full border-b border-gray-300 focus:border-black bg-white text-black placeholder-gray-400 focus:outline-none py-2"
type="tel"
              name="phone"
              placeholder="Phone*"
              required
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
  className="w-full border-b border-gray-300 focus:border-black bg-white text-black placeholder-gray-400 focus:outline-none py-2"
  name="message"
  placeholder="Your message..."
  rows={2} 
  value={formData.message}
  onChange={handleChange}
/>
           
            
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-[#0c125f] text-white text-lg font-semibold py-3 rounded-bl-[25px] rounded-br-[25px] rounded-tl-none rounded-tr-none hover:bg-[#0a104b] transition"

          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
