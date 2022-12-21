import React, { useState, useEffect } from "react";
import axios from "axios";
import MoviesCards from "./MoviesCards";
import MovieCard from "./MovieCard.js"
import { Col, Container, Row } from 'react-bootstrap';
import "../styles/RechercheFilm.scss"
import { useSearchParams } from "react-router-dom";

const RechercheFilm = () => {
    const  [searchParams, setSearchParams] = useSearchParams()
    const [data, setData] = useState([]);
    const [query, setQuery] = useState(searchParams.get("q"));
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&query=${query}`;
  
    useEffect(() => {
      axios.get(URL).then((res) => setData(res.data.results));
    }, [query]);
  
    const onSearch = (event) => {
      setQuery(event.target.value);
    };
  
return(
<div style={{background:"url(img-fond.png)", backgroundSize:"cover", position:"relative"}}>
<div className="searchMovie">
      <div className="input-container">
        <input
          className="input"
          placeholder="Mot clé"
          onChange={onSearch}
        ></input>
         <div class="search"></div>
         <div style={{position:"relative", top:"100px", color:"red", left:"50px"}}>{query.length==0?"Veuillez entrer un titre":""}</div>
      </div>
    </div>
    {query ? (
        <Container id="car-category">
         <Row >
          {data.map((m) => (
        <Col>
        <MovieCard key={m.id}  title={m.title} vues={m.vote_count} likes={m.vote_average} description={m.overview} img={`https://image.tmdb.org/t/p/original${m.poster_path}`}/>
        </Col>
          ))}
        </Row>
        </Container>
      ) : (
       <MoviesCards/>

      )}
  </div>
  )
};

export default RechercheFilm;
