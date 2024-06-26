import React from "react";
import PortfolioCard from "../Components/PortfolioCard";

const Development = () => {
  return (
    <div className="col-lg-10 offset-lg-1">
      <div
        className="row section-wrapper"
      >
        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"Sign Language Recognizer"}
            tools={["Python", "Media Pipe"]}
            link={"https://github.com/SheidaRa/Sign-Language-Recogniser"}
            image={"images/projects/SLR.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"Rate This Rental"}
            tools={["React", "Ruby", "Bootstrap", "Figma"]}
            link={"https://github.com/SheidaRa/Rate-This-Rental"}
            image={"images/projects/RTR.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"Tetris Puzzle App"}
            tools={["Swift", "XCode", "SpriteKit"]}
            link={"https://github.com/SheidaRa/TetrisGame"}
            image={"images/projects/tetris.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"ChromaVR"}
            tools={["A-Frame", "JavaScript", "HTML"]}
            link={"https://github.com/SheidaRa/ChromaVR"}
            image={"images/projects/chroma.jpg"}
          />
        </div>
        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"Online Portfolio"}
            tools={["React", "NextJS", "JavaScript"]}
            link={"https://github.com/SheidaRa/SheidaRa.github.io"}
            image={"images/projects/portfolio.jpg"}
          />
        </div>
        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"Sudoku Solver"}
            tools={["Python", "Backtracking"]}
            link={"https://github.com/SheidaRa/SudokuPuzzle"}
            image={"images/projects/sudoku.png"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"Fantasy Safe"}
            tools={["Java", "AndroidStudio"]}
            link={"https://github.com/SheidaRa/Fantasy-Safe"}
            image={"images/projects/fantasySafe.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"Smart Mailbox"}
            tools={["Python", "RaspberryPi", "IoT"]}
            link={"https://github.com/SheidaRa/Smart-Mail-Box"}
            image={"images/projects/mailBox.jpg"}
          />
        </div>

        <div className="col-lg-5 col-md-6">
          <PortfolioCard
            project={"My Planner Application"}
            tools={["Java"]}
            link={"https://github.com/SheidaRa/MyPlanner"}
            image={"images/projects/planner.png"}
          />
        </div>
        <div className="col-lg-5 col-md-6"></div>
      </div>
    </div>
  );
};

export default Development;
