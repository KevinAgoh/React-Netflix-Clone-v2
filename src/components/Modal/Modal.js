import React from "react";
import "./modal.scss";
import { BASE_URL } from "./../../constants";

export const Modal = ({ setShowModal, movie }) => {
  const handleOverlayDissapear = () => {
    setShowModal(false);
    document.body.style.removeProperty("overflow");
  };
  console.log(movie);
  return (
    <div className="overlay" onClick={() => handleOverlayDissapear()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="movie-image">
          <img
            src={`${BASE_URL}${movie.backdrop_path}`}
            alt={`${movie.title} image`}
          />
        </div>
        <span className="movie-title">
          {movie.name ||
            movie.title ||
            movie.original_title ||
            movie.original_name}
        </span>
        <div className="movie-overview">{movie.overview}</div>
      </div>
    </div>
  );
};
