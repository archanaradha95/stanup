import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";


const HowItWorks = () => {
  const steps = [
    {
      icon: <FiPhoneCall size={40} />,
      title: "Call Our Contact",
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, usa li sam vocabular.",
    },
    {
      icon: <FiFileText size={40} />,
      title: "Tell us What You Need",
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, usa li sam vocabular.",
    },
    {
      icon: <FiHeadphones size={40} />,
      title: "Discussion with Us",
      desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, usa li sam vocabular.",
    },
  ];

  return (
    <section className="px-3 py-5 md:py-16 bg-gray-50">
      <h2 className="text-center text-base md:text-2xl lg:text-3xl font-Onest font-medium mb-6 md:mb-12">
        How it Work ?
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-15 px-6 relative">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative text-center max-w-sm "
          >
            {/*  icon */}
            <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full border border-gray-400 mb-3 md:mb-6 bg-white relative z-10">
              {step.icon}
            </div>

             {/* line */}
            {i !== steps.length - 1 && (
              <div className="hidden md:flex absolute top-10 left-1/2 w-full h-[2px] bg-gray-300 z-0"></div>
            )}


{/* title & desc */}
            <h3 className="text-lg font-medium font-Onest text-green-900">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm font-Inter font-normal mt-3">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

