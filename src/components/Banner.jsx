import React, { useState, useEffect } from "react";
import "../components-css/Banner.css";
import axios from "../axios";
import requests from "../Requests";
import { FaPlay } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtoms";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <header
      className="banner mb-2"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents flex flex-col space-y-2 py-16 md:space-y-4 md:h-[85vh] md:justify-end lg:h-[85vh] lg:justify-end">
        <h1 className="banner__title text-2xl font-bold md:text-4xl lg:text-7xl">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons flex">
          <button className="banner__button flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition md:py-2.5 md:px-8 md:text-xl">
            <FaPlay /> Play
          </button>
          <button
            className="banner__button flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition md:py-2.5 md:px-8 md:text-xl"
            onClick={() => {
              setCurrentMovie(movie);
              setShowModal(true);
            }}
          >
            <HiInformationCircle className="h-5 w-5 md:h-8 md:w-8" />
            More Info
          </button>
        </div>
        <h1 className="banner__description max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movie?.overview}
        </h1>
      </div>

      {/* <div className="banner--fadeBottom" /> */}
    </header>
  );
}

export default Banner;
