
const SKILL = () => {
    return(
      <div className="w-full h-screen px-[13%] py-0 bg-[rgba(0,_0,_0,_0.082)] flex items-center justify-center flex-col">
    <div className="w-full mb-[100px] grid place-items-center text-center">
      <h2 className="text-[30px] -mb-[5px]">
        My <span className="text-[#e74d06]">Skills</span>
      </h2>
      <p>Here is my skills to represent my Expertise</p>
    </div>
    <div className="w-full grid grid-cols-[repeat(2,_1fr)] gap-y-[30px] gap-x-[50px] ">
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">HTML</p>
          <p className="font-medium">90%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className=" h-full absolute bg-[#e74d06] rounded-[25px] w-[90%] animate-[html_2s]" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">CSS</p>
          <p className="font-medium">85%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className=" h-full absolute bg-[#e74d06] rounded-[25px] w-[85%] animate-[html_2s]" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">Type Script</p>
          <p className="font-medium">80%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className="h-full absolute bg-[#e74d06] rounded-[25px] w-[80%] animate-[html_2s]" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">Java Script</p>
          <p className="font-medium">80%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className="h-full absolute bg-[#e74d06] rounded-[25px] w-[80%] animate-[html_2s]" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">React js</p>
          <p className="font-medium">75%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className="h-full absolute bg-[#e74d06] rounded-[25px] w-[75%] animate-[html_2s]" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">Node js</p>
          <p className="font-medium">70%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className="h-full absolute bg-[#e74d06] rounded-[25px] w-[70%] animate-[html_2s]" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">Next js</p>
          <p className="font-medium">65%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className="h-full absolute bg-[#e74d06] rounded-[25px] w-[65%] animate-[html_2s]" />
        </div>
      </div>
      <div className="flex justify-between items-center px-[10px] py-[0]">
        <div className="flex justify-between items-center px-[10px] py-[0]">
          <p className="font-medium">Figma</p>
          <p className="font-medium">60%</p>
        </div>
        <div className="w-full h-[10px] bg-[rgba(0,_0,_0,_0.144)] rounded-[25px] mt-[5px] relative">
          <span className="h-full absolute bg-[#e74d06] rounded-[25px] w-[60%] animate-[html_2s]" />
        </div>
      </div>
    </div>
  </div>
    )
}

export default SKILL