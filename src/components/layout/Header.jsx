import React from "react";
import { LuSearch } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Header({ onHandleSlide, showSidebar }) {
  return (
    <div
      className=" text-white bg-secondary h-24 border-b-[1px] border-[#1e1e1f]
         flex items-center justify-between px-3 md:px-10"
    >
      {/* slide button */}
      <button
        className="p-3 border-[1px] border-[#1e1e1f] rounded-xl text-xl hidden md:block "
        onClick={onHandleSlide}
      >
        {/* <MdOutlineKeyboardArrowLeft /> */}
        {showSidebar ? (
          <MdOutlineKeyboardArrowLeft />
        ) : (
          <MdKeyboardArrowRight />
        )}
      </button>

      {/* Input Button */}
      <div className="flex gap-7 items-center">
        <form className="flex items-center gap-6 px-4  border-[1px] border-[#1e1e1f] rounded-xl ">
          <div className="text-xl">
            <LuSearch />
          </div>
          <input
            type="search"
            name="search-form"
            onChange=""
            placeholder="Search everything"
            className="bg-transparent text-sm outline-none placeholder-gray-600 py-2 md:py-3 w-[15rem] md:w-[17rem]"
          />
        </form>

        {/* notification */}
        <button className="text-2xl ">
          <IoIosNotificationsOutline />
        </button>

        {/* User */}
        <button className="text-2xl">
          <FaUserLarge />
        </button>
      </div>
    </div>
  );
}

export default Header;
