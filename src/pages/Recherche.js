import React from "react";
import Navigation from "../components/Navigation";
import RechercheFilm from "../components/RechercheFilm";
import Footer from "../components/Footer";



const Recherche = () => {


  return (
    <div className="search">
  
      <Navigation />
      <RechercheFilm />
      <Footer/>
    </div>
  );
};

export default Recherche;
