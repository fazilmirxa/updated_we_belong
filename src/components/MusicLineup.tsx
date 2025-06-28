import { motion } from "framer-motion";

const artists = [
  {
    name: "Indo Tech",
    image:
      "https://www.thechristianbeat.org/wp-content/uploads/2023/02/NF2023-e1676577588380-1024x691.jpg",
  },
  {
    name: "Vachan Chinnappa",
    image:
      "https://repo.thewildcity.com/8898-v2.jpg",
  },
  {
    name: "DJ Aria",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOMueYDQSzD1wL601gQivExdOgfaN1UT1hg&s",
  },
  {
    name: "Nikhil Chinapa",
    image:
      "https://pbs.twimg.com/profile_images/1349687071871557634/R0DMXSXy_400x400.jpg",
  },
  {
    name: "Ivan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBgV7vJJyBW92v5DxjQf8rz5ZpWaKuv-T_Q&s",
  },
  {
    name: "Nikon",
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQEwnYx1t0atQA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1681003492263?e=2147483647&v=beta&t=KgS1HhK4SiRNic8b95tq3YklHmlQnlcrWuecJSqy8c8",
  },
];

const MusicLineup = () => {
  return (
    <div className="mt-20 mb-28 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0e1a4b] mb-4">
        End with MUSIC LINEUP
      </h2>
      <p className="text-gray-700 mb-12 text-base md:text-lg">Get ready to groove in the hills.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[60px] justify-items-center">
        {artists.map((artist, index) => (
          <motion.div
            key={index}
            className="relative group w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] p-4 rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(236, 107, 60, 0.1), rgba(243, 112, 33, 0.1), rgba(170, 35, 84, 0.1), rgba(62, 75, 211, 0.1), rgba(0, 168, 107, 0.1), rgba(212, 215, 0, 0.1))",
              backgroundSize: "400% 400%",
              animation: "smoothGradient 18s ease infinite",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-gradient-to-r from-pink-500 via-yellow-400 to-purple-500">
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 animate-pulse rounded-full" />
            </div>
            <p className="mt-4 text-[#0e1a4b] font-semibold text-sm md:text-base tracking-wide">
              {artist.name}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes smoothGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default MusicLineup;
