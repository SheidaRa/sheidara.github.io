import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const UXPortfolioCard = ({
  project,
  tools,
  image = "images/placeholder.jpg",
  handleToggleExpansion,
  hovername = " Design and More... ",
}) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <>
      <div className="portfolio-card" onClick={handleToggleExpansion}>
        <div className="portfolio-img" style={divStyle}>
          <div className="portfolio-content">
            <span className="design"> {hovername} </span>
          </div>
        </div>
      </div>
      <div>
        <h2 className="custom-card-title">{project}</h2>
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
