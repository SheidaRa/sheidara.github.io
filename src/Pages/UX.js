import React from "react";
import UXPortfolioCard from "../Components/UXPortfolioCard";
import RTR from "../Writings/RTR";
import HCI from "../Writings/HCI";
import Chroma from "../Writings/Chroma";
import Circle from "../Writings/Circle";
import Tetris from "../Writings/Tetris";
import GogyUp from "../Writings/GogyUp";
import GlowGirl from "../Writings/GlowGirl";
import Portfolio from "../Writings/Portfolio";

const UX = ({ handleToggleExpansion, zoomImage }) => {
  const expandTitle = "Click to expand";
  return (
    <div className="col-lg-10 offset-lg-1">
      <div
        className="row section-wrapper"
      >
        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Rate This Rental Web Application"}
            tools={["Figma"]}
            image={"images/projects/RTR.jpg"}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                1,
                "Rate This Rental Web Application",
                <RTR zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://www.figma.com/file/WoSJdRMeJluZBMLoDEpz2X/Untitled?type=design&node-id=0%3A1&mode=design&t=YPTkZIedXfOHKz2Y-1"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"TouchChat Application Redesign"}
            tools={["Figma"]}
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

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"ChromaVR"}
            tools={["A-Frame", "JavaScript", "HTML"]}
            image={"images/projects/chroma.jpg"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                6, //unique id
                "Exploring Emotions in VR", //project title
                <Chroma zoomImage={zoomImage} expandTitle={expandTitle} />, //writing
                "https://medium.com/macalester-hci/how-color-affects-emotions-a-vr-experience-ace8bad5b810" //code link
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Circle Dating App Design"}
            tools={["Figma"]}
            image={"images/projects/circle.jpg"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                3, //unique id
                "Circle Dating App Design", //project title
                <Circle zoomImage={zoomImage} expandTitle={expandTitle} />, //writing
                "https://www.figma.com/design/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?node-id=0-1&t=7CpMnL8BWQNHKrvg-0" //code link
              )
            }
          />
        </div>
       
        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"GogyUp Reader Redesign"}
            tools={["Figama"]}
            image={"images/projects/gogyup.jpg"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                5,
                "GogyUp",
                <GogyUp zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://www.figma.com/community/file/1373182183775895767/gogyup-reader-redesign"
              )
            }
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Tetris Puzzle App"}
            tools={["Figma"]}
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



        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Online Portfolio"}
            tools={["Figma"]}
            image={"images/projects/portfolio.jpg"}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                7,
                "Online Portfolio",
                <Portfolio zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://www.figma.com/file/dmk03DhK9vyMobZf92XYDt/Portfolio?type=design&node-id=0%3A1&mode=design&t=EC3Fj8neuHeP5ivl-1"
              );
            }}
          />
        </div>
        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Glow Girl"}
            tools={["Figma"]}
            image={"images/projects/GlowGirl.jpg"}
            handleToggleExpansion={() =>
              handleToggleExpansion(
                8, //unique id
                "Glow Girl", //project title
                <GlowGirl zoomImage={zoomImage} expandTitle={expandTitle} />, //writing
                "https://www.figma.com/design/cU2DtWzaQ07SdjGAH9qu5h/Glow-Girl-Woman-health-Education-Web-App?node-id=0-1&t=swNqaMHBQg5bE334-0" //code link
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UX;
