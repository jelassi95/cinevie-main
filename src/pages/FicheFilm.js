import React from "react";
import Navigation from "../components/Navigation";
import "../styles/home.scss";
import Footer from "../components/Footer";
import FicheFilms  from "../components/FicheFilms"



const FicheFilm = () => {
  return (
    <>
      <Navigation />
        <FicheFilms />
      <Footer/>
    </>
  );
}
export default FicheFilm;
