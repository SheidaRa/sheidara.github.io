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
        <div className="col-lg-5 offset-lg-2">
          <div className="presentation">
            {/* <div className="hello">Hello, I am</div> */}
            <h1>Sheida Rashidi</h1>
            <h2>
              {/* Software Developer
              <br />
              UX Designer */}
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
              <a href="files/resume.pdf" target="_blank" title="My resume">
                <FaFileLines />
              </a>
            </div>
            <p>
              A <strong>self-motivated</strong> and{" "}
              <strong>passionate computer scientist</strong> with a strong focus
              on <strong>AI</strong> and{" "}
              <strong>Human-Computer Interaction (HCI)</strong>, dedicated to
              designing technologies that promote <strong>accessibility</strong>{" "}
              and <strong>inclusivity</strong>. With{" "}
              <strong>extensive research experience</strong> in AI and HCI,
              alongside <strong>professional expertise</strong> in{" "}
              <strong>software development</strong>,{" "}
              <strong>data analytics</strong>, and <strong>UX design</strong>, I
              bring a drive for <strong>impactful innovation</strong>.
            </p>
            <p>
              Recognized with <strong>awards</strong> for{" "}
              <strong>academic</strong> and{" "}
              <strong>professional excellence</strong>, I have presented
              projects at showcases and developed solutions that bridge{" "}
              <strong>technology</strong> with <strong>societal needs</strong>.
              My ambition is fueled by{" "}
              <strong>interdisciplinary exploration</strong> and a commitment to
              leading efforts in creating{" "}
              <strong>human-centered AI tools</strong> that deliver{" "}
              <strong>meaningful societal impacts</strong>.
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
