import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { Col, Container, Row, NavDropdown } from "react-bootstrap";
import "../styles/categories.scss";
import { useNavigate, useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";

const CategoriesMovies = (props) => {
  const { idGenre } = props;
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [categories, setCategories] = useState([]);
  const idParam = idGenre ? idGenre : id;

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US&page=1&with_genres=${idParam}`;
  const URL_GENRES =
    "https://api.themoviedb.org/3/genre/movie/list?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US";

  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.results);
    });
    axios.get(URL_GENRES).then((res) => {
      setCategories(res.data.genres);
    });
  }, [idParam]);

  const onChange = (eventKey,event) => {
    console.log(event.target.value)
    setId(event.target.id);
  };

  return (
    <div style={{ background: "url(bg2.png)", backgroundSize: "cover" }}>
      <Container id="car-category">
        <Row>
          <Col className="d-flex gap-5 align-items-center mt-5">
            <h2 style={{ display: "inline-block" }}>Films</h2>
            {!idGenre && (
              <div className="sort-container">
                <NavDropdown
                  value={id}
                  onSelect={onChange}
                  title="CATÉGORIE"
                  id="navbarScrollingDropdown"
                >
                  {categories.map((genre) => {
                    return (
                      <NavDropdown.Item id={genre.id} key={genre.id} > 
                        {genre.name}
                      </NavDropdown.Item>
                    );
                  })}
                </NavDropdown>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          {idParam ? (
            <ul className="categoriesMovies-list" style={{display:"grid",gridTemplateColumns:'repeat(4,1fr)',gridTemplateRows:3}}>
              {data.map((movie) => (
                <MovieCard
                key={movie.id} id={movie.id} title={movie.title} vues={movie.vote_count} likes={movie.vote_average} description={movie.overview} img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  onClickMovie={() =>
                    navigate(`/MoviesDescription`, { state: { id: movie.id } })
                  }
                />
              ))}
            </ul>
          ) : (
            <div className="placeholder-container">
              <h4>Rien à afficher, veuillez sélectionner une catégorie</h4>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CategoriesMovies;
