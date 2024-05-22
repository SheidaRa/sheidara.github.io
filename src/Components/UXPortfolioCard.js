import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const UXPortfolioCard = ({
  project,
  tools,
  link,
  image = "images/placeholder.jpg",
  handleToggleExpansion,
}) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <div className="portfolio-card" onClick={handleToggleExpansion}>
        <div className="portfolio-img" style={divStyle}>
          <div className="portfolio-content">
            <h4> Design and More... </h4>
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

export default UXPortfolioCard;
