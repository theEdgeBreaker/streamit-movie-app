import React from "react";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiFireBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { MdCalendarMonth } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

const MobileSidebar = () => {
  return (
    <div
      className=" bg-secondary h-full border-r-[1px] border-[#1e1e1f]  px-4 py-8 text-white
      flex flex-col gap-8 items-center "
    >
      <div className="flex flex-col gap-6 items-center">
        {/* user */}
        <div className="text-4xl">
          <FaCircleUser />
        </div>

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="StreamIT Logo"
          width={72}
          height={16}
          className=" 
              h-[1.5rem] w-[5rem] cursor-pointer
              "
        />
      </div>

      <div className="flex flex-col gap-7 text-4xl">
        {/* Home */}
        <div className="p-3 border-2 border-transparent rounded-md transition-all duration-300 hover:border-[#1e1e1f] hover:text-5xl">
          <AiOutlineHome />
          <span className="text-lg hidden hover:block">Hello</span>
        </div>

        {/* Movies */}
        <div className="p-3 border-2 border-transparent rounded-md transition-all duration-300 hover:border-[#1e1e1f] hover:text-5xl">
          <MdOutlineLocalMovies />
        </div>

        {/* TV-Shows */}
        <div className="p-3 border-2 border-transparent rounded-md transition-all duration-300 hover:border-[#1e1e1f] hover:text-5xl">
          <PiTelevisionSimpleBold />
        </div>

        {/* Trending */}
        <div className="p-3 border-2 border-transparent rounded-md transition-all duration-300 hover:border-[#1e1e1f] hover:text-5xl">
          <PiFireBold />
        </div>

        {/* Watchlist */}
        <div className="p-3 border-2 border-transparent rounded-md transition-all duration-300 hover:border-[#1e1e1f] hover:text-5xl">
          <FiHeart />
        </div>

        {/* Coming-soon */}
        <div className="p-3 border-2 border-transparent rounded-md transition-all duration-300 hover:border-[#1e1e1f] hover:text-5xl">
          <MdCalendarMonth />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
