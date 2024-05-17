// imports to use bootstrap for responsiveness and carousel, fontawesome for icons
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/js/src/scrollspy.js";
import Carousel from "react-bootstrap/Carousel";
import EducationCard from "./Components/EducationCard";
import WorkCard from "./Components/WorkCard";
import PortfolioCard from "./Components/PortfolioCard";
import UXPortfolioCard from "./Components/UXPortfolioCard";
import Example from "./Writings/Example";
import { RxCross2 } from "react-icons/rx";

function App() {
  const [activeSlide, setActiveSlide] = useState(0);

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
        {/* That's the navbar */}
        <nav className="navbar fixed-top navbar-expand-lg">
          <div className="container">
            <div id="scrollspy1" className="sticky-top col-lg-8 offset-lg-2">
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

        <Carousel
          interval={null}
          activeIndex={activeSlide}
          onSelect={(index) => handleSlideClick(index)}
          fade={true}
          controls={false}
          indicators={false}
        >
          <Carousel.Item>
            {/* About section */}
            <section className="section section-center">
              {/* We use row class to use multiple columns side to side */}
              <div className="row">
                {/* that's the 1st column, the one with the text */}
                <div className="col-lg-4 offset-lg-2">
                  <div className="presentation">
                    <div className="hello">Hello, I am</div>
                    <h1>Sheida Rashidi</h1>
                    <h2>Developer / Designer</h2>
                    <p>
                      I am a passionate individual with a strong affinity for
                      development, AI, and UX design, particularly in the
                      domains of accessibility and inclusion. I thrive on
                      creating digital experiences that empower and cater to
                      diverse user needs. With a deep understanding of both
                      technical aspects and user-centric design principles, I
                      strive to bridge the gap between innovation and
                      inclusivity, ensuring that technology is accessible and
                      enriching for all individuals.
                    </p>
                    <a
                      className="button"
                      href="files/Resume.pdf"
                      target="blank"
                    >
                      <span>Get my resume</span>
                      <FontAwesomeIcon icon={faFileLines} />
                    </a>
                  </div>
                </div>

                {/* Second column with the image, we use the my-image class div to display the image as the bg-image, it was required to apply the fade effect at the bottom of it
              it's normal if it's empty */}
                <div className="col-lg-4 ">
                  <div className="my-image"></div>
                </div>
              </div>
            </section>
          </Carousel.Item>

          <Carousel.Item>
            {/* Education Section */}
            <section className="section">
              <div className="row">
                <div className="col-lg-4 offset-lg-2">
                  <EducationCard
                    school={"Macalester College"}
                    place={"United States of America"}
                    degree={
                      "Bachelors in Computer Scirnce with a Minor in Psychology"
                    }
                    image={"images/schools/Mac.jpg"}
                  />
                </div>

                <div className="col-lg-4">
                  <EducationCard
                    school={"University of Bradford"}
                    place={"United Kingdom"}
                    degree={"Study Abroud Program"}
                    image={"images/schools/bradford.jpg"}
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <EducationCard
                    school={"Li Po Chun Unted World College of Hong Kong"}
                    place={"Hong Kong"}
                    degree={"International Baccalaureate Diploma"}
                    image={"images/schools/LPC.jpeg"}
                  />
                </div>
              </div>
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="section">
              <div className="row">
                <div className="col-lg-4 offset-lg-2">
                  <WorkCard
                    experience={
                      "Software Developer, UX Designer and Marketing Intern"
                    }
                    place={"Easy EMDR. MN"}
                    date={"June 2023 – August 2023"}
                    image={"/images/places/easyemdr.png"}
                  />
                </div>

                <div className="col-lg-4">
                  <WorkCard
                    experience={"Software Developer and UX Designer Intern"}
                    place={"GogyUp Inc. MN "}
                    date={" June 2022 - August 2022"}
                    image={"images/places/gogyup.png"}
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <WorkCard
                    experience={
                      "Teaching Assistant for Algorithm Design & Analysis & Python"
                    }
                    place={"Macalester College, MN"}
                    date={" January 2022 – May 2023"}
                    image={"images/schools/Mac.jpg"}
                  />
                </div>

                <div className="col-lg-4">
                  <WorkCard
                    experience={"Digital Resources Center Lab Assistant"}
                    place={"Macalester College, MN"}
                    date={" June 2022 - August 2022"}
                    image={"images/places/drc.jpg"}
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <WorkCard
                    experience={
                      "Google Women Techmakers Ambassador & Student Developer Club Leader"
                    }
                    place={"Macalester College, MN"}
                    date={" July 2022 – Present"}
                    image={"images/places/google.png"}
                  />
                </div>

                <div className="col-lg-4">
                  <WorkCard
                    experience={"Social Media Manager and Committee Member"}
                    place={
                      "United World College Iran National Committee, Remote"
                    }
                    date={" December 2020 – Present"}
                    image={"images/places/uwc.png"}
                  />
                </div>
                <div className="col-lg-4 offset-lg-2">
                  <WorkCard
                    experience={"Resident Assistant"}
                    place={"Macalester College, MN"}
                    date={" January 2022 – May 23"}
                    image={"images/places/dorm.jpg"}
                  />
                </div>

                <div className="col-lg-4">
                  <WorkCard
                    experience={
                      "Student Government Diversity and Inclusion Officer"
                    }
                    place={"Macalester College, MN"}
                    date={" November 2021 - May 2022"}
                    image={"images/places/mcsg.png"}
                  />
                </div>
              </div>
            </section>
          </Carousel.Item>
          {/* Development portfolio section */}
          <Carousel.Item>
            <section className="section">
              <div className="row">
                <div className="col-lg-4 offset-lg-2">
                  <PortfolioCard
                    project={"Sign Language Recognizer"}
                    tools={["Python", "Media Pipe"]}
                    link={"https://github.com/SheidaRa"}
                    image={"images/projects/hand.png"}
                  />
                </div>

                <div className="col-lg-4">
                  <PortfolioCard
                    project={"Rate This Rental"}
                    tools={["React", "Ruby", "Bootstrap", "Figma"]}
                    link={"https://github.com/SheidaRa/Rate-This-Rental"}
                    image={"images/projects/RTR.png"}
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <PortfolioCard
                    project={"Tetris Puzzle App"}
                    tools={["Swift", "XCode", "SpriteKit"]}
                    link={"https://github.com/SheidaRa/TetrisGame"}
                    image={"images/projects/tetris.png"}
                  />
                </div>

                <div className="col-lg-4">
                  <PortfolioCard
                    project={"ChromaVR"}
                    tools={["A-Frame", "JavaScript", "HTML"]}
                    link={"https://github.com/SheidaRa/"}
                    image={"images/projects/chroma.png"}
                  />
                </div>
                <div className="col-lg-4 offset-lg-2">
                  <PortfolioCard
                    project={"Online Portfolio"}
                    tools={["React", "NextJS", "JavaScript"]}
                    link={"https://github.com/SheidaRa/SheidaRa.github.io"}
                    image={"images/projects/portfolio.png"}
                  />
                </div>
                <div className="col-lg-4">
                  <PortfolioCard
                    project={"Sudoku Solver"}
                    tools={["Python", "Backtracking"]}
                    link={"https://github.com/SheidaRa/SudokuPuzzle"}
                    image={"images/projects/sudoku.png"}
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <PortfolioCard
                    project={"Fantasy Safe"}
                    tools={["Java", "AndroidStudio"]}
                    link={"https://github.com/SheidaRa/Fantasy-Safe"}
                    image={"images/projects/fantasySafe.jpg"}
                  />
                </div>

                <div className="col-lg-4">
                  <PortfolioCard
                    project={"Smart Mailbox"}
                    tools={["Python", "RaspberryPi", "IoT"]}
                    link={"https://github.com/SheidaRa/Smart-Mail-Box"}
                    image={"images/projects/mailBox.jpg"}
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <PortfolioCard
                    project={"My Planner Application"}
                    tools={["Java"]}
                    link={"https://github.com/SheidaRa/MyPlanner"}
                    image={"images/projects/planner.png"}
                  />
                </div>
              </div>
            </section>
          </Carousel.Item>
          {/* UX Portfolio Section */}
          <Carousel.Item>
            <section className="section">
              <div className="row" style={{ position: "relative" }}>
                <div className="col-lg-4 offset-lg-2">
                  <UXPortfolioCard
                    project={"Rate This Rental"}
                    tools={["Figma"]}
                    link={
                      "https://www.figma.com/file/WoSJdRMeJluZBMLoDEpz2X/Untitled?type=design&node-id=0%3A1&mode=design&t=YPTkZIedXfOHKz2Y-1"
                    }
                    image={"images/projects/RTR.png"}
                  />
                </div>

                <div className="col-lg-4">
                  <UXPortfolioCard
                    project={"TouchChat Application Redesign"}
                    tools={["Figma"]}
                    link={
                      "https://medium.com/@hadothainguyen.design/redesigning-aac-devices-a-ux-design-project-d8f005ccba01"
                    }
                    image={"images/projects/hci.png"}
                    handleToggleExpansion={() => {
                      handleToggleExpansion(
                        2,
                        "TouchChat",
                        <Example />,
                        "https://medium.com/@hadothainguyen.design/redesigning-aac-devices-a-ux-design-project-d8f005ccba01"
                      );
                    }}
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <UXPortfolioCard
                    project={"Circle Dating App Design"}
                    tools={["Figma"]}
                    link={
                      "https://www.figma.com/file/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?type=design&node-id=0%3A1&mode=design&t=avpU1etV2FY6i0Lp-1"
                    }
                    image={"images/projects/circle.jpg"}
                    handleToggleExpansion={() =>
                      handleToggleExpansion(
                        3, //unique id
                        "Circle", //project title
                        <Example />, //writing
                        "https://www.figma.com/design/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?node-id=0-1&t=7CpMnL8BWQNHKrvg-0" //code link
                      )
                    }
                  />
                </div>

                <div className="col-lg-4">
                  <UXPortfolioCard
                    project={"Tetris Puzzle App"}
                    tools={["Figma", "Canva"]}
                    link={
                      "https://www.figma.com/file/apY5WhaVTtrDNVomkNDZ9e/Tetris-Puzzle?type=design&node-id=0%3A1&mode=design&t=s09TuVAFIE55qNAH-1"
                    }
                    image={"images/projects/tetris.png"}
                    handleToggleExpansion={() =>
                      handleToggleExpansion(
                        4,
                        "Tetris",
                        <Example />,
                        "https://www.figma.com/design/apY5WhaVTtrDNVomkNDZ9e/Tetris-Puzzle?t=wFYlj9dELbKvbBWl-0"
                      )
                    }
                  />
                </div>

                <div className="col-lg-4 offset-lg-2">
                  <UXPortfolioCard
                    project={"GogyUp Reader Redesign"}
                    tools={["Canva"]}
                    link={
                      "https://www.canva.com/design/DAFDzmd6c-0/BNVA2W1HbIsnrAKwF8JFPw/view?mode=prototype#untitled-page"
                    }
                    image={"images/places/gogyup.png"}
                    handleToggleExpansion={() =>
                      handleToggleExpansion(
                        2,
                        "GogyUp",
                        <Example />,
                        "https://www.canva.com/design/DAFDzmd6c-0/BNVA2W1HbIsnrAKwF8JFPw/view?mode=prototype#untitled-page"
                      )
                    }
                  />
                </div>

                <div className="col-lg-4">
                  <UXPortfolioCard
                    project={"ChromaVR"}
                    tools={["A-Frame", "JavaScript", "HTML"]}
                    link={
                      "https://medium.com/macalester-hci/how-color-affects-emotions-a-vr-experience-ace8bad5b810"
                    }
                    image={"images/projects/chroma.png"}
                  />
                </div>
                <div className="col-lg-4 offset-lg-2">
                  <UXPortfolioCard
                    project={"Online Portfolio"}
                    tools={["Figma"]}
                    link={
                      "https://www.figma.com/file/dmk03DhK9vyMobZf92XYDt/Portfolio?type=design&node-id=0%3A1&mode=design&t=EC3Fj8neuHeP5ivl-1"
                    }
                    image={"images/projects/portfolio.png"}
                  />
                </div>

                <div
                  className={`infoModal col-8 ${
                    expandedItem === 0 ? "hideModal" : "showModal"
                  }`}
                >
                  <div className="cardContentHeader">
                    <a className="codeButton" href={codeLink} target="blank">
                      Get the code
                    </a>
                    <RxCross2
                      onClick={() => setExpandedItem(0)}
                      className="closeIcon"
                    />
                  </div>
                  <h2>{title}</h2>
                  {content}
                </div>
              </div>
            </section>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container mobile">
        <section className="section-center">
          <div className="row">
            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <div className="presentation">
                <div className="hello">Hello, I am</div>
                <h1>Sheida Rashidi</h1>
                <h2>Developer / Designer</h2>
                <p>
                  I am a passionate individual with a strong affinity for
                  development, AI, and UX design, particularly in the domains of
                  accessibility and inclusion. I thrive on creating digital
                  experiences that empower and cater to diverse user needs. With
                  a deep understanding of both technical aspects and
                  user-centric design principles, I strive to bridge the gap
                  between innovation and inclusivity, ensuring that technology
                  is accessible and enriching for all individuals.
                </p>
                <button
                  className="button"
                  href="files/Resume.pdf"
                  target="blank"
                >
                  <span>Get my resume</span>
                  <FontAwesomeIcon icon={faFileLines} />
                </button>
              </div>
            </div>

            {/* Second column with the image, we use the my-image class div to display the image as the bg-image, it was required to apply the fade effect at the bottom of it
        it's normal if it's empty */}
            <div className="col-lg-4 ">
              <div className="my-image"></div>
            </div>
          </div>
        </section>

        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">Development Portfolio</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <PortfolioCard
                project={"Sign Language Recognizer"}
                tools={["Python", "Media Pipe"]}
                link={"https://github.com/SheidaRa"}
                image={"images/projects/hand.png"}
              />
            </div>
            <div className="col-lg-4 col-10 offset-1">
              <PortfolioCard
                project={"Rate This Rental"}
                tools={["React", "Ruby", "Bootstrap", "Figma"]}
                link={"https://github.com/SheidaRa/Rate-This-Rental"}
                image={"images/projects/RTR.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <PortfolioCard
                project={"Tetris Puzzle App"}
                tools={["Swift", "XCode", "SpriteKit"]}
                link={"https://github.com/SheidaRa/TetrisGame"}
                image={"images/projects/tetris.png"}
              />
            </div>
            <div className="col-lg-4 col-10 offset-1">
              <PortfolioCard
                project={"ChromaVR"}
                tools={["A-Frame", "JavaScript", "HTML"]}
                link={"https://github.com/SheidaRa/"}
                image={"images/projects/chroma.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <PortfolioCard
                project={"Online Portfolio"}
                tools={["React", "NextJS", "JavaScript"]}
                link={"https://github.com/SheidaRa/SheidaRa.github.io"}
                image={"images/projects/portfolio.png"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <PortfolioCard
                project={"Sudoku Solver"}
                tools={["Python", "Backtracking"]}
                link={"https://github.com/SheidaRa/SudokuPuzzle"}
                image={"images/projects/sudoku.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <PortfolioCard
                project={"Fantasy Safe"}
                tools={["Java", "AndroidStudio"]}
                link={"https://github.com/SheidaRa/Fantasy-Safe"}
                image={"images/projects/fantasySafe.jpg"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <PortfolioCard
                project={"Smart Mailbox"}
                tools={["Python", "RaspberryPi", "IoT"]}
                link={"https://github.com/SheidaRa/Smart-Mail-Box"}
                image={"images/projects/mailBox.jpg"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <PortfolioCard
                project={"My Planner Application"}
                tools={["Java"]}
                link={"https://github.com/SheidaRa/MyPlanner"}
                image={"images/projects/planner.png"}
              />
            </div>
          </div>
        </section>

        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">UX Portfolio</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <UXPortfolioCard
                project={"Rate This Rental"}
                tools={["Figma"]}
                link={
                  "https://www.figma.com/file/WoSJdRMeJluZBMLoDEpz2X/Untitled?type=design&node-id=0%3A1&mode=design&t=YPTkZIedXfOHKz2Y-1"
                }
                image={"images/projects/RTR.png"}
              />
            </div>
            <div className="col-lg-4 col-10 offset-1">
              <UXPortfolioCard
                project={"TouchChat Application Redesign"}
                tools={["Figma"]}
                link={
                  "https://medium.com/@hadothainguyen.design/redesigning-aac-devices-a-ux-design-project-d8f005ccba01"
                }
                image={"images/projects/hci.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <UXPortfolioCard
                project={"Circle Dating App Design"}
                tools={["Figma"]}
                link={
                  "https://www.figma.com/file/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?type=design&node-id=0%3A1&mode=design&t=avpU1etV2FY6i0Lp-1"
                }
                image={"images/projects/circle.jpg"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <UXPortfolioCard
                project={"Tetris Puzzle App"}
                tools={["Figma", "Canva"]}
                link={
                  "https://www.figma.com/file/apY5WhaVTtrDNVomkNDZ9e/Tetris-Puzzle?type=design&node-id=0%3A1&mode=design&t=s09TuVAFIE55qNAH-1"
                }
                image={"images/projects/tetris.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <UXPortfolioCard
                project={"GogyUp Reader Redesign"}
                tools={["Canva"]}
                link={
                  "https://www.canva.com/design/DAFDzmd6c-0/BNVA2W1HbIsnrAKwF8JFPw/view?mode=prototype#untitled-page"
                }
                image={"images/places/gogyup.png"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <UXPortfolioCard
                project={"ChromaVR"}
                tools={["A-Frame", "JavaScript", "HTML"]}
                link={
                  "https://medium.com/macalester-hci/how-color-affects-emotions-a-vr-experience-ace8bad5b810"
                }
                image={"images/projects/chroma.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <UXPortfolioCard
                project={"Online Portfolio"}
                tools={["Figma"]}
                link={
                  "https://www.figma.com/file/dmk03DhK9vyMobZf92XYDt/Portfolio?type=design&node-id=0%3A1&mode=design&t=EC3Fj8neuHeP5ivl-1"
                }
                image={"images/projects/portfolio.png"}
              />
            </div>
          </div>
        </section>
        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <WorkCard
                experience={
                  "Software Developer, UX Designer and Marketing Intern"
                }
                place={"Easy EMDR. MN"}
                date={"June 2023 – August 2023"}
                image={"/images/places/easyemdr.png"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <WorkCard
                experience={"Software Developer and UX Designer Intern"}
                place={"GogyUp Inc. MN "}
                date={" June 2022 - August 2022"}
                image={"images/places/gogyup.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <WorkCard
                experience={
                  "Teaching Assistant for Algorithm Design & Analysis & Python"
                }
                place={"Macalester College, MN"}
                date={" January 2022 – May 2023"}
                image={"images/schools/Mac.jpg"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <WorkCard
                experience={"Digital Resources Center Lab Assistant"}
                place={"Macalester College, MN"}
                date={" June 2022 - August 2022"}
                image={"images/places/drc.jpg"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <WorkCard
                experience={
                  "Google Women Techmakers Ambassador & Student Developer Club Leader"
                }
                place={"Macalester College, MN"}
                date={" July 2022 – Present"}
                image={"images/places/google.png"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <WorkCard
                experience={"Social Media Manager and Committee Member"}
                place={"United World College Iran National Committee, Remote"}
                date={" December 2020 – Present"}
                image={"images/places/uwc.png"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <WorkCard
                experience={"Resident Assistant"}
                place={"Macalester College, MN"}
                date={" January 2022 – May 23"}
                image={"images/places/dorm.jpg"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <WorkCard
                experience={
                  "Student Government Diversity and Inclusion Officer"
                }
                place={"Macalester College, MN"}
                date={" November 2021 - May 2022"}
                image={"images/places/mcsg.png"}
              />
            </div>
          </div>
        </section>
        <section className="section-mobile">
          <div className="col-lg-8 offset-lg-2 col-10 offset-1">
            <h2 className="section-title">Education</h2>
          </div>
          {/* Education title */}

          <div className="row">
            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <EducationCard
                school={"Macalester College"}
                place={"United States of America"}
                image={"images/schools/Mac.jpg"}
              />
            </div>

            <div className="col-lg-4 col-10 offset-1">
              <EducationCard
                school={"University of Bradford"}
                place={"United Kingdom"}
                image={"images/schools/bradford.jpg"}
              />
            </div>

            <div className="col-lg-4 offset-lg-2 col-10 offset-1">
              <EducationCard
                school={"Li Po Chun Unted World College of Hong Kong"}
                place={"Hong Kong"}
                image={"images/schools/LPC.jpeg"}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
