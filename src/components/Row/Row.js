import React, { useEffect, useState } from "react";
import "./row.scss";
import MovieTile from "../MovieTile/MovieTile";
import axios from "../../../node_modules/axios/index";

function Row({ title, fetchUrl, isLargeRow }) {
  // Fetch API

  const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axiosInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl, axiosInstance]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="cards">
        {movies.map((movie) => (
          <MovieTile movie={movie} isLargeRow={isLargeRow} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Row;
