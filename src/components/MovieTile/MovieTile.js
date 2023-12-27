import React, { useState } from "react";
import "./movieTile.scss";
import { Modal } from "components/Modal/Modal";
import { BASE_URL } from "./../../constants";

const MovieTile = ({ movie, isLargeRow }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOverlay = () => {
    setShowModal(!showModal);
    document.body.style.overflow = "hidden";
  };

  return !showModal ? (
    <div
      className={`card ${isLargeRow ? "noFlex" : ""}`}
      onClick={() => handleOverlay()}
    >
      <img
        className="card-image"
        src={`${BASE_URL}${
          isLargeRow
            ? movie.poster_path
            : movie.backdrop_path || movie.poster_path
        }`}
        alt={`${BASE_URL}${movie.name}`}
        key={movie.id}
      />
      <h3 className="movie-title">
        {movie.name ||
          movie.title ||
          movie.original_title ||
          movie.original_name}{" "}
      </h3>
    </div>
  ) : (
    <Modal setShowModal={setShowModal} movie={movie} />
  );
};

export default MovieTile;
