import React from "react";
import "../components-css/Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Unde dolores, ullam perspiciatis eos modi alias
          ducimus deleniti ea accusantium impedit praesentium aspernatur eius
          tenetur a quidem molestias. Vel cumque error, quidem eum animi sunt
          possimus, distinctio soluta ratione voluptatibus natus fugit
          asperiores nemo sequi, quos quaerat. Illum a nemo eaque.`,
            150
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
