import React from "react";

const Movie = (props) => {
  const { movie, onClickMovie } = props;

  return (
    <div className="movie" onClick={onClickMovie}>
      <img
        width="100%"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt="poster"
      />
      <div className="conteneur" style={{fontSize:"20px"}}>
        <span>{movie.title}</span>
      </div>
    </div>
  );
};

export default Movie;
