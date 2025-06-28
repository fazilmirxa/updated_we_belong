import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const fadeInZoom = {
    hidden: { opacity: 0, transform: "scale(0.96) translateY(30px)" },
    visible: {
      opacity: 1,
      transform: "scale(1) translateY(2px)",
      transition: {
        duration: 0.6, // 👈 Change this value
        ease: [0.22, 0, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      className="relative py-16 px-4 sm:px-10 pt-20 min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(236, 107, 60, 0.1), rgba(243, 112, 33, 0.1), rgba(170, 35, 84, 0.1), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.1), rgba(212, 215, 0, 0.1))",
        backgroundSize: "400% 400%",
        animation: "smoothGradient 18s ease infinite",
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-gray-900 tracking-tight mb-3">
          Contact Us
        </h2>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          We'd love to hear from you. Let's build something magical.
        </p>
      </div>

      <motion.div
       variants={fadeInZoom}
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 w-full max-w-md bg-white border border-gray-200 p-6 sm:p-8 shadow-2xl rounded-[32px] transition-all hover:shadow-[0_10px_50px_rgba(0,0,0,0.15)] backdrop-blur-md"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { name: "name", type: "text", placeholder: "Name*" },
            { name: "email", type: "email", placeholder: "Email*" },
            { name: "phone", type: "tel", placeholder: "Phone*" },
          ].map((field) => (
            <motion.input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              whileFocus={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full border-b border-gray-300 focus:border-black bg-transparent text-black placeholder-gray-500 focus:outline-none py-2 text-sm"
            />
          ))}

          <motion.textarea
            name="message"
            placeholder="Your message..."
            rows={1}
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full border-b border-gray-300 focus:border-black bg-transparent text-black placeholder-gray-500 focus:outline-none py-2 text-sm"
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              
              backgroundColor: "#0e1a4b",
              color: "#ffffff",
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="w-full mt-4 py-4 px-6 bg-white border border-[#0e1a4b] rounded-[15px] text-[#0e1a4b] text-lg font-semibold"

          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      <style>
        {`
          @keyframes smoothGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default ContactForm;
