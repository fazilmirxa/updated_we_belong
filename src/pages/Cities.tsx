import { eventBg } from "../assets";
import DetailsCard from "../components/DetailsCard";
const Cities = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mt-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#0B0C3D] mb-10">
          COORG
        </h1>

        {/* Image */}
        <div className="overflow-hidden">
          <img
              src={eventBg}
            alt="Coorg Festival"
            className="w-full h-auto rounded-b-[40px] object-cover"
          />
        </div>

        {/* Event Info + Button */}
        <div className="mt-8">
          <p className="text-lg font-bold text-black">October 11–12, 2025</p>
          <p className="text-lg font-bold text-black mb-4">
            Capitol Village, Coorg
          </p>
          <button className="bg-[#0B0C3D] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#1a1b5c] transition">
            Book Now
          </button>
        </div>

        {/* Paragraphs */}
        <div className="mt-8 space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            We Belong is a two-day cultural festival set in the lush estates of
            Coorg, celebrating community, creativity, and culture through music,
            art, food, and experiences.
          </p>
          <p>
            Nestled in the lush hills of Madikeri, the first edition of We
            Belong is a celebration of everything Kodagu represents — bold
            traditions, quiet strength, and music that rises with the mist. Over
            two immersive days, you all move through performances, rituals,
            marketplaces and moments that open the senses and settle the
            spirit.
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center mt-10 flex flex-row gap-10">
      <DetailsCard
        image={eventBg}
        title="Art & Craft"
        items={[
          "Resin Art",
          "Pottery (Wheel Throwing)",
          "Natural Dye & Fabric Art",
        ]}
        color="#8B572A" // optional
      />
      <DetailsCard
        image={eventBg}
        title="Therapeutic Experiences"
        items={[
          "Sound Healing",
          "Breathwork",
          "Nature Journaling",
        ]}
        color="#384E24" // optional
      />
      </div>
    </div>
  );
};

export default Cities;