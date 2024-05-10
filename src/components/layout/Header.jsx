// import React from "react";
// import Image from "next/image";

// const Header = () => {
//   return (
//     <div>
//       <nav className=" bg-black">
//         <div>
//           <Image src="" alt="image" width={210} height={200} />
//         </div>
//         <div>
//           <button>Home</button>
//           <button>Features</button>
//           <button>pages</button>
//         </div>
//         <div>
//           <button>Search</button>
//           <button>Bookmark</button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div
      className=" p-4 flex justify-between text-white items-center "
      style={{ backgroundColor: "#151515" }}
    >
      {/* App Logo */}
      <div>
        <Image
          src="/logo.png"
          alt="StreamIT Logo"
          width={72}
          height={16}
          className="h-[3rem] w-[10rem]"
        />
        {/* <img
          src="https://wordpress.iqonic.design/product/wp/streami…tent/themes/streamit-theme/assets/images/logo.png"
          alt="image"
        /> */}
      </div>

      {/* Home Tv-Show Movies Link */}
      <div>
        <ul className="flex gap-3">
          <li className=" text-red-600">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/movies">Movies</Link>
          </li>
          <li>
            <Link href="/tv-shows">TV Shows</Link>
          </li>
        </ul>
      </div>

      {/* search and Bookmark/Favourite button */}

      <div className="flex gap-3">
        <IoSearch />
        <IoBookmarkOutline />
      </div>
    </div>
  );
};

export default Header;
