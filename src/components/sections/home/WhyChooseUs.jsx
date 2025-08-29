import React from "react";

const chooseData = [
  {
    id: "01",
    title: "Areas of Expertise",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
    img: "/assets/images/serviceimg1.svg",
  },
  {
    id: "02",
    title: "Objective Advice",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
    img: "/assets/images/serviceimg2.svg",
  },
  {
    id: "03",
    title: "Time & Efficiency",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc",
    img: "/assets/images/choose2.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-3 py-5 md:px-16 xl:px-24 md:py-12 ">
      <h2 className="text-center text-2xl md:text-4xl font-Onest font-medium mb-10">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-6">
        {chooseData.map((item) => (
          <div
            className="relative group rounded-2xl overflow-hidden h-96 cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-[#114A43] transition-all duration-500"></div>

            
            <span className="absolute top-4 left-4 bg-[#114A43] text-white text-sm w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-500 group-hover:top-[40%] group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:bg-white group-hover:text-[#114A43]">
              {item.id}
            </span>

            {/* Text  */}
            <div className="absolute bottom-6 left-6 right-6 text-white transition-opacity duration-500 group-hover:opacity-0">
              <h5 className="text-lg md:text-xl font-Onest font-medium">
                {item.title}
              </h5>
              <p className="text-sm font-Inter font-normal mt-2">{item.desc}</p>
            </div>

            {/* See More */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <a
                href="#"
                className="text-white underline text-sm md:text-base"
              >
                see more...
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
