import React from "react";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFileLines } from "react-icons/fa6";

const About = () => {
  return (
    <section className="section section-center">
      {/* We use row class to use multiple columns side to side */}
      <div className="row">
        {/* that's the 1st column, the one with the text */}
        <div className="col-lg-4 offset-lg-2">
          <div className="presentation">
            {/* <div className="hello">Hello, I am</div> */}
            <h1>Sheida Rashidi</h1>
            <h2>
              Software Developer
              <br />
              UX Designer
            </h2>
            <div className="contact-link">
              <a
                href="https://www.figma.com/@sheidara"
                target="blank"
                title="My Figma"
              >
                <FaFigma />
              </a>
              <a
                href="https://github.com/SheidaRa"
                target="blank"
                title="My Github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sheida-rashidi"
                target="blank"
                title="My Linkedin"
              >
                <FaLinkedin />
              </a>
              <a href="" target="" title="My resume">
                <FaFileLines />
              </a>
            </div>
            <p>
              I am a passionate individual with a strong affinity for
              development, AI, and UX design, particularly in the domains of
              accessibility and inclusion. I thrive on creating digital
              experiences that empower and cater to diverse user needs. With a
              deep understanding of both technical aspects and user-centric
              design principles, I strive to bridge the gap between innovation
              and inclusivity, ensuring that technology is accessible and
              enriching for all individuals.
            </p>
            {/* <a
                        className="button"
                        href="files/Resume.pdf"
                        target="blank"
                      >
                        <span>Get my resume</span>
                        <FontAwesomeIcon icon={faFileLines} />
                      </a> */}
          </div>
        </div>

        {/* Second column with the image, we use the my-image class div to display the image as the bg-image, it was required to apply the fade effect at the bottom of it
                it's normal if it's empty */}
        <div className="col-lg-4 ">
          <div className="my-image"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
