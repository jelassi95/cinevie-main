import React from  "react";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import FicheFilm from "./pages/FicheFilm";
import Home from "./pages/Home";
import Recherche from "./pages/Recherche";
import ActorDetails from "./pages/ActorDetails";
import APropos from "./pages/APropos"
const MainRouter =() => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/category" exact element={<Category />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/ficheFilms" element={<FicheFilm />} />
        <Route path="/ActorDetails" element={<ActorDetails />} />
        <Route path="/a-propos" element={<APropos />} />
      </Routes>
    );
}
export default MainRouter;