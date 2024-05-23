import React from "react";
import EducationCard from "../Components/EducationCard";

const Education = () => {
  return (
    <div className="col-lg-10 offset-lg-1">
      <div
        className="row section-wrapper"
      >
        <div className="col-lg-5 col-md-6">
          <EducationCard
            school={"Macalester College"}
            place={"United States of America"}
            degree={"Bachelors in Computer Science with a Minor in Psychology"}
            image={"images/schools/Mac.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <EducationCard
            school={"University of Bradford"}
            place={"United Kingdom"}
            degree={"Study Abroad Program"}
            image={"images/schools/bradford.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <EducationCard
            school={"Li Po Chun United World College of Hong Kong"}
            place={"Hong Kong"}
            degree={"International Baccalaureate Diploma"}
            image={"images/schools/LPC.jpeg"}
          />
        </div>
        <div className="col-lg-5 col-md-6"></div>
      </div>
    </div>
  );
};

export default Education;
