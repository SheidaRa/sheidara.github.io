import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PortfolioCard = ({
  project,
  tools,
  link,
  image = "images/placeholder.jpg",
}) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <div className="portfolio-card dev-card">
        <div className="portfolio-img" style={divStyle}>
          <div className="portfolio-content">
            <a className="button" href={link} target="blank">
              <span>Get code</span>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h3>{project}</h3>
        <div className="tools">
          {tools.map((tool, index) => (
            <span key={index}>
              <p>{tool}</p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
