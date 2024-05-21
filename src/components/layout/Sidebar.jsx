import React from "react";
import Image from "next/image";
import Link from "next/link";

import { SIDEBAR_LINKS } from "@/config/sidebar";

const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className={`bg-secondary min-h-screen md:px-1 lg:px-2 py-12 border-r-[1px] ${
        showSidebar ? "w-[14rem]" : "w-[5rem]"
      } border-[#1e1e1f] pb-6 hidden md:block transition-all duration-300`}
    >
      <div className="flex flex-col gap-3">
        <div className={`flex flex-col gap-10 w-max`}>
          <div className="flex items-center  mb-6  md:px-4 lg:px-3">
            {/* User */}
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="StreamIT Logo"
              width={46.5}
              height={69.5}
              className="cursor-pointer object-fit-cover"
            />
            {showSidebar && (
              <span className="text-maroonVelvet font-bold text-2xl">
                STREAMIT
              </span>
            )}
          </div>
        </div>

        <div
          className={` text-white flex flex-col gap-3  border-b-[1px] border-[#1e1e1f] pb-6 
          `}
        >
          <div className={`flex flex-col gap-3`}>
            {SIDEBAR_LINKS.map((link) => (
              <Link key={link.name} href={link.url}>
                <div
                  className={`flex items-center rounded-2xl p-2 md:p-4 lg:px-3 lg:py-2.5 
                  hover:bg-maroonVelvet transition-all duration-300`}
                >
                  <p className="text-3xl">{link.icon}</p>
                  {showSidebar && <p className="ml-2 text-lg">{link.name}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
