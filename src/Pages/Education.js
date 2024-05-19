import React from "react";
import EducationCard from "../Components/EducationCard";

const Education = () => {
  return (
    <div className="row">
      <div className="col-lg-4 offset-lg-2 col-10 offset-xsm-1">
        <EducationCard
          school={"Macalester College"}
          place={"United States of America"}
          degree={"Bachelors in Computer Scirnce with a Minor in Psychology"}
          image={"images/schools/Mac.jpg"}
        />
      </div>

      <div className="col-lg-4 col-10 offset-xsm-1">
        <EducationCard
          school={"University of Bradford"}
          place={"United Kingdom"}
          degree={"Study Abroud Program"}
          image={"images/schools/bradford.jpg"}
        />
      </div>

      <div className="col-lg-4 offset-lg-2 col-10 offset-xsm-1">
        <EducationCard
          school={"Li Po Chun Unted World College of Hong Kong"}
          place={"Hong Kong"}
          degree={"International Baccalaureate Diploma"}
          image={"images/schools/LPC.jpeg"}
        />
      </div>
    </div>
  );
};

export default Education;
