import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "..//styles/MoviesDescription.scss";

const MoviesDescription = ({ detail, genres, credits }) => {
  const navigate = useNavigate();
  return (
    <Col className="descrption-film">
      <Row>
        <h2 className="title-description">{detail.title}</h2>
      </Row>
      <Row>
        {" "}
        <h3 className="categor-desc">
          {detail.release_date} (CA)
          {genres.map((g) => {
            return (
              <p
                key={g.id}
                className="type"
                onClick={() => navigate(`/category`, { id: g.id })}
              >
                {g.name}
              </p>
            );
          })}{" "}
        </h3>
        <div className="icons-description">
          <img className="iconA" src="iconA.png" />
          <img className="iconB" src="ICONE.png" />
          <img className="iconC" src="ICONc.png"    />
        
          
        </div>
      </Row>
      <Row></Row>
      <Row></Row>
      <Row>
        <h4 className="titre">{detail.overview}</h4>
      </Row>
      <Row>
        {" "}
        <p className="synop">Synopsis</p>{" "}
      </Row>
      <Row>
        <p className="para">{detail.overview}.</p>
      </Row>
    </Col>
  );
};
export default MoviesDescription;
