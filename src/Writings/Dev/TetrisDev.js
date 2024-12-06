import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const TetrisDev = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        The Tetris Puzzle iOS Application is a modern reimagining of the classic
        Tetris game, featuring an outer space theme and engaging interactive
        elements. Developed using Swift and SpriteKit, Apple’s game development
        framework, the app delivers a dynamic and visually appealing gameplay
        experience. The project was a collaborative effort among a team of three
        students, emphasizing teamwork and innovation.
      </p>
      <ExpandableImage
        path="https://github.com/gyaltsentenzin/TetrisGame/raw/main/Readme%20Assets/gameGif.gif"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        alt="A gif showing how the Tetris Puzzle app plays"
        caption="Tetris Puzzle Demo"
        width="25%"
      />

      <h3>Technologies and Tools</h3>
      <ul>
        <li>
          <strong>Swift:</strong> Used as the primary programming language for
          iOS development.
        </li>
        <li>
          <strong>SpriteKit:</strong> Leveraged for creating dynamic animations,
          interactive elements, and game mechanics.
        </li>
        <li>
          <strong>iOS Framework:</strong> Utilized for platform-specific
          development and deployment.
        </li>
      </ul>
      <h3>Development Process</h3>
      <ul>
        <li>
          <strong>Game Development:</strong>
          Designed and developed game logic, scoring algorithms, and adaptive
          levels to enhance the player experience. The adaptive levels ensured
          progressively challenging gameplay.
        </li>
        <li>
          <strong>User Interface (UI) and User Experience (UX) Design:</strong>
          Led the design of an intuitive and responsive interface, focusing on
          vibrant graphics and seamless user interactions to create an immersive
          experience.
        </li>
        <li>
          <strong>Outer Space Theme:</strong>
          Integrated an outer space aesthetic with dynamic animations, adding a
          unique twist to the classic Tetris game.
        </li>
        <li>
          <strong>Collaboration:</strong>
          Worked in a team of three, dividing responsibilities for game logic,
          animations, and level design to ensure efficient development.
        </li>
      </ul>
      <h3>Conclusion</h3>
      <p>
        The Tetris Puzzle iOS Application is a testament to the versatility of
        SpriteKit and Swift in game development. By combining innovative design,
        responsive UI/UX, and engaging gameplay, the project reimagines a
        classic game for modern audiences while emphasizing teamwork and
        technical expertise.
      </p>
    </>
  );
};

export default TetrisDev;
