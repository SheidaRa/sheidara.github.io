import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const ChromaDev = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/wN_euOtl1FE?si=Kg4QoSiE542QDtPU"
        title="YouTube video player"
        frameborder="0"
        className="video-iframe"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <p>
        Link to prototype:{" "}
        <a href="https://anguyen6262.github.io/Red/">
          https://anguyen6262.github.io/Red/
        </a>
      </p>
      <p>
        Disclaimer: To run this program on iPhone, please download Google Chrome
        or Firefox.
      </p>
      <p>
        <strong>Video demonstration of our final prototype</strong>
      </p>
      <h3>Overview</h3>
      <p>
        ChromaVR is an immersive virtual reality (VR) application designed to
        explore the impact of colors on user emotions and behaviors. The project
        combines research and interactive design to create an engaging VR game
        experience. It was developed collaboratively by a team of four, with
        roles distributed across environment design, user interaction scripting,
        and data collection.
      </p>

      <h3>Technologies and Tools</h3>
      <ul>
        <li>
          <strong>A-Frame Framework: </strong> Used to design and develop VR
          environments with HTML-like syntax for rapid prototyping.
        </li>
        <li>
          <strong>JavaScript:</strong> Implemented to add interactive features
          and handle user interactions within the VR environment.
        </li>
        <li>
          <strong>HTML:</strong> Structured the foundation of the VR application
          using A-Frame's component-based approach.
        </li>
      </ul>

      <h3>Development Process</h3>
      <ul>
        <li>
          <strong>Research and Data Collection:</strong>
          Conducted research on the psychological effects of colors, collecting
          data on how specific hues influence user emotions and behaviors in
          virtual spaces.
        </li>
        <li>
          <strong>Environment Design:</strong>
          Created an engaging and visually appealing VR environment using
          A-Frame's entity-component system, focusing on immersive interaction.
        </li>
        <li>
          <strong>User Interaction Scripting:</strong>
          Developed scripts using JavaScript to enhance interactivity, allowing
          users to interact with the environment dynamically and intuitively.
        </li>
        <li>
          <strong>Collaboration:</strong>
          Balanced team roles to ensure efficient progress, with each member
          contributing to specific aspects such as environment creation,
          interactivity, and data analysis.
        </li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        ChromaVR showcases the potential of virtual reality to study and
        influence user emotions and behaviors. By leveraging the A-Frame
        framework and JavaScript for interactivity, the project achieved an
        engaging and research-driven VR application, emphasizing teamwork and
        innovative design.
      </p>
    </>
  );
};

export default ChromaDev;
