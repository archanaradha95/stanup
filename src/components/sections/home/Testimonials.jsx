import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Testimonials = () => {
  return (
    <section className="py-16 bg-white px-6">
     <div className="flex flex-col md:flex-row gap-5 justify-center">
       <div>
        <h2 className="text-3xl font-medium font-Onest  ">What They Say</h2>
      <p className="text-gray-600 font-Inter font-normal mt-2 mb-10 max-w-lg">
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular.
      </p>

            <div className="flex items-center gap-6">
        {/* Arrows */}
       <IoIosArrowBack  className="border rounded-full h-10 w-10 px-2 py-2 hover:bg-[#114A43] hover:text-white"/>
       <IoIosArrowForward className="border rounded-full h-10 w-10 px-2 py-2 hover:bg-[#114A43] hover:text-white" />
     </div>
       </div>

        {/* Testimonial Card */}
        <div className="bg-green-900 text-white rounded-2xl p-6 w-full max-w-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="  ">
              <img src="/assets/images/testimolsimg.svg" alt="review" className="w-12 h-12 rounded-full"/>
            </div>
            <div className="font-medium font-Onest">
              <h4 className=" text-base md:text-xl">Alexander Upi</h4>
              <p className="text-[#D8E28C] text-sm md:text-base">@accountname</p>
            </div>
          </div>
          <p className="text-sm md:text-base font-Inter font-normal leading-relaxed">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular. Li lingues differe solmen in li grammatica, li
            pronunciation e li plu commun vocab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;