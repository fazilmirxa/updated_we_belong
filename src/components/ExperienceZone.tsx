import { motion, useInView } from "framer-motion";
import {
  FaMusic,
  FaTheaterMasks,
  FaChild,
  FaStore,
  FaUtensils,
  FaBookOpen,
} from "react-icons/fa";
import { useRef } from "react";

const experienceZones = [
  {
    title: "Music Stage",
    description:
      "Live performances across genres, from Kodava rhythms to jazz, indie, and fusion. Featuring: DJ Aria, Nikhil Chinappa, Vachan Chinappa, Indie Tech & Ivan Nikian.",
    icon: <FaMusic />,
  },
  {
    title: "Cultural Performances",
    description:
      "Live showcases of Kodava dance and music including Bolakatt, Ummattat, Kolat, and more.",
    icon: <FaTheaterMasks />,
  },
  {
    title: "Children’s Corner",
    description:
      "Eco-friendly creative play: clay modelling, mandala painting, origami, and workshops.",
    icon: <FaChild />,
  },
  {
    title: "Crafts & Artisans Market",
    description:
      "Textiles, heritage jewellery, traditional weapons, and handwork, curated with local historians and Mallaks.",
    icon: <FaStore />,
  },
  {
    title: "Food Festival",
    description:
      "From cherished Kodava recipes to global plates, we bring together a culinary journey rooted in tradition and open to the world.",
    icon: <FaUtensils />,
  },
  {
    title: "Heritage Walk",
    description:
      "Guided explorations of Coorg’s architecture and stories, featuring author meetups and storytelling zones.",
    icon: <FaBookOpen />,
  },
];

const leftIndexes = [0, 2, 4];

const ExperienceZone = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="w-full px-6 py-16" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0e1a4b]">
          The Experience Zones
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {experienceZones.map((zone, idx) => {
            const isFromLeft = leftIndexes.includes(idx);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: isFromLeft ? -80 : 80 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                }}
                className="bg-white/80 border border-gray-200 rounded-xl p-6 flex gap-4 items-start shadow-md hover:shadow-xl transition-transform duration-500"
              >
                <div className="text-3xl text-[#0e1a4b] mt-1">{zone.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#0e1a4b]">
                    {zone.title}
                  </h3>
                  <p className="text-sm text-[#1f2a59] leading-relaxed">
                    {zone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceZone;
