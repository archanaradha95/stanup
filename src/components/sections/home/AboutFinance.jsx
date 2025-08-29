import React from 'react'
import { motion } from "motion/react"
import Marquee from "react-fast-marquee";


const AboutFinance = () => {

  
  return (
   <>
    <div>

      {/* logos */}
      <div className='flex gap-10 my-10  overflow-hidden'>
      <Marquee
      pauseOnHover ={true}
      speed={50}>
     
      <img 
      src="/assets/images/about-logo1.svg" alt="logo1" 
      className='h-10 mx-4'/>
  
     
      <img 
      src="/assets/images/about-logo2.svg" alt="logo2" 
      className='h-10 mx-4'/>
      

      </Marquee>
    </div>

{/* text */}
    <div className='text-center font-medium font-Onest space-y-5 flex flex-col justify-center items-center '>
        <h6 className='text-sm md:text-base'>Founder Says:</h6>
        <p className='text-xl md:text-2xl max-w-4xl px-2 md:px-4 '>“Financial advisory services help you plan your budget, investments and retirement with effective strategies, so that your finances are secure and financial goals are achieved.”</p>
    </div>
    </div>
   </>
  )
}

export default AboutFinance
