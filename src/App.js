import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={false}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLargeRow={false}
      />
      <Row
        title="Thrillers"
        fetchUrl={requests.fetchMovieThrillers}
        isLargeRow={false}
      />
      <Row
        title="TV Comedies"
        fetchUrl={requests.fetchTvComedies}
        isLargeRow={false}
      />
      <Row
        title="Documentary Films"
        fetchUrl={requests.fetchDocumentaryFilms}
        isLargeRow={false}
      />
      <Row
        title="Comedies"
        fetchUrl={requests.fetchTvDrama}
        isLargeRow={false}
      />
      <Row
        title="Action & Adventure"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}
      />
    </div>
  );
}

export default App;
