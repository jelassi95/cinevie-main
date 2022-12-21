import React from "react";
import Navigation from "../components/Navigation";
import CitiesSlider from "../components/Carousel"
import "../styles/home.scss";
import Footer from "../components/Footer"
import CategoriesMovies from "../components/Categories";
import { useLocation } from "react-router-dom";

 
const Category = () => {
  const {id} = useLocation();
  
  return (
    <>
      <Navigation />
      <CategoriesMovies idGenre={id}  />
      <Footer />
    </>
  );
};
export default Category;
