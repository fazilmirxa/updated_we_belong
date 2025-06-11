import EventCard from "../components/EventCard";
import { imageCollageCore, savitha } from "../assets";
const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen pt-20">
      <div className="px-4 sm:px-10 py-10 max-w-7xl mx-auto">
        {/* Our Story Section */}
        <div className="mb-16">
          <div className="relative">
            {/* Heading + image row */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <h2 className="text-6xl text-gray-700 font-semibold md:w-1/2 mb-6 md:mb-0">
                Our Story
              </h2>
              <div className="md:w-1/2 md:pl-10">
                <img
                  src={imageCollageCore}
                  alt="Our Story"
                  className="rounded-2xl shadow-xl w-full object-cover"
                />
              </div>
            </div>

            {/* Paragraph text flows underneath */}
            <div className="text-gray-700 space-y-4">
              <p>
                We Belong was envisioned as more than an event company. It is a
                response to a growing desire for spaces that honour identity,
                encourage community and celebrate creative expression. Founded
                by Savitha Carriappa, after years of working across diverse,
                multicultural landscapes in India and the UAE, We Belong is
                rooted in the belief that connection thrives where culture is
                respected.
              </p>
              <p>
                The Coorg chapter marks the beginning of this journey. A
                gathering that brings together Kodava heritage, contemporary
                artistry and conscious experiences. With music stages, artisan
                markets, cultural showcases, wellness zones and hands-on
                workshops, the festival blends the old and the new in a way that
                feels personal, grounded and open to all.
              </p>
              <p>
                At its heart, We Belong is not just about what happens during an
                event. It's about what stays with you after – the memories, the
                people, the sense of having been part of something meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* Meet the Team Button */}
        <div className="text-center mb-12">
          <button className="border border-gray-300 px-6 py-3 rounded-md font-semibold text-blue-900 hover:bg-gray-100 transition">
            Meet the Team
          </button>
        </div>

        {/* Founder Note Section */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          {/* <div className="md:w-1/2">
            <img
              src="/savitha-cariappa.jpg"
              alt="Savitha Carriappa"
              className="rounded-md object-cover h-80 w-full"
            />
            <div className="bg-blue-900 text-white text-center py-2 text-sm font-semibold mt-1">
              SAVITHA CARIAPPA
            </div>
            <p className="text-center text-sm text-gray-500 mt-1">Founder & CEO, We Belong</p>
          </div> */}
          <EventCard
            image={savitha}
            title="Savitha Carriappa"
            items={["Founder & CEO, We Belong"]}
          />
          <div className="md:w-1/2">
            <h4 className="font-medium text-gray-900 mb-2">
              A note from the founder -
            </h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              We Belong was born from a simple belief – that culture connects us
              more deeply than anything else. In every beat of music, every
              thread of craft and every shared story, there’s an invitation to
              belong.
              <br />
              <br />
              Coorg, with its soul-stirring heritage and quiet strength, felt
              like the right place to begin. This isn’t just an event. It’s a
              gathering of voices, memories and rhythms that remind us who we
              are. I hope this becomes not just a celebration you attend, but a
              space you feel part of.
            </p>
          </div>
        </div>

        {/* Team Members Section using EventCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <EventCard image="" title="Lorem Ipsum" items={["Co Founder"]} />
          <EventCard image="" title="Lorem Ipsum" items={["Co Founder"]} />
          <EventCard image="" title="Lorem Ipsum" items={["Mentor Advisor"]} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
