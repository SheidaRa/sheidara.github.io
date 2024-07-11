import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Hamburger from './Hamburger';
import React, { useRef } from 'react';

const CustomNavbar = ({ expanded, handleToggle, handleSlideClick, activeSlide, onRef }) => {

  const navbarRef = useRef(null)

  onRef(navbarRef)

  return (
    <Navbar expand="md" sticky='top' expanded={expanded} onToggle={handleToggle}>
      <Container className='nav-container'>
        <Navbar.Brand>
          <img src="favicon.ico" className='nav-brand' alt='Sheida Rashidi' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" children={<Hamburger expandedBurger={expanded} />} />
        <Navbar.Collapse id="basic-navbar-nav" ref={navbarRef}>
          <div className='col-lg-10 offset-lg-1 col-12'>
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleSlideClick(0)} className={`${activeSlide === 0 ? "active" : ""}`}>About</Nav.Link>
              <Nav.Link onClick={() => handleSlideClick(3)} className={`${activeSlide === 3 ? "active" : ""}`}>Development Portfolio</Nav.Link>
              <Nav.Link onClick={() => handleSlideClick(4)} className={`${activeSlide === 4 ? "active" : ""}`} >UX Portfolio</Nav.Link>
              <Nav.Link onClick={() => handleSlideClick(2)} className={`${activeSlide === 2 ? "active" : ""}`} >Work Experience</Nav.Link>
              <Nav.Link onClick={() => handleSlideClick(1)} className={`${activeSlide === 1 ? "active" : ""}`} >Education</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;