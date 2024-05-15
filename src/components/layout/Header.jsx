import React from "react";
import { LuSearch } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";

function Header() {
  return (
    <div className=" text-white bg-secondary h-24 border-b-[1px] border-[#1e1e1f]">
      Header
      <button>slide</button>
      <div>
        <form>
          <LuSearch />
          <input
            type="search"
            name="search-form"
            className=""
            onChange=""
            placeholder="search everything"
          />
        </form>
        <IoIosNotificationsOutline />
        <FaUserLarge />
      </div>
    </div>
  );
}

export default Header;
