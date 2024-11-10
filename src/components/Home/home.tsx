import Image from "next/image";

const HOME = () => {
    return (
      <section id="home" className="py-5">
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[20px] leading-none text-gray-900 font-extrabold font-sans text-center md:text-5xl lg:text-left lg:leading-tight mb-5">
            Hi,I am
          </h1>
          <h1 className="max-w-xl text-[2.2rem] leading-none text-gray-900 font-extrabold font-sans text-center md:text-5xl lg:text-left lg:leading-tight mb-5">
           <span className="text-[#e6e334]">Jahansher</span> <span className="text-[#ffffff]">Khan</span>
          </h1>

          <p>
            Frontend Web Developer, UI Designer, 
          </p>
          <div className="flex justify-center mt-14 lg:justify-start">
            
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image src="/images/ei_1728499603408-removebg-preview.png" alt="image" width={300} height={300}  className="ml-auto" />
        </div>
      </div>
    </section>
    );
}

export default HOME;




      