import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons/faFileLines";

const AboutMobile = () => {
  return (
    <div className="row">
      <div className="col-lg-4 offset-lg-2 col-10 offset-1">
        <div className="presentation">
          <div className="hello">Hello, I am</div>
          <h1>Sheida Rashidi</h1>
          <h2>Developer / Designer</h2>
          <p>
            I am a passionate individual with a strong affinity for development,
            AI, and UX design, particularly in the domains of accessibility and
            inclusion. I thrive on creating digital experiences that empower and
            cater to diverse user needs. With a deep understanding of both
            technical aspects and user-centric design principles, I strive to
            bridge the gap between innovation and inclusivity, ensuring that
            technology is accessible and enriching for all individuals.
          </p>
          <button className="button" href="files/Resume.pdf" target="blank">
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
  );
};

export default AboutMobile;
