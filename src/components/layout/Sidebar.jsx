import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiFireBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { MdCalendarMonth } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className=" bg-secondary min-h-screen md:px-5 lg:px-7 py-12 border-r-[1px] border-[#1e1e1f] pb-6 hidden md:block ">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-7">
            {/* User */}
            <FaCircleUser className="text-white text-4xl" />
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="StreamIT Logo"
              width={72}
              height={16}
              className=" 
              sm:h-[1.5rem] sm:w-[5.5rem]
              lg:h-[2rem] lg:w-[7rem] cursor-pointer
              "
            />
          </div>

          <h4 className=" text-gray-500 font-semibold md:text-xs lg:text-sm">
            News Feed
          </h4>
        </div>

        <div className=" text-white flex flex-col gap-5 md:text-sm lg:text-lg border-b-[1px] border-[#1e1e1f] pb-6 font-semibold">
          <Link href="/">
            <div className="flex flex-row md:gap-4 lg:gap-6 items-center hover:bg-maroonVelvet ">
              <AiOutlineHome className=" md:text-xl lg:text-2xl" />
              <p>Home</p>
            </div>
          </Link>

          <Link href="/movies">
            <div className="flex flex-row md:gap-4 lg:gap-6 items-center hover:bg-maroonVelvet ">
              <MdOutlineLocalMovies className=" md:text-xl lg:text-2xl" />
              <p>Movies</p>
            </div>
          </Link>

          <Link href="/tv-shows ">
            <div className="flex flex-row md:gap-4 lg:gap-6 items-center hover:bg-maroonVelvet ">
              <PiTelevisionSimpleBold className=" md:text-xl lg:text-2xl" />
              <p>TV Shows</p>
            </div>
          </Link>

          <Link href="/trending">
            <div className="flex flex-row md:gap-4 lg:gap-6 items-center hover:bg-maroonVelvet ">
              <PiFireBold className=" md:text-xl lg:text-2xl" />
              <p>Trending</p>
            </div>
          </Link>

          <Link href="/watchlist">
            <div className="flex flex-row md:gap-4 lg:gap-6 items-center hover:bg-maroonVelvet ">
              <FiHeart className=" md:text-xl lg:text-2xl" />
              <p>Watchlist</p>
            </div>
          </Link>

          <Link href="/coming-soon">
            <div className="flex flex-row md:gap-4 lg:gap-6 items-center hover:bg-maroonVelvet ">
              <MdCalendarMonth className=" md:text-xl lg:text-2xl" />
              <p>Coming Soon</p>
            </div>
          </Link>

          {/* <div className="flex flex-row gap md:gap-4 lg:gap-6 items-center">
            <MdOutlineLocalMovies className=" md:text-xl lg:text-2xl" />
            <Link href="/movies">Movies</Link>
          </div>

          <div className="flex flex-row md:gap-4 lg:gap-6 items-center">
            <PiTelevisionSimpleBold className=" md:text-xl lg:text-2xl" />
            <Link href="/tv-shows ">TV Shows</Link>
          </div>

          <div className="flex flex-row md:gap-4 lg:gap-6 items-center">
            <PiFireBold className=" md:text-xl lg:text-2xl" />
            <Link href="/trending">Trending</Link>
          </div>

          <div className="flex flex-row md:gap-4 lg:gap-6 items-center">
            <FiHeart className=" md:text-xl lg:text-2xl" />
            <Link href="/watchlist">Watchlist</Link>
          </div>

          <div className="flex flex-row md:gap-4 lg:gap-6 items-center">
            <MdCalendarMonth className=" md:text-xl lg:text-2xl" />
            <Link href="/coming-soon">Coming Soon</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
