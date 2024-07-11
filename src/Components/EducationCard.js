import React from "react";

const EducationCard = ({ school, place, degree, image }) => {
  return (
    <div className="education-card">
      <div className="education-img">
        <img src={image} />
      </div>
      <h2 className="custom-card-title">{school}</h2>
      <h4>{place}</h4>
      <h4>{degree}</h4>
    </div>
  );
};

export default EducationCard;
