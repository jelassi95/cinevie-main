import React from "react";
import Navigation from "../components/Navigation";
import CitiesSlider from "../components/Carousel"
import MoviesCards from "../components/MoviesCards";
import "../styles/home.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer"
  
const Home = () => {
  const [popular, setPopular] = useState([]);
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=fr-US&page=2";

  useEffect(() => {
    axios.get(URL).then((res) => setPopular(res.data.results));
  }, []);

  return (
    <>
      <Navigation />
      <CitiesSlider slides={popular.filter((_,index)=> index>10 && index<21).map(p=>({img:`https://image.tmdb.org/t/p/original${p.poster_path}`,country:"",city:p.title}))} />
      <MoviesCards pageTitle= "FILM BIOGRAPHIE" background="#26273e" />
      <Footer/>
    </>
  );
}
export default Home;
