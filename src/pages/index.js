// "use client";
// import React, { useState } from "react";
// import { Inter } from "next/font/google";
// import RankedCarousel from "@/components/common/RankedCarousel/RankedCarousel";
// import Sidebar from "@/components/layout/Sidebar";
// import Header from "@/components/layout/Header";
// import MobileSidebar from "@/components/layout/MobileSidebar";

// const inter = Inter({ subsets: ["latin"] });

// const Home = ({}) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isMobileSidebar, setIsMobileSidebar] = useState(false);

//   const handleSlideToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//     setIsMobileSidebar(!isMobileSidebar);
//     console.log("Sidebar toggled, isMobileSidebar:", !isMobileSidebar);
//   };

//   return (
//     <div className=" flex">
//       <div className={` bg-fuchsia-300 w-[15] ease-in-out duration-300 `}>
//         {isMobileSidebar ? <MobileSidebar /> : <Sidebar />}
//         <div className="md:hidden h-full">
//           <MobileSidebar />
//         </div>
//       </div>

//       <div
//         className={` bg-yellow-600 ${isMobileSidebar ? "w-full" : "w-[85%]"}`}
//       >
//         <Header
//           isSidebarOpen={isSidebarOpen}
//           onHandleSlide={handleSlideToggle}
//         />
//         <RankedCarousel />
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import RankedCarousel from "@/components/common/RankedCarousel/RankedCarousel";
import Sidebar from "@/components/layout/Sidebar";
import MobileSidebar from "@/components/layout/MobileSidebar";

const inter = Inter({ subsets: ["latin"] });

const Home = ({}) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const onHandleSlide = () => {
    setShowSidebar(!showSidebar);
    console.log("button clicked");
  };

  return (
    <div className="flex relative">
      <Sidebar showSidebar={showSidebar} />

      <div className={`bg-amber-400 ease-in-out w-full`}>
        <Header onHandleSlide={onHandleSlide} showSidebar={showSidebar} />
        <RankedCarousel />
      </div>
    </div>
  );
};

export default Home;
