import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const PortfolioDev = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        This online portfolio is a website designed to showcase my projects,
        education, work experiences, and career path. It serves as a
        professional platform to present my achievements and skills in an
        organized and visually appealing manner.
      </p>

      <h3>Technologies and Frameworks</h3>
      <ul>
        <li>
          <strong>React</strong>: Used to build the website with a
          component-based architecture to ensure reusability and reduce code
          duplication.
        </li>
        <li>
          <strong>Bootstrap</strong>: Implemented for creating a responsive
          design, ensuring optimal user experience across various devices and
          screen sizes.
        </li>
      </ul>

      <h3>Development Approach</h3>
      <ul>
        <li>
          <strong>Component-Based Architecture:</strong>
          React's component principle was utilized to modularize the codebase.
          This approach simplifies maintenance, enhances readability, and
          facilitates scalability.
        </li>
        <li>
          <strong>Responsive Design:</strong>
          Bootstrap's grid system and utility classes were employed to create a
          layout that adapts seamlessly to different screen sizes, providing a
          consistent and user-friendly experience.
        </li>
        <li>
          <strong>Optimization for Usability:</strong>
          The combination of React and Bootstrap allowed for the creation of
          interactive, responsive, and aesthetically pleasing components,
          ensuring the portfolio is both functional and engaging.
        </li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        This online portfolio effectively showcases my professional journey
        while demonstrating proficiency in modern web development technologies
        such as React and Bootstrap. Its component-based architecture and
        responsive design ensure a scalable, user-friendly platform tailored to
        a professional audience.
      </p>
    </>
  );
};

export default PortfolioDev;
