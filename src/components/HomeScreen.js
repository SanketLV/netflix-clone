import React from "react";
import "../components-css/HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";

function HomeScreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
    </div>
  );
}

export default HomeScreen;
