// imports to use bootstrap for responsiveness and carousel, fontawesome for icons
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import "bootstrap/js/src/scrollspy.js";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./Components/Navbar";
import AboutDesktop from "./Pages/AboutDesktop";
import Work from "./Pages/Work";
import Development from "./Pages/Development";
import UX from "./Pages/UX";
import InfoModal from "./Components/InfoModal";
import Education from "./Pages/Education";
import AboutMobile from "./Pages/AboutMobile";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  //info window ref
  const infoRef = useRef(null);

  //Close info window when click outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setExpandedItem(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSlideClick = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  const [expandedItem, setExpandedItem] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [codeLink, setCodeLink] = useState("");

  const handleToggleExpansion = (id, title, content, codeLink) => {
    setTitle(title);
    setContent(content);
    setCodeLink(codeLink);
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      setExpandedItem(id);
    }
  };

  return (
    <div>
      {/* DESKTOP PART */}
      <div className="container desktop">
        <Navbar handleSlideClick={handleSlideClick} activeSlide={activeSlide} />

        <Carousel
          interval={null}
          activeIndex={activeSlide}
          onSelect={(index) => handleSlideClick(index)}
          fade={true}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            <section className="section">
              <AboutDesktop />
            </section>
          </Carousel.Item>

          <Carousel.Item>
            <section className="section">
              <Education />
            </section>
          </Carousel.Item>

          <Carousel.Item>
            <section className="section">
              <Work />
            </section>
          </Carousel.Item>

          <Carousel.Item>
            <section className="section">
              <Development />
            </section>
          </Carousel.Item>

          <Carousel.Item>
            <section className="section">
              <UX handleToggleExpansion={handleToggleExpansion} />
            </section>
          </Carousel.Item>
        </Carousel>
        <InfoModal
          infoRef={infoRef}
          expandedItem={expandedItem}
          codeLink={codeLink}
          setExpandedItem={setExpandedItem}
          title={title}
          content={content}
        />
      </div>

      {/*MOBILE PART */}
      <div className="container mobile">
        <section className="section-center">
          <AboutMobile />
        </section>

        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">Development Portfolio</h2>
          </div>
          <Development />
        </section>

        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">UX Portfolio</h2>
          </div>
          <UX handleToggleExpansion={handleToggleExpansion} />
        </section>

        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">Work Experience</h2>
          </div>
          <Work />
        </section>

        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">Education</h2>
          </div>
          <Education />
        </section>
        <InfoModal
          infoRef={infoRef}
          expandedItem={expandedItem}
          codeLink={codeLink}
          setExpandedItem={setExpandedItem}
          title={title}
          content={content}
        />
      </div>
    </div>
  );
}

export default App;
