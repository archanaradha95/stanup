import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoPersonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Header = () => {

    const navigate = useNavigate();
    const [menuOpen,setMenuOpen] = useState(false)

    const clickHome = () =>{
      navigate("/");
    }

    const clickAbout = () =>{
      navigate("/about");
    }

    const clickServices = () =>{
      navigate("/services");
    }

    const clickTestimonials = () =>{
      navigate("/testimonials");
    }

    const clickContact = () =>{
      navigate("/contact");
    }

  return (
    <>
    <div className='flex justify-between items-center px-2 py-3 md:px-10 lg:px-20 md:py-5'>
      <div>
      <img src="/assets/images/StanUp-logo.svg" alt="logo" onClick={clickHome} className=' h-8 cursor-pointer object-cover ' />
    </div>

{/*desktop navigations */}
    <div className='bg-[#EFEFEF] border rounded-3xl px-4 py-2 hidden md:flex gap-5 font-Inter font-normal text-base w-fit'>
        <div onClick={clickHome} className='cursor-pointer text-gray-600 hover:text-[#15202E]' >Home</div>
        <div onClick={clickAbout} className='cursor-pointer text-gray-600 hover:text-[#15202E]'>About</div>
        <div onClick={clickServices} className='cursor-pointer text-gray-600 hover:text-[#15202E]'>Services</div>
        <div onClick={clickTestimonials} className='cursor-pointer text-gray-600 hover:text-[#15202E]'>Testimonials</div>
        <div onClick={clickContact} className='cursor-pointer text-gray-600 hover:text-[#15202E]'>Contact</div>
    </div>

    {/*desktop button */}

    <div className='hidden md:flex gap-3 items-center font-Onest font-normal border rounded-3xl w-fit px-4 py-2 text-white hover:bg-gray-200 hover:text-black cursor-pointer transition-all duration-200'>
      <button>Login</button><IoPersonOutline /> 
    </div>

    {/* handburger */}

    <div className='md:hidden h-8 text-white mr-5 ' onClick={()=>setMenuOpen(!menuOpen)}>
      {menuOpen ? (<IoClose className='cursor-pointer'/>) :(
        <GiHamburgerMenu className='cursor-pointer'/>) }
      
</div>

{/* mobile menu */}

{menuOpen && (
  <div className="absolute top-10 left-5 w-[90%] bg-white shadow-md flex flex-col items-center py-5 space-y-4 md:hidden z-50">
            <div
              onClick={clickHome}
              className="cursor-pointer text-gray-600 hover:text-[#15202E]"
            >
              Home
            </div>
            <div
              onClick={clickAbout}
              className="cursor-pointer text-gray-600 hover:text-[#15202E]"
            >
              About
            </div>
            <div
              onClick={clickServices}
              className="cursor-pointer text-gray-600 hover:text-[#15202E]"
            >
              Services
            </div>
            <div
              onClick={clickTestimonials}
              className="cursor-pointer text-gray-600 hover:text-[#15202E]"
            >
              Testimonials
            </div>
            <div
              onClick={clickContact}
              className="cursor-pointer text-gray-600 hover:text-[#15202E]"
            >
              Contact
            </div>

            {/* Mobile Login button */}
            <div className="flex gap-3 items-center font-Onest font-normal border rounded-3xl w-fit px-4 py-2 text-black hover:bg-gray-200 transition-all duration-300 cursor-pointer">
              <button>Login</button>
              <IoPersonOutline />
            </div>
          </div>


)}
    </div>
    </>
  )
}

export default Header

