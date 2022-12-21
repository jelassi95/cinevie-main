import React from "react";
import "../styles/MovieCoverDetails.scss"
const MovieCoverDetails =  ( {detail} ) => {
    return (
        <div className="movie-cover" >
        <div className="movie-card" style={{backgroundImage:`url( ${`https://image.tmdb.org/t/p/original${detail.backdrop_path}`})`}}>

          <div className="overlay">
          <div className="card-header">
            <div className="release-date">
              <p style={{fontSize:"12px"}}> {detail.release_date}</p>
            </div>
            <div className="movie-content">
               <h1>REGARDER MAINTENANT</h1>
             </div>
          </div>
          </div>
        </div>
        </div>
)
} 
export default MovieCoverDetails ;