import React from "react";
import WorkCard from "../Components/WorkCard";
import HCIAssistant from "../Writings/Work/HCIAssistant";
import EMDR from "../Writings/Work/EMDR";
import GogyUp from "../Writings/Work/GogyUp";
import TeachingAssistant from "../Writings/Work/TeachingAssistant";
import Google from "../Writings/Work/Google";
import UWC from "../Writings/Work/UWC";
import ResidentAssistant from "../Writings/Work/ResidentAssistant";
import InclusionOfficer from "../Writings/Work/InclusionOfficer";
import AIAssistant from "../Writings/Work/AIAssistant";
import LabAssistant from "../Writings/Work/LabAssistant";
import Blackrock from "../Writings/Work/Blackrock";

const Work = ({ handleToggleExpansion, zoomImage }) => {
  const expandTitle = "Click to expand";
  return (
    <div className="col-lg-10 offset-lg-1">
      <div className="row section-wrapper">
        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Intern"}
            place={"Blackrock Neurotech, UT"}
            date={"Starting January 2025"}
            image="https://cdn.prod.website-files.com/601eb8df9b255fadfdab90e5/61a790b92e49a64260054a98_Group%20329.png"
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Intern at Blackrock Neurotech",
                <Blackrock zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Artificial Intelligence Research Assistant"}
            place={"Macalester College, MN"}
            date={"May 2024 – Present"}
            image={
              "https://img.freepik.com/free-photo/futuristic-ai-technology-microchip-advanced-innovation-digital-remix_53876-124694.jpg?t=st=1733590786~exp=1733594386~hmac=727e81dfad6841c3554f569e88a809862d61bcc82a0121614776a2ded40fb7c0&w=1380"
            }
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Artificial Intelligence Research Assistant",
                <AIAssistant zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Human-Computer Interaction Research Assistant"}
            place={"Macalester College, MN"}
            date={"February 2024 – May 2024"}
            image={
              "https://www.computersciencedegreehub.com/wp-content/uploads/2023/07/shutterstock_2284126663-scaled.jpg"
            }
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Human-Computer Interaction Research Assistant",
                <HCIAssistant zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Software Developer, UX Designer and Marketing Intern"}
            place={"Easy EMDR. MN"}
            date={"June 2023 – August 2023"}
            image={"/images/places/easyemdr.png"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Software Developer, UX Designer, and Marketing Intern",
                <EMDR zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Software Developer and UX Designer Intern"}
            place={"GogyUp Inc. MN "}
            date={"June 2022 - August 2022"}
            image={"images/places/gogyup.png"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Software Developer and UX Designer Intern",
                <GogyUp zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={
              "Teaching Assistant for Algorithm Design & Analysis & Python"
            }
            place={"Macalester College, MN"}
            date={"January 2023 – May 2023"}
            image={"images/schools/Mac.jpg"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Teaching Assistant for Algorithm Design & Analysis & Python",
                <TeachingAssistant
                  zoomImage={zoomImage}
                  expandTitle={expandTitle}
                />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Digital Resources Center Lab Assistant"}
            place={"Macalester College, MN"}
            date={"August 2020 - January 2024"}
            image={"images/places/drc.jpg"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Digital Resources Center Lab Assistant",
                <LabAssistant zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={
              "Google Women Techmakers Ambassador & Student Developer Club Leader"
            }
            place={"Macalester College, MN"}
            date={"July 2022 – Present"}
            image={"images/places/google.png"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Google Women Techmakers Ambassador & Student Developer Club Leader",
                <Google zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Social Media Manager and Committee Member"}
            place={"United World College Iran National Committee, Remote"}
            date={"December 2020 – Present"}
            image={"images/places/uwc.png"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Social Media Manager and Committee Member",
                <UWC zoomImage={zoomImage} expandTitle={expandTitle} />
              )
            }
          />
        </div>
        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Resident Assistant"}
            place={"Macalester College, MN"}
            date={"January 2022 – May 23"}
            image={"images/places/dorm.jpg"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Resident Assistant",
                <ResidentAssistant
                  zoomImage={zoomImage}
                  expandTitle={expandTitle}
                />
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <WorkCard
            experience={"Student Government Diversity and Inclusion Officer"}
            place={"Macalester College, MN"}
            date={" November 2021 - May 2022"}
            image={"images/places/mcsg.png"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "Student Government Diversity and Inclusion Officer",
                <InclusionOfficer
                  zoomImage={zoomImage}
                  expandTitle={expandTitle}
                />
              )
            }
          />
        </div>
        <div className="col-lg-5 col-md-6"></div>
      </div>
    </div>
  );
};

export default Work;
