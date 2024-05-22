import React from "react";
import WorkCard from "../Components/WorkCard";

const Work = () => {
  return (
    <div className="col-lg-10 offset-lg-1">
      <div
        className="row"
        style={{ position: "relative", justifyContent: "space-evenly" }}
      >
        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={"Research Assistant"}
            place={"Macalester College, MN"}
            date={"February 2024 – Present"}
            image={
              "https://www.computersciencedegreehub.com/wp-content/uploads/2023/07/shutterstock_2284126663-scaled.jpg"
            }
          />
        </div>

        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={"Software Developer, UX Designer and Marketing Intern"}
            place={"Easy EMDR. MN"}
            date={"June 2023 – August 2023"}
            image={"/images/places/easyemdr.png"}
          />
        </div>

        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={"Software Developer and UX Designer Intern"}
            place={"GogyUp Inc. MN "}
            date={"June 2022 - August 2022"}
            image={"images/places/gogyup.png"}
          />
        </div>

        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={
              "Teaching Assistant for Algorithm Design & Analysis & Python"
            }
            place={"Macalester College, MN"}
            date={"January 2022 – May 2023"}
            image={"images/schools/Mac.jpg"}
          />
        </div>

        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={"Digital Resources Center Lab Assistant"}
            place={"Macalester College, MN"}
            date={"June 2022 - January 2024"}
            image={"images/places/drc.jpg"}
          />
        </div>

        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={
              "Google Women Techmakers Ambassador & Student Developer Club Leader"
            }
            place={"Macalester College, MN"}
            date={"July 2022 – Present"}
            image={"images/places/google.png"}
          />
        </div>

        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={"Social Media Manager and Committee Member"}
            place={"United World College Iran National Committee, Remote"}
            date={"December 2020 – Present"}
            image={"images/places/uwc.png"}
          />
        </div>
        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={"Resident Assistant"}
            place={"Macalester College, MN"}
            date={"January 2022 – May 23"}
            image={"images/places/dorm.jpg"}
          />
        </div>

        <div className="col-lg-5 col-10 offset-xsm-1">
          <WorkCard
            experience={"Student Government Diversity and Inclusion Officer"}
            place={"Macalester College, MN"}
            date={" November 2021 - May 2022"}
            image={"images/places/mcsg.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
