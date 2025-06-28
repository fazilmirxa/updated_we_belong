import { motion } from "framer-motion";

const FleaMarketSection = () => {
  const fleaImages = [
    "https://img.freepik.com/premium-photo/bustling-outdoor-market-with-people-browsing-stalls-antiques-vintage-goods_14117-179139.jpg",
    "https://thumbs.dreamstime.com/b/couple-shopping-sunny-outdoor-flea-market-generative-ai-358359338.jpg",
    "https://lp-cms-production.imgix.net/2024-11/shutterstock1263811294.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop"
  ];

  return (
    <section className="relative   py-10 px-6 overflow-hidden">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-12 text-[#0e1a4b] tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        And goes by the Flea Market
      </motion.h2>
      

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {fleaImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-2xl group hover:scale-105 transition-transform duration-700"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={img} alt={`Flea Market ${idx + 1}`} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-base text-gray-700 leading-relaxed mb-6 text-justify sm:text-center">
          Blending in with the taste of local and homegrown to brands and global.
          <br className="hidden md:block" />
          Find yourself lost in a flea market with <span className="font-semibold text-gray-700">cuisines</span>, <span className="font-semibold text-gray-700">clothing</span> and <span className="font-semibold text-gray-700">drinks</span> for good times.
        </p>
      </motion.div>
    </section>
  );
};

export default FleaMarketSection;
