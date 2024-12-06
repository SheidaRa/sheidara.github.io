import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Hamburger from "./Hamburger";
import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const CustomNavbar = ({
  expanded,
  handleToggle,
  handleSlideClick,
  activeSlide,
  onRef,
}) => {
  const navbarRef = useRef(null);

  onRef(navbarRef);

  return (
    <Navbar
      expand="md"
      sticky="top"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <Container className="nav-container">
        <Navbar.Brand>
          <img src="favicon.ico" className="nav-brand" alt="Sheida Rashidi" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Hamburger expandedBurger={expanded} onClick={handleToggle} />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" ref={navbarRef}>
          <div className="col-lg-10 offset-lg-1 col-12">
            <Nav className="me-auto">
              <Button
                onClick={() => handleSlideClick(0)}
                className={` nav-link ${activeSlide === 0 ? "active" : ""}`}
              >
                About
              </Button>
              <Button
                onClick={() => handleSlideClick(3)}
                className={` nav-link ${activeSlide === 3 ? "active" : ""}`}
              >
                Development Portfolio
              </Button>
              <Button
                onClick={() => handleSlideClick(4)}
                className={` nav-link ${activeSlide === 4 ? "active" : ""}`}
              >
                UX Portfolio
              </Button>
              <Button
                onClick={() => handleSlideClick(2)}
                className={` nav-link ${activeSlide === 2 ? "active" : ""}`}
              >
                Work Experience
              </Button>
              <Button
                onClick={() => handleSlideClick(1)}
                className={` nav-link ${activeSlide === 1 ? "active" : ""}`}
              >
                Education
              </Button>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
