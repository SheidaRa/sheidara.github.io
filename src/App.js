// imports to use bootstrap for responsiveness and carousel, fontawesome for icons
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "bootstrap/js/src/scrollspy.js";
import Carousel from 'react-bootstrap/Carousel';
import EducationCard from './Components/EducationCard';
import WorkCard from './Components/WorkCard';
import PortfolioCard from './Components/PortfolioCard';

function App() {

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    // container is a bootstrap class, bootstrap basicaly makes responsiveness easy to implement dividing the webpage in 12 colummns u can play with depending on screen size
    <div>

      {/* DESKTOP PART */}
      <div className='container desktop'>

        {/* That's the navbar */}
        <nav className="navbar fixed-top navbar-expand-lg">
          <div className='container'>
            <div id="scrollspy1" className="sticky-top col-lg-8 offset-lg-2">
              <ul className="nav menu-sidebar ps-2">
                <li className="nav-item">
                  {/* This means when u clink a link in the navbar, u change the section and u show the link as active to see which section is activated*/}
                  <a className={`nav-link ${activeSlide === 0 ? 'active' : ''}`} onClick={() => handleSlideClick(0)}>About</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSlide === 1 ? 'active' : ''}`} onClick={() => handleSlideClick(1)}>Education</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSlide === 2 ? 'active' : ''}`} onClick={() => handleSlideClick(2)}>Work Experience</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSlide === 3 ? 'active' : ''}`} onClick={() => handleSlideClick(3)}>Development Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link ${activeSlide === 4 ? 'active' : ''}`} onClick={() => handleSlideClick(4)}>UX Portfolio</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Carousel interval={null} activeIndex={activeSlide} onSelect={(index) => handleSlideClick(index)} fade={true} controls={false} indicators={false} >
          <Carousel.Item>
            {/* About section */}
            <section className='section section-center'>

              {/* We use row class to use multiple columns side to side */}
              <div className='row'>

                {/* that's the 1st column, the one with the text */}
                <div className='col-lg-4 offset-lg-2'>
                  <div className='presentation'>
                    <div className='hello'>Hello, I am</div>
                    <h1>Sheida Rashidi</h1>
                    <h2>Developer / Designer</h2>
                    <p>I am a passionate individual with a strong affinity for development, AI, and UX design, particularly in the domains of accessibility and inclusion. I thrive on creating digital experiences that empower and cater to diverse user needs. With a deep understanding of both technical aspects and user-centric design principles, I strive to bridge the gap between innovation and inclusivity, ensuring that technology is accessible and enriching for all individuals.</p>
                    <a className='button' href='files/SRA_resume_1.pdf' target='blank'>
                      <span>Get my resume</span><FontAwesomeIcon icon={faFileLines} />
                    </a>
                  </div>
                </div>

                {/* Second column with the image, we use the my-image class div to display the image as the bg-image, it was required to apply the fade effect at the bottom of it
              it's normal if it's empty */}
                <div className='col-lg-4 '>
                  <div className='my-image'>

                  </div>
                </div>

              </div>

            </section>
          </Carousel.Item>

          <Carousel.Item>
            {/* Education Section */}
            <section className='section'>

              <div className='row'>

                <div className='col-lg-4 offset-lg-2'>

                 

                  <EducationCard school={'Macalester College'} place={'United States of America'} degree={'Bachelors in Computer Scirnce with a Minor in Psychology'} image={'images/schools/Mac.jpg'} />

                </div>

                <div className='col-lg-4'>

                  <EducationCard school={'University of Bradford'} place={'United Kingdom'} degree={'Study Abroud Program'} image={'images/schools/bradford.jpg'} />

                </div>

                <div className='col-lg-4 offset-lg-2'>

                  <EducationCard school={'Li Po Chun Unted World College of Hong Kong'} place={'Hong Kong'} degree={'International Baccalaureate Diploma'} image={'images/schools/LPC.jpeg'} />

                </div>

              </div>

            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className='section'>

              <div className='row'>

              <div className='col-lg-4 offset-lg-2'>

                <WorkCard experience={'Software Developer, UX Designer and Marketing Intern'} place={'Easy EMDR. MN'} date={'June 2023 – August 2023'} image={'/images/places/easyemdr.png'} />

                </div>

                <div className='col-lg-4'>

                <WorkCard experience={'Software Developer and UX Designer Intern'} place={'GogyUp Inc. MN '} date={' June 2022 - August 2022'} image={'images/places/gogyup.png'} />

                </div>

                <div className='col-lg-4 offset-lg-2'>

                  <WorkCard experience={'Teaching Assistant for Algorithm Design & Analysis & Python'} place={'Macalester College, MN'} date={' January 2022 – May 2023'} image={'images/schools/Mac.jpg'} />

                </div>

                <div className='col-lg-4'>

                  <WorkCard experience={'Digital Resources Center Lab Assistant'} place={'Macalester College, MN'} date={' June 2022 - August 2022'} image={'images/places/drc.jpg'} />

                </div>

                <div className='col-lg-4 offset-lg-2'>

                  <WorkCard experience={'Google Women Techmakers Ambassador & Student Developer Club Leader'} place={'Macalester College, MN'} date={' July 2022 – Present'} image={'images/places/google.png'}/>

                </div>

                <div className='col-lg-4'>

                  <WorkCard experience={'Social Media Manager and Committee Member'} place={'United World College Iran National Committee, Remote'} date={' December 2020 – Present'} image={'images/places/uwc.png'}/>

                </div>
                <div className='col-lg-4 offset-lg-2'>

                <WorkCard experience={'Resident Assistant'} place={'Macalester College, MN'} date={' January 2022 – May 23'} image={'images/places/dorm.jpg'}/>

                </div>

                <div className='col-lg-4'>

                <WorkCard experience={'Student Government Diversity and Inclusion Officer'} place={'Macalester College, MN'} date={' November 2021 - May 2022'} image={'images/places/mcsg.png'}/>

                </div>
              </div>

            </section>
          </Carousel.Item>
          {/* Development portfolio section */}
          <Carousel.Item>
            <section className='section'>

              <div className='row'>

              <div className='col-lg-4 offset-lg-2'>

                <PortfolioCard project={'Sign Language Recognizer'} tools={['Python', 'Media Pipe']} link={'https://github.com/SheidaRa'} image={'images/projects/hand.png'} />

                </div>

                <div className='col-lg-4'>

                <PortfolioCard project={'Tetris Puzzle App'} tools={['Swift', 'XCode', 'SpriteKit']} link={'https://github.com/SheidaRa/TetrisGame'} image={'images/projects/tetris.png'} />


                </div>

                <div className='col-lg-4 offset-lg-2'>

                  <PortfolioCard project={'ChromaVR'} tools={['A-Frame', 'JavaScript', 'HTML']} link={'https://github.com/SheidaRa/'} image={'images/projects/chroma.png'} />

                </div>

                <div className='col-lg-4'>

                  <PortfolioCard project={'Online Portfolio'} tools={['React', 'NextJS', 'JavaScript']} link={'https://github.com/SheidaRa/SheidaRa.github.io'} image={'images/projects/portfolio.png'} />


                </div>

                <div className='col-lg-4 offset-lg-2'>

                  <PortfolioCard project={'Sudoku Solver'} tools={['Python', 'Backtracking']} link={'https://github.com/SheidaRa/SudokuPuzzle'} image={'images/projects/sudoku.png'} />


                </div>

                <div className='col-lg-4'>

                  <PortfolioCard project={'Fantasy Safe'} tools={['Java', 'AndroidStudio']} link={'https://github.com/SheidaRa/Fantasy-Safe'} image={'images/projects/fantasySafe.jpg'} />


                </div>

                <div className='col-lg-4 offset-lg-2'>

                  <PortfolioCard project={'Smart Mailbox'} tools={['Python', 'RaspberryPi', 'IoT']} link={'https://github.com/SheidaRa/Smart-Mail-Box'} image={'images/projects/mailBox.jpg'} />

                </div>

               
                <div className='col-lg-4'>

                  <PortfolioCard project={'My Planner Application'} tools={['Java']} link={'https://github.com/SheidaRa/MyPlanner'} image={'images/projects/planner.png'} />

                </div>

              </div>

            </section>
          </Carousel.Item>
          {/* UX Portfolio Section */}
          <Carousel.Item>
            <section className='section'>

              <div className='row'>
                <div className='col-lg-4 offset-lg-2'>
                <PortfolioCard project={'TouchChat Application Redesign'} tools={['Figma']} link={'#'} image={'images/projects/hci.png'} />


                </div>

                <div className='col-lg-4'>
                <PortfolioCard project={'Online Portfolio'} tools={['React', 'NextJS', 'JavaScript']} link={'https://github.com/SheidaRa/SheidaRa.github.io'} image={'images/projects/portfolio.png'} />


                </div>

                <div className='col-lg-4 offset-lg-2'>
                <PortfolioCard project={'ChromaVR'} tools={['A-Frame', 'JavaScript', 'HTML']} link={'https://github.com/SheidaRa/'} image={'images/projects/chroma.png'} />


                </div>

                <div className='col-lg-4'>

                <PortfolioCard project={'Tetris Puzzle App'} tools={['Swift', 'XCode', 'SpriteKit']} link={'https://github.com/SheidaRa/TetrisGame'} image={'images/projects/tetris.png'} />

                </div>

              </div>


            </section>
          </Carousel.Item>
        </Carousel>


      </div>

      {/* MOBILE PART - ONLY DISPLAYS ON PHONE, NOT A SLIDER, USES SCROLL */}
      <div className='container mobile'>

        <section className='section-center'>

          {/* We use row class to use multiple columns side to side */}
          <div className='row'>

            {/* that's the 1st column, the one with the text */}
            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>
              <div className='presentation'>
                <div className='hello'>Hello, I am</div>
                <h1>Sheida Rashidi</h1>
                <h2>Developer / Designer</h2>
                <p>I am a passionate individual with a strong affinity for development, AI, and UX design, particularly in the domains of accessibility and inclusion. I thrive on creating digital experiences that empower and cater to diverse user needs. With a deep understanding of both technical aspects and user-centric design principles, I strive to bridge the gap between innovation and inclusivity, ensuring that technology is accessible and enriching for all individuals.</p>
                <button className='button'>
                  <span>Get my resume</span><FontAwesomeIcon icon={faFileLines} />
                </button>
              </div>
            </div>

            {/* Second column with the image, we use the my-image class div to display the image as the bg-image, it was required to apply the fade effect at the bottom of it
        it's normal if it's empty */}
            <div className='col-lg-4 '>
              <div className='my-image'>

              </div>
            </div>

          </div>

        </section>

        <section className='section-mobile'>
          <div className='col-lg-8 offset-lg-2 col-10 offset-1'>
            <h2 className='section-title'>Education</h2>
          </div>
          {/* Education title */}

          {/* Basically this means display 2 education cards max on the same row  */}
          <div className='row'>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <EducationCard school={'Macalester College'} place={'United States of America'} image={'images/schools/Mac.jpg'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <EducationCard school={'University of Bradford'} place={'United Kingdom'} image={'images/schools/bradford.jpg'} />

            </div>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <EducationCard school={'Li Po Chun Unted World College of Hong Kong'} place={'Hong Kong'} image={'images/schools/LPC.jpeg'} />

            </div>

          </div>

        </section>

        <section className='section-mobile'>
          <div className='col-lg-8 offset-lg-2 col-10 offset-1'>
            <h2 className='section-title'>Work Experience</h2>
          </div>
          <div className='row'>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <WorkCard experience={'Google Student Developer Club Leader'} place={'Macalester College, MN'} image={'images/schools/Mac.jpg'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <WorkCard experience={'Digital Resources Center Lab Assistant'} place={'Macalester College, MN'} image={'images/schools/Mac.jpg'} />

            </div>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <WorkCard experience={'Software Developer and UX Designer'} place={'GogyUp Inc. MN'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <WorkCard experience={'Social Media Manager'} place={'United World College Iran National Committee, Remote'} />

            </div>

          </div>

        </section>

        <section className='section-mobile'>

          <div className='col-lg-8 offset-lg-2 col-10 offset-1'>
            <h2 className='section-title'>Development Portfolio</h2>
          </div>

          <div className='row'>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <PortfolioCard project={'Tetris Puzzle App'} tools={['Swift', 'XCode', 'SpriteKit']} link={'https://github.com/SheidaRa/TetrisGame'} image={'images/projects/tetris.png'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <PortfolioCard project={'Fantasy Safe'} tools={['Java', 'AndroidStudio']} link={'https://github.com/SheidaRa/Fantasy-Safe'} image={'images/projects/fantasySafe.jpg'} />

            </div>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <PortfolioCard project={'Smart Mailbox'} tools={['Python', 'RaspberryPi', 'IoT']} link={'https://github.com/SheidaRa/Smart-Mail-Box'} image={'images/projects/mailBox.jpg'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <PortfolioCard project={'My Planner Application'} tools={['Java']} link={'https://github.com/SheidaRa/MyPlanner'} image={'images/projects/planner.png'} />

            </div>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <PortfolioCard project={'Sudoku Solver'} tools={['Python', 'Backtracking']} link={'https://github.com/SheidaRa/SudokuPuzzle'} image={'images/projects/sudoku.png'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <PortfolioCard project={'Online Portfolio'} tools={['React', 'NextJS', 'JavaScript']} link={'https://github.com/SheidaRa/SheidaRa.github.io'} image={'images/projects/portfolio.png'} />

            </div>

          </div>

        </section>

        <section className='section-mobile'>

          <div className='col-lg-8 offset-lg-2 col-10 offset-1'>
            <h2 className='section-title'>UX Portfolio</h2>
          </div>

          <div className='row'>
            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <PortfolioCard project={'UX Project 1'} tools={['Ur tool 1', 'Ur tool 2']} link={'#'} image={'images/placeholder.jpg'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <PortfolioCard project={'UX Project 2'} tools={['Ur tool 1', 'Ur tool 2']} link={'#'} image={'images/placeholder.jpg'} />

            </div>

            <div className='col-lg-4 offset-lg-2 col-10 offset-1'>

              <PortfolioCard project={'UX Project 3'} tools={['Ur tool 1', 'Ur tool 2']} link={'#'} image={'images/placeholder.jpg'} />

            </div>

            <div className='col-lg-4 col-10 offset-1'>

              <PortfolioCard project={'UX Project 4'} tools={['Ur tool 1', 'Ur tool 2']} link={'#'} image={'images/placeholder.jpg'} />

            </div>

          </div>


        </section>

      </div>

    </div>

  );
}

export default App;
