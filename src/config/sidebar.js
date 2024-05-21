import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { PiFireBold } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { MdCalendarMonth } from "react-icons/md";

import {
  COMING_SOON,
  HOME,
  MOVIES,
  TRENDING,
  TV_SHOWS,
  WATCHLIST,
} from "./constants";

export const SIDEBAR_LINKS = [
  {
    name: HOME,
    icon: <AiOutlineHome />,
    url: "/",
  },
  {
    name: MOVIES,
    icon: <MdOutlineLocalMovies />,
    url: "/movies",
  },
  {
    name: TV_SHOWS,
    icon: <PiTelevisionSimpleBold />,
    url: "/movies",
  },
  {
    name: TRENDING,
    icon: <PiFireBold />,
    url: "/movies",
  },
  {
    name: WATCHLIST,
    icon: <FiHeart />,
    url: "/movies",
  },
  {
    name: COMING_SOON,
    icon: <MdCalendarMonth />,
    url: "/movies",
  },
];
