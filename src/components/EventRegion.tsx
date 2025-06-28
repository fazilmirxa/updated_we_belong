import { motion } from "framer-motion";

const events = [
  {
    name: "AMMATHI KODAVA SOMAJ FEST",
    format: "Cultural fest",
    audience: "1500–2000",
    time: "Oct-Dec",
    ticketed: "NA",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    name: "KAKADA NAMME",
    format: "Cultural Gathering",
    audience: "~800",
    time: "July",
    ticketed: "NA",
    color: "bg-gradient-to-r from-green-400 to-lime-500",
  },
  {
    name: "COORG SHANDY",
    format: "Local Market",
    audience: "2000+",
    time: "December",
    ticketed: "NA",
    color: "bg-gradient-to-r from-orange-400 to-yellow-500",
  },
  {
    name: "BAMBOO CLUB FLEA",
    format: "Flea Market",
    audience: "In-house",
    time: "September",
    ticketed: "NA",
    color: "bg-gradient-to-r from-pink-500 to-red-500",
  },
];

export default function EventsComponent() {
  return (
    <div className="px-4  md:px-20 text-[#0e1a4b]">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Already Exists?
      </motion.h2>

      <motion.p
        className="text-center text-xl font-semibold uppercase tracking-wide mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Other Events In The Region
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event, index) => (
          <motion.div
            key={event.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-[250px] md:w-[220px]"
          >
            <div className={`${event.color} text-white rounded-2xl h-full`}>
              <div className="px-6 pt-6 pb-4 md:min-h-[230px] flex flex-col justify-start h-full">
                <h3 className="text-lg font-bold tracking-wide leading-snug">
                  {event.name}
                </h3>
                <ul className="text-sm space-y-1 mt-2">
                  <li>
                    <strong>Format:</strong> {event.format}
                  </li>
                  <li>
                    <strong>Audience:</strong> {event.audience}
                  </li>
                  <li>
                    <strong>Time:</strong> {event.time}
                  </li>
                  <li>
                    <strong>Ticketed:</strong> {event.ticketed}
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="mt-3 max-w-3xl mx-auto text-base md:text-sm text-gray-700">
          Among the many cultural and flea-style events in the region, we stand
          out for our depth and intention!
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8 text-sm md:text-base">
          {[
            "#f97316",
            "#db2777",
            "#8b5cf6",
            "#14b8a6",
            "#06b6d4",
            "#22c55e",
          ].map((color, i) => (
            <motion.span
              key={i}
              className="px-4 py-2 rounded-[10px] font-semibold border shadow-sm"
              style={{ borderColor: color, color: color }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {[
                "FLEA MARKET",
                "MUSIC FESTIVAL",
                "CULTURAL FEST",
                "WORKSHOPS",
                "WELLNESS ZONES",
                "KIDS' ACTIVITIES",
              ][i]}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
