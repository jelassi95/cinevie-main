import React, { useRef } from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import "../styles/Navigation.scss";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const search = useRef();
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">ACCUEIL</Nav.Link>
            <Nav.Link href="/a-propos">A PROPOS</Nav.Link>
            <Nav.Link href="/category">CATÉGORIE</Nav.Link>
          </Nav>
          <div className="d-flex justify-content-center align-items-center gap-5">
            <Form className="d-flex"  >
              <Form.Control 
                ref={search}
                type="search"
                placeholder="Chercher"
                className="me-2"
                aria-label="Search"
              />
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  console.log(search.current.value);
                  navigate(`/recherche?q=${search.current.value}`);
                }}
              >
                chercher
              </Button>
            </Form>
            <NavDropdown
              title="FR"
              id="navbarScrollingDropdown"
              className="dropdown-style"
            >
              <NavDropdown.Item href="#action3">FR</NavDropdown.Item>
              <NavDropdown.Item href="#action4">EN</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/connexion">CONNEXION</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
