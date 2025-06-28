import { motion } from "framer-motion";

const audienceData = [
  {
    title: "Urban Escapists",
    subtitle: "From Bangalore, Mysore, Mangalore, Chennai",
    age: "Age: 22–40",
    points: [
      "Young creatives, founders, freelancers, professionals",
      "Love weekends with music, art, food, and fun",
      "Choose experiences that are stylish and mindful",
      "Active on Instagram, Spotify, and social apps",
      "Perfect for fashion, alcohol, travel, digital brands",
    ],
  },
  {
    title: "Estate Owners & Local Influencers",
    subtitle: "",
    age: "Age: 28–80",
    points: [
      "Locals with heritage and high spending power",
      "Support art, economy, and cultural legacy",
      "Shape opinions and community buying choices",
      "Often host friends from other major cities",
      "Best fit for luxury, real estate, lifestyle brands",
    ],
  },
  {
    title: "Cultural Tourists & October Travelers",
    subtitle: "",
    age: "Age: 25–45",
    points: [
      "Visit Coorg on holidays, long weekends, fests",
      "Discover WeBelong as a special event hub",
      "Open to trying food, art, and local finds",
      "Plan their trips around vibes and markets",
      "Great for FMCG, crafts, cuisine, sampling ideas",
    ],
  },
];

const OurAudience = () => {
  return (
    <section className="px-4 sm:px-10 py-16 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#0e1a4b]"
      >
        Our Audience
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
        {/* Left Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-center"
        >
          <img
            src="https://localmedia.org/wp-content/uploads/2021/06/events-1.png"
            alt="Audience"
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

        {/* Right Text Blocks */}
        <div className="flex flex-col gap-10 w-full md:w-1/2 justify-center">
          {audienceData.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-l-2 border-gray-400 pl-6"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 whitespace-nowrap text-[#0e1a4b]">
                {group.title}
              </h3>
              {group.subtitle && (
                <p className="text-lg font-medium text-gray-700 mb-1">
                  {group.subtitle}
                </p>
              )}
              <p className="text-lg font-medium text-gray-500 mb-2">
                {group.age}
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-base text-gray-700">
                {group.points.map((point, idx) => (
                  <li
                    key={idx}
                    className={`${idx === 2 ? "whitespace-nowrap" : ""}`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAudience;
