"use client"

import Link from "next/link";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    }
    return(
<>
 
  <nav className="flex justify-between p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div className="flex justify-between items-center ">
      <span className="text-2xl cursor-pointer font-bold text-gray-800 md:text-3xl hover:text-gray-700"> <Link href="/">JK_PORTFOLIO</Link></span>
    </div>

    
     <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
      <li className="mx-4 my-6 md:my-0">
        <Link href="/" className=" text-xl hover:text-cyan-500 duration-500">
          HOME
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <Link href="#" className="text-xl hover:text-cyan-500 duration-500">
          About
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <Link href="#" className="text-xl hover:text-cyan-500 duration-500">
          ABOUT
        </Link>
      </li>
      <li className="mx-4 my-6 md:my-0">
        <Link href="#" className="text-xl hover:text-cyan-500 duration-500">
          CONTACT
        </Link>
      </li>
    </ul>
    
      <button onClick={handleNav} className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded block md:hidden  ">
      {nav ? <RxCross2 /> : <FaBarsStaggered />}

      </button>
     
     <div className={nav ? "fixed left-0 top-[70px] w-[40%] h-[490px] border-r border-r-gray-900 bg-[rgb(202,204,61)] ease-in duration-300" : "fixed left-[-80%] ease-in duration-300"}>
     <ul className="text-white text-center">
      <li className="pt-4">
        <Link href="#" className=" text-xl hover:text-cyan-500 duration-500">
          HOME
        </Link>
      </li>
      <li className="pt-4">
        <Link href="#" className="text-xl hover:text-cyan-500 duration-500">
          SERVICE
        </Link>
      </li>
      <li className="pt-4">
        <Link href="#" className="text-xl hover:text-cyan-500 duration-500">
          ABOUT
        </Link>
      </li>
      <li className="pt-4">
        <Link href="#" className="text-xl hover:text-cyan-500 duration-500">
          CONTACT
        </Link>
      </li>
    </ul>
     </div>
    
  </nav>
</>


    )
}

export default Header;