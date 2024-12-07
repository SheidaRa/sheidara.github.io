import React from "react";

const WorkCard = ({
  experience,
  place,
  date,
  image = "images/placeholder.jpg",
  handleToggleExpansion,
  hovername = " Involvement details ",
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
      <div className="work-card">
        <h2 className="custom-card-title">{experience}</h2>
        <h4>{place}</h4>
        <h4>{date}</h4>
      </div>
    </>
  );
};

export default WorkCard;
