import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

    const clickHome = () =>{
      navigate("/");
    }


  return (
    <footer className="bg-[#15202E] text-white py-4 px-3 md:py-6 md:px-6 lg:py-12 ">
      <div className="flex flex-col flex-wrap items-center gap-3 md:gap-6">
        <img src="assets/images/StanUp-logo.svg" alt="logo" onClick={clickHome} className="cursor-pointer hover:scale-105 transition-all duration-300 "/>
        <nav className="flex flex-wrap gap-3 md:gap-6 text-sm font-normal font-Inter">
          <a href="#" className=" text-gray-400 hover:text-white">About</a>
          <a href="#" className=" text-gray-400 hover:text-white">Services</a>
          <a href="#" className=" text-gray-400 hover:text-white">Testimonials</a>
          <a href="#" className=" text-gray-400 hover:text-white">Blog</a>
          <a href="#" className=" text-gray-400 hover:text-white">Contact</a>
        </nav>
        <div className="flex gap-4 text-xl text-[#D8E28C]">
          <FaTwitter className="cursor-pointer hover:scale-110 transition-all duration-300"/>
          <FaInstagram className="cursor-pointer hover:scale-110 transition-all duration-300"/>
          <FaFacebook className="cursor-pointer hover:scale-110 transition-all duration-300"/>
          <FaYoutube className="cursor-pointer hover:scale-110 transition-all duration-300"/>
        </div>
        <hr className="text-[#525252] w-full mt-6"/>
        <p className="text-gray-400 text-xs font-normal font-Inter">
          © 2024 All rights reserved. This is Your Company
        </p>
      </div>
    </footer>
  );
};


export default Footer;