import "../styles/moviecard.scss";
import MovieCard from "./MovieCard";
import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
const MoviesCards =  ({pageTitle, background}) => {
    const [popular, setPopular] = useState([]);
    const URL =
      "https://api.themoviedb.org/3/movie/popular?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1";
  
    useEffect(() => {
      axios.get(URL).then((res) => setPopular(res.data.results));
    }, []);

    return(
        <Container id="car" style={{backgroundColor:background}}>
            <Row>
                <Col><h2 className="titre-accueil"  style={{color:"#F0F0F0"}}> { pageTitle} </h2></Col>
            </Row>
            
        <Row>
        {popular.filter((_,index)=> index<4).map((p) => (
            <Col>
            <MovieCard key={p.id} id={p.id} title={p.title} vues={p.vote_count} likes={p.vote_average} description={p.overview} img={`https://image.tmdb.org/t/p/original${p.poster_path}`}/>
            </Col>
          ))}
        
        </Row>
        <Row>
        {popular.filter((_,index)=> index>=4 && index<8).map((p) => (
            <Col>
            <MovieCard key={p.id}   id={p.id} title={p.title} vues={p.vote_count} likes={p.vote_average} description={p.overview} img={`https://image.tmdb.org/t/p/original${p.poster_path}`}/>
            </Col>
          ))}
        </Row>
        </Container>
    )
} 
export default MoviesCards ;