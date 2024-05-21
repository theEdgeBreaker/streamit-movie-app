import { moviesData } from "@/mockApi/MoviesData";
import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Sidebar";

const RankedCarousel = () => {
  const [topRated, setTopRated] = useState([]);
  const apikey = process.env.NEXT_PUBLIC_API_KEY;

  useEffect(() => {
    // TBD: Api to fetch movies

    // const fetchTopMovies = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
    //     );
    //     console.log(moviesData);
    //     const data = await response.json();
    //     setTopRated(data.results);
    //     console.log("Rated-Movies-data ", data);
    //   } catch (error) {
    //     console.error("Error fetching top-rated data: ", error);
    //   }
    // };

    // fetchTopMovies();
    console.log(moviesData, "moviesData");
  }, [apikey]);

  return (
    <div className=" min-h-screen">
      {/* <Header />
      <div>RankedCarousel</div> */}
      RankedCarousel
    </div>
  );
};

export default RankedCarousel;
