import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const content = [
  {
    title: "OUR MISSION",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed non massa nec nibh laoreet gravida. Lorem ipsum dolor sit amet consectetur. Sed non massa nec nibh laoreet gravida.",
    img: "https://cdn-icons-png.flaticon.com/512/1995/1995537.png",
  },
  {
    title: "OUR VISION",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed non massa nec nibh laoreet gravida. Lorem ipsum dolor sit amet consectetur. Sed non massa nec nibh laoreet gravida.",
    img: "https://cdn-icons-png.flaticon.com/512/1710/1710759.png",
  },
  {
    title: "OUR VALUES",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed non massa nec nibh laoreet gravida. Lorem ipsum dolor sit amet consectetur. Sed non massa nec nibh laoreet gravida.",
    img: "https://cdn-icons-png.flaticon.com/512/2907/2907253.png",
  },
];

const animatedBgStyle = {
  background:
    "radial-gradient(circle at top left, rgba(236, 107, 60, 0.1), rgba(243, 112, 33, 0.1), rgba(170, 35, 84, 0.1), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.1), rgba(212, 215, 0, 0.1))",
  backgroundSize: "400% 400%",
  animation: "smoothGradient 8s ease infinite",
  borderRadius: "20px",
};

const ZigZagCard = ({ title, description, img, reverse }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [hovered, setHovered] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full">
      {reverse ? (
        <>
          <div
            className="hidden md:flex items-center justify-center p-10"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.img
              src={img}
              alt={title}
              className="w-32 h-32 object-contain"
              animate={
                hovered
                  ? { scale: [1, 1.1, 1], rotate: [0, 8, -8, 0] }
                  : { scale: 1, rotate: 0 }
              }
              transition={
                hovered
                  ? {
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }
                  : { duration: 0.3 }
              }
            />
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={animatedBgStyle}
            className="text-white p-8 flex flex-col justify-center shadow-xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h2 className="text-2xl font-bold text-[#0e1a4b]">{title}</h2>
            <p className="text-gray-700 mt-2">{description}</p>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={animatedBgStyle}
            className="text-white p-8 flex flex-col justify-center shadow-xl"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <h2 className="text-2xl font-bold text-[#0e1a4b]">{title}</h2>
            <p className="text-gray-700 mt-2">{description}</p>
          </motion.div>
          <div
            className="hidden md:flex items-center justify-center p-10"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <motion.img
              src={img}
              alt={title}
              className="w-32 h-32 object-contain"
              animate={
                hovered
                  ? { scale: [1, 1.1, 1], rotate: [0, 8, -8, 0] }
                  : { scale: 1, rotate: 0 }
              }
              transition={
                hovered
                  ? {
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }
                  : { duration: 0.3 }
              }
            />
          </div>
        </>
      )}
    </div>
  );
};

const ZigZagMissionSection = () => {
  return (
    <>
      {/* Custom Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes smoothGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        {content.map((item, index) => (
          <ZigZagCard key={index} {...item} reverse={index % 2 !== 0} />
        ))}
      </section>
    </>
  );
};

export default ZigZagMissionSection;
