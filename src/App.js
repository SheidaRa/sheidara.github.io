// imports to use bootstrap for responsiveness and carousel, fontawesome for icons
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import "bootstrap/js/src/scrollspy.js";
import Carousel from "react-bootstrap/Carousel";
import CustomNavbar from "./Components/CustomNavbar";
import AboutDesktop from "./Pages/AboutDesktop";
import Work from "./Pages/Work";
import Development from "./Pages/Development";
import UX from "./Pages/UX";
import InfoModal from "./Components/InfoModal";
import Education from "./Pages/Education";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

function App() {
  //active page
  const [activeSlide, setActiveSlide] = useState(0);

  //lightbox
  const [open, setOpen] = useState(false);
  const [slides, setSlides] = useState([]);

  //expanded image zoom
  const zoomRef = useRef(null);

  //burger menu
  const [expanded, setExpanded] = useState(false)
  const navbarRef = useRef(null)

  //info window ref
  const infoRef = useRef(null);

  //Close info window when click outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        infoRef.current &&
        !infoRef.current.contains(event.target) &&
        !event.target.classList.contains("yarl__icon") &&
        !event.target.classList.contains("yarl__button") &&
        event.target.tagName.toLowerCase() !== "path" &&
        !event.target.classList.contains("yarl__fullsize") &&
        !event.target.classList.contains("yarl__slide_image") &&
        !event.target.classList.contains("yarl__slide_title") &&
        !event.target.classList.contains("yarl__slide_captions_container") &&
        !event.target.classList.contains("cardContentHeader") &&
        !event.target.classList.contains("headerLink")
      ) {
        setExpandedItem(0);
      }
      if (
        !event.target.classList.contains("navbar-nav") &&
        !event.target.classList.contains("burger") &&
        !event.target.classList.contains("nav-container") &&
        !event.target.classList.contains("nav-link") &&
        !event.target.classList.contains("nav-brand")
      ) {
        setExpanded(false)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //Change page on nav-link click
  const handleSlideClick = (slideIndex) => {
    setActiveSlide(slideIndex);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };

  const [expandedItem, setExpandedItem] = useState(0);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [codeLink, setCodeLink] = useState("");

  //Handle pop up window on card click
  const handleToggleExpansion = (id, title, content, codeLink) => {
    setTitle(title);
    setContent(content);
    setCodeLink(codeLink);
    if (expandedItem === id) {
      setExpandedItem(null);
    } else {
      if (infoRef.current) {
        infoRef.current.scrollTo(0, 0)
      }
      setExpandedItem(id);
    }
  };

  //Handle image expansion
  const zoomImage = (path, caption) => {
    setOpen(true);
    setSlides([{ src: path, title: caption }]);
  };

  //Close hamburger menu on scroll
  const handleScroll = () => {
    if (navbarRef.current && navbarRef.current.classList.contains('show')) {
      setExpanded(false);
    }
  };

  const handleRef = (ref) => {
    navbarRef.current = ref.current
  }

  //Open burger menu on navbar toggler click
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="page-wrapper" onTouchMove={handleScroll}>
      <CustomNavbar expanded={expanded} handleToggle={handleToggle} handleSlideClick={handleSlideClick} activeSlide={activeSlide} onRef={handleRef} />
      <div className="container">
        <Carousel
          interval={null}
          activeIndex={activeSlide}
          onSelect={(index) => handleSlideClick(index)}
          fade={true}
          controls={false}
          indicators={false}
          touch={false}
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
              <UX
                handleToggleExpansion={handleToggleExpansion}
                zoomImage={zoomImage}
              />
            </section>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* Pop up window */}
      <InfoModal
        ref={infoRef}
        expandedItem={expandedItem}
        codeLink={codeLink}
        setExpandedItem={setExpandedItem}
        title={title}
        content={content}
      />
      {/* Component for expanded images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        zoom={{ ref: zoomRef, maxZoomPixelRatio: 3 }}
        plugins={[Zoom, Captions]}
      />
    </div>
  );
}

export default App;
