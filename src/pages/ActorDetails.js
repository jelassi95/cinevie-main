import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { CDBBox, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import {  Row, Col } from "react-bootstrap";
import Navigation from "../components/Navigation";
import MoviesCards from "../components/MoviesCards";
import "../styles/ActorDetails.scss"
const ActorDetails = (props) => {
  const location = useLocation();
  const id = location.state.id;
  const [detail, setDetail] = useState({});
  const URL = `https://api.themoviedb.org/3/person/${id}?api_key=a67b57849deb687f2cd49d7a8298b366&language=en-US`;

  useEffect(() => {
    axios.get(URL).then((res) => {
      setDetail(res.data);
    });
  }, [id]);

  return (
    <React.Fragment >
      <Navigation />
      <div style={{ background: "url(IMAGE-FOND.png)", backgroundSize: "cover" }}>
      <div className="details-container " >
        
        <div className="movie_card" id="bright">
          <div className="info_section" style={{padding:"40px 100px"}}>
            
          <Row className="mt-5">
          <Col md={4}>
              <img style={{width:"100%"}}
                className="locandina"
                src={
                  detail.profile_path
                    ? `https://image.tmdb.org/t/p/original${detail.profile_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
                alt="poster"
              />
              
              </Col>
              
            
            <Col md={8} className="movie_desc">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  
                }}
              >
                <h1 className="nom">{detail.name}</h1>
                <h4>{detail.birthday}</h4>
                <h1 className="bio-titre">BIOGRAPHIE</h1>
                <p className="text" style={{ color: "black" }}>
                <span className="minutes">
                Place of birth : {detail.place_of_birth}
              </span>
              {detail.biography}
                </p>
                <CDBBox display="flex" className="flex">
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3 p-2">
                    <CDBIcon fab icon="twitter" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="instagram" />
                  </CDBBtn>
                </CDBBox>
              </div>

            
            </Col>
            </Row>
          </div>
        </div>
      </div>
      
      <MoviesCards pageTitle= "FILMOGRAPHIE" />
      <div className="footer-container">
        <Footer />
      </div>
      </div>
    </React.Fragment>
  );
};

export default ActorDetails;
