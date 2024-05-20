import React from "react";
import UXPortfolioCard from "../Components/UXPortfolioCard";
import RTR from "../Writings/RTR";
import HCI from "../Writings/HCI";
import Chroma from "../Writings/Chroma";
import Circle from "../Writings/Circle";
import Tetris from "../Writings/Tetris";
import GogyUp from "../Writings/GogyUp";

const UX = ({ handleToggleExpansion, zoomImage }) => {
  const expandTitle = "Click to expand";
  return (
    <div className="row" style={{ position: "relative" }}>
      <div className="col-lg-4 offset-lg-2 col-10 offset-sm-1">
        <UXPortfolioCard
          project={"Rate This Rental"}
          tools={["Figma"]}
          link={
            "https://www.figma.com/file/WoSJdRMeJluZBMLoDEpz2X/Untitled?type=design&node-id=0%3A1&mode=design&t=YPTkZIedXfOHKz2Y-1"
          }
          image={"images/projects/RTR.jpg"}
          handleToggleExpansion={() => {
            handleToggleExpansion(
              1,
              "RTR",
              <RTR zoomImage={zoomImage} expandTitle={expandTitle} />,
              "https://medium.com/@hadothainguyen.design/redesigning-aac-devices-a-ux-design-project-d8f005ccba01"
            );
          }}
        />
      </div>

      <div className="col-lg-4 col-10 offset-xsm-1">
        <UXPortfolioCard
          project={"TouchChat Application Redesign"}
          tools={["Figma"]}
          link={
            "https://medium.com/@hadothainguyen.design/redesigning-aac-devices-a-ux-design-project-d8f005ccba01"
          }
          image={"images/projects/hci.jpg"}
          handleToggleExpansion={() => {
            handleToggleExpansion(
              2,
              "TouchChat",
              <HCI zoomImage={zoomImage} expandTitle={expandTitle} />,
              "https://medium.com/@hadothainguyen.design/redesigning-aac-devices-a-ux-design-project-d8f005ccba01"
            );
          }}
        />
      </div>

      <div className="col-lg-4 offset-lg-2 col-10 offset-xsm-1">
        <UXPortfolioCard
          project={"Circle Dating App Design"}
          tools={["Figma"]}
          link={
            "https://www.figma.com/file/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?type=design&node-id=0%3A1&mode=design&t=avpU1etV2FY6i0Lp-1"
          }
          image={"images/projects/circle.jpg"}
          handleToggleExpansion={() =>
            handleToggleExpansion(
              3, //unique id
              "Circle", //project title
              <Circle zoomImage={zoomImage} expandTitle={expandTitle} />, //writing
              "https://www.figma.com/design/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?node-id=0-1&t=7CpMnL8BWQNHKrvg-0" //code link
            )
          }
        />
      </div>

      <div className="col-lg-4 col-10 offset-xsm-1">
        <UXPortfolioCard
          project={"Tetris Puzzle App"}
          tools={["Figma", "Canva"]}
          link={
            "https://www.figma.com/file/apY5WhaVTtrDNVomkNDZ9e/Tetris-Puzzle?type=design&node-id=0%3A1&mode=design&t=s09TuVAFIE55qNAH-1"
          }
          image={"images/projects/tetris.jpg"}
          handleToggleExpansion={() =>
            handleToggleExpansion(
              4,
              "Tetris",
              <Tetris zoomImage={zoomImage} expandTitle={expandTitle} />,
              "https://www.figma.com/design/apY5WhaVTtrDNVomkNDZ9e/Tetris-Puzzle?t=wFYlj9dELbKvbBWl-0"
            )
          }
        />
      </div>

      <div className="col-lg-4 offset-lg-2 col-10 offset-xsm-1">
        <UXPortfolioCard
          project={"GogyUp Reader Redesign"}
          tools={["Canva"]}
          link={
            "https://www.canva.com/design/DAFDzmd6c-0/BNVA2W1HbIsnrAKwF8JFPw/view?mode=prototype#untitled-page"
          }
          image={"images/projects/gogyup.jpg"}
          handleToggleExpansion={() =>
            handleToggleExpansion(
              5,
              "GogyUp",
              <GogyUp zoomImage={zoomImage} expandTitle={expandTitle} />,
              "https://www.canva.com/design/DAFDzmd6c-0/BNVA2W1HbIsnrAKwF8JFPw/view?mode=prototype#untitled-page"
            )
          }
        />
      </div>

      <div className="col-lg-4 col-10 offset-xsm-1">
        <UXPortfolioCard
          project={"ChromaVR"}
          tools={["A-Frame", "JavaScript", "HTML"]}
          link={
            "https://medium.com/macalester-hci/how-color-affects-emotions-a-vr-experience-ace8bad5b810"
          }
          image={"images/projects/chroma.jpg"}
          handleToggleExpansion={() =>
            handleToggleExpansion(
              6, //unique id
              "Exploring Emotions in VR", //project title
              <Chroma zoomImage={zoomImage} expandTitle={expandTitle} />, //writing
              "https://www.figma.com/design/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?node-id=0-1&t=7CpMnL8BWQNHKrvg-0" //code link
            )
          }
        />
      </div>
      <div className="col-lg-4 offset-lg-2 col-10 offset-xsm-1">
        <UXPortfolioCard
          project={"Online Portfolio"}
          tools={["Figma"]}
          link={
            "https://www.figma.com/file/dmk03DhK9vyMobZf92XYDt/Portfolio?type=design&node-id=0%3A1&mode=design&t=EC3Fj8neuHeP5ivl-1"
          }
          image={"images/projects/portfolio.jpg"}
          handleToggleExpansion={() => {
            handleToggleExpansion(
              7,
              "TouchChat",
              <HCI zoomImage={zoomImage} expandTitle={expandTitle} />,
              "https://medium.com/@hadothainguyen.design/redesigning-aac-devices-a-ux-design-project-d8f005ccba01"
            );
          }}
        />
      </div>
      <div className="col-lg-4 col-10 offset-xsm-1">
        <UXPortfolioCard
          project={"Glow Girl"}
          tools={["Figma"]}
          link={
            "https://medium.com/macalester-hci/how-color-affects-emotions-a-vr-experience-ace8bad5b810"
          }
          image={"images/projects/Glowgirl.jpg"}
          handleToggleExpansion={() =>
            handleToggleExpansion(
              8, //unique id
              "Exploring Emotions in VR", //project title
              <Chroma zoomImage={zoomImage} expandTitle={expandTitle} />, //writing
              "https://www.figma.com/design/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?node-id=0-1&t=7CpMnL8BWQNHKrvg-0" //code link
            )
          }
        />
      </div>
    </div>
  );
};

export default UX;
