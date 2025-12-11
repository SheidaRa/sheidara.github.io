import React from "react";
import PortfolioCard from "../Components/PortfolioCard";
import UXPortfolioCard from "../Components/UXPortfolioCard";
import RTRDev from "../Writings/Dev/RTRDev";
import SLG from "../Writings/Dev/SLG";
import TetrisDev from "../Writings/Dev/TetrisDev";
import ChromaDev from "../Writings/Dev/ChromaDev";
import PortfolioDev from "../Writings/Dev/PortfolioDev";
import Sudoku from "../Writings/Dev/Sudoku";
import FantasySafe from "../Writings/Dev/FantasySafe";
import MailBox from "../Writings/Dev/Mailbox";
import MyPlanner from "../Writings/Dev/MyPlanner";
import Mailbox from "../Writings/Dev/Mailbox";
import GlowGirlDev from "../Writings/Dev/GlowGirlDev";
import CircleDev from "../Writings/Dev/CircleDev";

const Development = ({ handleToggleExpansion, zoomImage }) => {
  const expandTitle = "Click to expand";
  const hovername = " Code and More... ";
  return (
    <div className="col-lg-10 offset-lg-1">
      <div className="row row-cols-2 section-wrapper">
        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Sign Language Recognizer"}
            tools={["Python", "Media Pipe"]}
            image={"images/projects/SLR.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                100,
                "Sign Language Recognizer",
                <SLG zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/Sign-Language-Recogniser",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Competitive Analysis Dashboard"}
            tools={["Python", "Media Pipe"]}
            image={"images/projects/SLR.jpg"}
            hovername=""
            // handleToggleExpansion={() => {
            //   handleToggleExpansion(
            //     100,
            //     "Sign Language Recognizer",
            //     <SLG zoomImage={zoomImage} expandTitle={expandTitle} />,
            //     "https://github.com/SheidaRa/Sign-Language-Recogniser",
            //     "Github Repository"
            //   );
            // }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Neural Data Visualization Dashboard"}
            tools={["Python", "Electron"]}
            image={"images/projects/SLR.jpg"}
            hovername={""}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Rate This Rental"}
            tools={["React", "Ruby", "Bootstrap"]}
            image={"images/projects/RTR.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                101,
                "Rate This Rental Web Application",
                <RTRDev zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/Rate-This-Rental",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Tetris Puzzle App"}
            tools={["Swift", "XCode", "SpriteKit"]}
            image={"images/projects/tetris.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                102,
                "Tetris Puzzle App",
                <TetrisDev zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/TetrisGame",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"ChromaVR"}
            tools={["A-Frame", "JavaScript", "HTML"]}
            image={"images/projects/chroma.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                103,
                "ChromaVR",
                <ChromaDev zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/ChromaVR",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Online Portfolio"}
            tools={["React", "Javascript", "CSS"]}
            image={"images/projects/portfolio.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                104,
                "Online Portfolio",
                <PortfolioDev
                  zoomImage={zoomImage}
                  expandTitle={expandTitle}
                />,
                "https://github.com/SheidaRa/SheidaRa.github.io",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Sudoku Solver"}
            tools={["Python", "Backtracking"]}
            image={"images/projects/sudoku.png"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                105,
                "Sudoku Solver",
                <Sudoku zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/SudokuPuzzle",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Fantasy Safe"}
            tools={["Java", "AndroidStudio"]}
            image={"images/projects/fantasySafe.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                106,
                "Fantasy Safe",
                <FantasySafe zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/Fantasy-Safe",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Smart Mailbox"}
            tools={["Python", "RaspberryPi", "IoT"]}
            image={"images/projects/mailBox.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                107,
                "Smart Mailbox",
                <Mailbox zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/Smart-Mail-Box",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"My Planner Application"}
            tools={["Java"]}
            image={"images/projects/planner.png"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                108,
                "My Planner Application",
                <MyPlanner zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/MyPlanner",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Glow Girl"}
            tools={["React", "CSS", "Bootstrap"]}
            image={"images/projects/GlowGirl.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                109,
                "Glow Girl",
                <GlowGirlDev zoomImage={zoomImage} expandTitle={expandTitle} />,
                "https://github.com/SheidaRa/HackTGap",
                "Github Repository"
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <UXPortfolioCard
            project={"Circle Community Building App"}
            tools={["React native", "Nativewind", "Firebase"]}
            image={"images/projects/circle.jpg"}
            hovername={hovername}
            handleToggleExpansion={() => {
              handleToggleExpansion(
                109,
                "Circle Community Building App",
                <CircleDev zoomImage={zoomImage} expandTitle={expandTitle} />
              );
            }}
          />
        </div>

        <div className="col-lg-5 col-md-6"></div>
      </div>
    </div>
  );
};

export default Development;
