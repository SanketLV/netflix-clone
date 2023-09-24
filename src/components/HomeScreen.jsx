import React from "react";
import "../components-css/HomeScreen.css";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "../Requests";
import Row from "./Row";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtoms";
import Modal from "./Modal";

function HomeScreen() {
  const showModal = useRecoilValue(modalState);

  return (
    <div>
      <Nav />
      <Banner />
      <section>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </section>
      {showModal && <Modal />}
    </div>
  );
}

export default HomeScreen;
