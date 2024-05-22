import React from "react";

const Navbar = ({ handleSlideClick, activeSlide }) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <div id="scrollspy1" className="sticky-top col-lg-10 offset-lg-1">
          <ul className="nav menu-sidebar ps-2">
            <li className="nav-item">
              <a
                className={`nav-link ${activeSlide === 0 ? "active" : ""}`}
                onClick={() => handleSlideClick(0)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSlide === 3 ? "active" : ""}`}
                onClick={() => handleSlideClick(3)}
              >
                Development Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSlide === 4 ? "active" : ""}`}
                onClick={() => handleSlideClick(4)}
              >
                UX Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSlide === 2 ? "active" : ""}`}
                onClick={() => handleSlideClick(2)}
              >
                Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeSlide === 1 ? "active" : ""}`}
                onClick={() => handleSlideClick(1)}
              >
                Education
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
