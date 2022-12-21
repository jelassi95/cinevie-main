import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MovieCoverDetails from "./MovieCoverDetails";
import "../styles/fichefilms.scss";
import MoviesDescription from  "./MoviesDescription";
import Actor from "../components/Actor";
import {useNavigate, useLocation} from 'react-router-dom';

const FicheFilms = (props) => {
  const location = useLocation();
  const id = location.state.id;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=fr-FR`;
  const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a67b57849deb687f2cd49d7a8298b366&language=fr-FR`;
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [credits, setCredits] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
      axios.get(URL).then((res) => {
          setDetail(res.data);
          setGenres(res.data.genres);
      });
      axios.get(URL_CREDITS).then((res) => {
          setCredits(res.data.cast);
      });
  }, [URL, URL_CREDITS]);
  return (
    <React.Fragment>
      <div style={{ background: "url(bg-fiche.png)", backgroundSize: "cover" }}>
        <Container style={{paddingTop:"100px"}}>
          <Row className="first-row-film" >
            <Col lg={5} md={12}>
              {" "}
              <MovieCoverDetails detail={detail} />{" "}
            </Col>
            <Col md={7}>
              <MoviesDescription
                detail={detail}
                genres={genres}
                credits={credits}
              />
            </Col>
          </Row>

          <Row className="second-row-film">
            <h2 style={{color:"#F5F5F5"}}>TÊTE D'AFFICHE</h2>
          </Row>
          <Row className="p-5">
            <ul className="actors_desc" style={{gap:"20px"}}>
              {credits.slice(0, 6).map((credit) => {
                return (
                  <Actor
                    actor={credit}
                    key={credit.id}
                    onClickActor={() =>
                      navigate(`/actorDetails`, {  state:{id: credit.id } })
                    }
                  />
                );
              })}
            </ul>
          </Row>
          
        </Container>
      </div>
    </React.Fragment>
  );
}

export default FicheFilms;
