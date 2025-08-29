import React from 'react'
import Header from '../layouts/Header'
import { FaArrowRight } from "react-icons/fa6";
import AboutFinance from '../sections/home/AboutFinance';
import ConsultantServices from '../sections/home/ConsultantServices';
import WhyChooseUs from '../sections/home/WhyChooseUs';
import HowItWorks from '../sections/home/HowItWorks';
import Testimonials from '../sections/home/Testimonials';
import CallToAction from '../sections/home/CallToAction';
import Footer from '../layouts/Footer';


const Home = () => {
  return (
    <>
    <div className="bg-[url('/assets/images/homebg.svg')] bg-cover bg-center rounded-xl h-[500px] md:h-[600px] relative">
      <Header/>
      
      <div className='absolute top-[20%] md:top-1/2  flex flex-col md:flex-row justify-center items-center gap-10 px-2 py-3 md:px-10 lg:px-20 md:py-5 '>

        {/* content */}
        <div className='w-full md:w-1/2 flex flex-col gap-2 '>
        <h3 className='font-Onest font-medium text-xl md:text-2xl lg:text-4xl text-[#D8E28C] leading-tight tracking-widest w-[60%]'>Solutions <span className='text-white'>for Your Finances</span> </h3>
        <p className='text-white font-Inter font-normal text-sm md:text-base leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel felis pharetra, commodo metus id, viverra felis. Nulla sodales leo justo, vel laoreet erat tempor sed. Suspendisse mollis, nibh in viverra molli.</p>
      </div>

{/* buttons */}
        <div className='  w-full md:w-1/2 '> 

            <div className='flex flex-wrap gap-3 '>
                {["Finance","Market","Consultant","Business"].map((item,index)=>(
                <button className='border rounded-3xl px-3 py-2 bg-white/20 font-Inter  text-white text-sm md:text-base'>{item}</button>
                ))}
            </div>

            {/* Schedule a call button */}
  <div className="mt-4">
    <button className="flex items-center justify-center gap-2 bg-[#D8E28C] border rounded-3xl px-3 py-2 md:px-6 md:py-3 w-[68%]">
      <span className="text-[#114A43] font-Onest font-medium">Schedule a Call</span>
      <FaArrowRight className="text-[#114A43]" />
    </button>
  </div>
        </div>
      </div>

      
    </div>
    <AboutFinance/>
    <ConsultantServices/>
    <WhyChooseUs/>
      <HowItWorks/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default Home
