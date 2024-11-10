// import { PiNotePencilLight } from "react-icons/pi";
// import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";
const ABOUT = () => {
  return (
    <section id="home" className="py-5 bg-[#4235b4]">
       <div className="container flex flex-wrap items-center justify-around mx-auto mt-10 md:px-12 md:flex-row">
       <div className="lg:w-1/2">
          <Image
            src="/images/ei_1728499603408-removebg-preview.png"
            alt="image"
            width={800}
            height={800}
            className="ml-[20px] bg-white w-[200px] h-[200px]"
          />
        </div>
        
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[20px] leading-none text-white font-extrabold font-sans text-center md:text-5xl lg:text-left lg:leading-tight mb-5 underline  underline-offset-8">
           ABOUT ME
          </h1>
          <h1 className="max-w-xl text-[2.2rem] leading-non  font-extrabold font-sans text-center md:text-5xl lg:text-left lg:leading-tight mb-5">
            <span className="text-[#e6e334]">Frontend</span>{" "}
            <span className="text-[#ffffff]">Developer</span>
          </h1>

          <p className="text-white md:w-[600px] md:text-start sm:w-[450px] sm:text-start ">
            Hi, my name is Jahansher Khan, i am a Frontend web developer, UI
            designer. I have honed my skills in Web Development and advance i
            have core understanding of advance UI design principles. Here are
            the major skills i have.
          </p>
          <div className="flex justify-center mt-14 lg:justify-start">
            <button
              type="button"
              className="flex text-white bg-indigo-600 font-medium rounded-lg text-md px-5 py-4 text-center hover:bg-indigo-700 hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              Download CV
              {/* <FaEye></FaEye> */}
            </button>
            
          </div>
        </div>
        
      </div>
    </section>

  )
};

export default ABOUT;
