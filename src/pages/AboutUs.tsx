import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { aboutUsImg, savitha } from "../assets";
import AudienceComponent from "../components/AudienceComponent"

// Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AboutUs = () => {
  return (
    <div
      className="min-h-screen pt-4"
      style={{
        background:
          "radial-gradient(circle at top left, rgba(236, 107, 60, 0.1), rgba(243, 112, 33, 0.1), rgba(170, 35, 84, 0.1), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.1), rgba(212, 215, 0, 0.1))",
        backgroundSize: "400% 400%",
        animation: "smoothGradient 18s ease infinite",
      }}
    >
      <div className="px-4 sm:px-10 py-10 max-w-7xl mx-auto">
        {/* Our Story Section */}
        <section className="px-4 sm:px-6 md:px-16 py-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black text-center mb-10"
          >
            Our Story
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-3xl mx-auto mb-10"
          >
            <img
              src={aboutUsImg}
              alt="Our Story"
              className="rounded-[25px] w-full object-cover shadow-md"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-base leading-relaxed space-y-5 max-w-4xl mx-auto text-center md:text-justify"
          >
            <p>
              We Belong was envisioned as more than an event company. It is a response
              to a growing desire for spaces that honour identity, encourage community
              and celebrate creative expression. Founded by Savitha Carriappa, after
              years of working across diverse, multicultural landscapes in India and
              the UAE, We Belong is rooted in the belief that connection thrives where
              culture is respected.
            </p>
            <p>
              The Coorg chapter marks the beginning of this journey. A gathering that
              brings together Kodava heritage, contemporary artistry and conscious
              experiences. With music stages, artisan markets, cultural showcases,
              wellness zones and hands-on workshops, the festival blends the old and
              the new in a way that feels personal, grounded and open to all.
            </p>
            <p>
              At its heart, We Belong is not just about what happens during an event.
              It's about what stays with you after – the memories, the people, the sense
              of having been part of something meaningful.
            </p>
          </motion.div>
        </section>

        <AudienceComponent/>


        {/* Meet the Team */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a4b]">
            Meet the Team
          </h2>
        </motion.div>

        {/* Founder Note (Custom Design) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-10  p-6 md:p-10 rounded-2xl border-[#0e1a4b]  mb-16 "
        >
          {/* Left: Image Card */}
          <div className="w-full md:w-[320px] bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center ">
            <img
              src={savitha}
              alt="Savitha Carriappa"
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="w-full bg-[#0e1a4b] text-white text-lg font-bold text-center py-3">
              Savitha Carriappa
            </div>
            <div className="text-center py-3 text-sm text-gray-700 font-medium">
              Founder & CEO, We Belong
            </div>
          </div>

          {/* Right: Message */}
          <div className="md:w-3/5 text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#0e1a4b] mb-4">
              A note from the founder –
            </h4>
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              We Belong was born from a simple belief – that culture connects us
              more deeply than anything else. In every beat of music, every thread
              of craft and every shared story, there's an invitation to belong.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-4 text-justify">
              Coorg, with its soul-stirring heritage and quiet strength, felt like
              the right place to begin. This isn't just an event. It's a gathering
              of voices, memories and rhythms that remind us who we are. I hope
              this becomes not just a celebration you attend, but a space you feel
              part of.
            </p>
          </div>
        </motion.div>

        {/* Team Grid (Optional placeholders or dynamic) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center mb-4"
        >
         
        </motion.div>
      </div>

      {/* Gradient Animation Keyframes */}
      <style>
        {`
          @keyframes smoothGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
