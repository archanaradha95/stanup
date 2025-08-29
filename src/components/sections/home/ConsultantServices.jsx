import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { LuNotepadText } from "react-icons/lu";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { LiaDollySolid } from "react-icons/lia";
import { IoReceiptOutline } from "react-icons/io5";






const services = [
  {
    id: 1,
    title: "Debt Management",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: <LuNotepadText className="h-6 w-6"/>,
  },
  {
    id: 2,
    title: "Financial Planning",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: <LiaFileInvoiceDollarSolid className="h-6 w-6"/>
,
  },
  {
    id: 3,
    title: "Retirement Planning",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: <LiaDollySolid className="h-6 w-6"/>
,
  },
  {
    id: 4,
    title: "Debt Management",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
    icon: <IoReceiptOutline className="h-6 w-6"/>
,
  },
];

const stats = [
  {
    id: 1,
    value: "20+",
    title: "Years of Experience",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es.",
    
  },
  {
    id: 2,
    value: "4.8/5.0",
    title: "Rate our Platform",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es.",
    
  },
  {
    id: 3,
    value: "50K",
    title: "Happy Client",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es.",
    
  },
  {
    id: 4,
    value: "45",
    title: "Award Winners",
    desc: "Li Europan lingues es membres del sam familie. Lor separat existentie es.",
    
  },
];

const ConsultantServices = () => {
  return (
    <>
    <section className="px-3 md:px-16 lg:px-24 py-3 md:py-5 lg:py-10 bg-[#FAFAFA] flex flex-col lg:flex-row my-10">
   
      <div className='w-full lg:w-[40%] my-5 md:my-10 space-y-3 p-2 md:p-10'>
        <h2 className='font-medium font-Onest text-xl md:text-3xl lg:text-4xl leading-snag text-[#15202E]'>Best Financial Consultant Services</h2>
        <p className='font-normal font-Inter text-sm md:text-base text-[#525252]'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
      </div>

      {/* services */}
 <div className="flex flex-col gap-6">

  {services.map((service)=>(
<div className='flex justify-center items-center gap-5 group cursor-pointer'>
           
           {/*  Services List */}
           <div className="flex items-center justify-center h-12 w-12 rounded-full border text-[#114A43] hover:bg-[#15202E] hover:text-white transition">
                {service.icon}
              </div>

{/* Icon  */}
              <div className="flex flex-col">
                <h3 className="text-[#15202E] font-Onest font-medium text-lg md:text-xl">
                  {service.title}
                </h3>
                <p className="text-[#525252] font-Inter text-sm md:text-base">
                  {service.desc}
                </p>
              </div>
                      <FaArrowRight className="text-[#15202E] hover:translate-x-2 transition" />

      </div>
  ))}
      
    </div>
    </section>


    {/* rating */}

    <section className='px-3 md:px:5 lg:px:10 flex flex-col lg:flex-row gap-10 xl:gap-5 xl:justify-center md:mx-20'>
      <div className='flex flex-col gap-5 w-full lg:w-[30%]'>
        <img src="/assets/images/serviceimg1.svg" alt="service" className='md:h-[250px] w-full md:w-[350px] object-cover'/>
        <img src="/assets/images/serviceimg2.svg" alt="service" className='md:h-[250px] w-full md:w-[350px] object-cover'/>
      </div>
      
      <div className='flex flex-col gap-5 w-full md:[30%] lg:w-1/2 '>
        <div className='w-full max-w-xlspace-y-3 '>
        <h2 className='font-medium font-Onest text-xl md:text-3xl lg:text-4xl leading-snag text-[#15202E]'>Best Financial Consultant Services</h2>
        <p className='font-normal font-Inter text-sm md:text-base text-[#525252]'>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
      </div>

      <div  className='grid grid-cols-1 md:grid-cols-2 gap-3'>
       {stats.map((state)=>(
        <div className='border rounded-3xl px-3 py-5 shadow-xl w-full md:w-56 text-center space-y-2 hover:bg-[#114A43] hover:text-white cursor-pointer transition-all duration-300'>
         <h3 className='font-medium text-lg md:text-2xl '>{state.value}</h3>
        <h6 className='font-medium font-Onest text-base md:text-lg'>{state.title}</h6>
        <p className='font-normal font-Inter text-sm md:text-base'>{state.desc}</p>
        </div>
       ))}
      </div>
      </div>
    </section>
    </>
  )
}

export default ConsultantServices



       