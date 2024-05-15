// import Image from "next/image";
// import { Inter } from "next/font/google";
// import RankedCarousel from "@/components/common/RankedCarousel/RankedCarousel";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return;
//   <div>
//     {/* Hero Movie Carousel */}
//     {/* Top 10 Movies */}
//     <RankedCarousel />
//     {/* Popular Movies */}
//     {/* Upcoming Movies */}
//   </div>;
// }

"use client";
import { Inter } from "next/font/google";
import RankedCarousel from "@/components/common/RankedCarousel/RankedCarousel";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import MobileSidebar from "@/components/layout/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });

const Home = ({}) => {
  return (
    <div className="flex">
      {/* Hero Movie Carousel */}
      {/* Top 10 Movies */}
      {/* <RankedCarousel /> */}
      {/* Popular Movies */}
      {/* Upcoming Movies */}
      <div className="">
        <Sidebar className=" lg:w-[18%]  2xl:w-[15%]" />
        <MobileSidebar className="" />
      </div>
      <div className="flex flex-col w-[85%]">
        <Header />
        <RankedCarousel />
      </div>
    </div>
  );
};

export default Home;
