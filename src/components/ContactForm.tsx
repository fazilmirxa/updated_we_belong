import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    brandName: "",
    brandDescription: "",
    category: "",
    participationCity: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email is invalid.";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits.";

    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.brandName.trim()) newErrors.brandName = "Brand Name is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    if (!formData.participationCity.trim()) newErrors.participationCity = "Participation city is required.";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", formData);
      // Handle actual submission (API call etc.)
    }
  };

  const inputStyle =
    "w-full border-b border-gray-300 focus:border-black bg-white text-black placeholder-gray-400 focus:outline-none py-2";

  return (
    <section className="mt-[63px] py-16 px-4 sm:px-10 pt-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Get in touch with us – let’s collaborate and create something amazing together!
        </p>

        <form onSubmit={handleSubmit} className="border border-gray-300 p-6 sm:p-10 rounded-3xl shadow-md">
          <div className="space-y-6">
            {[
              { name: "name", placeholder: "Name*" },
              { name: "email", placeholder: "Email*" },
              { name: "phone", placeholder: "Phone*" },
              { name: "city", placeholder: "City of Residence*" },
              { name: "brandName", placeholder: "Brand Name*" },
              { name: "category", placeholder: "Product Category*" },
              { name: "participationCity", placeholder: "Which city do you want to participate in? *" },
            ].map(({ name, placeholder }) => (
              <div key={name}>
                <input
                  type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
                  name={name}
                  placeholder={placeholder}
                  value={(formData as any)[name]}
                  onChange={handleChange}
                  className={inputStyle}
                />
                {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
              </div>
            ))}

            <div>
              <textarea
                name="brandDescription"
                placeholder="Brand Description"
                rows={2}
                value={formData.brandDescription}
                onChange={handleChange}
                className={`${inputStyle} resize-none`}
              />
              {errors.brandDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.brandDescription}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full bg-[#0c125f] text-white text-lg font-semibold py-3 rounded-xl hover:bg-[#0a104b] transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
