import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const RTRDev = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        Rate This Rental is a web platform designed to allow users to submit and
        review feedback on rental properties. The project focuses on providing a
        dynamic and responsive interface, leveraging modern web development
        technologies for functionality and performance. The site integrates
        front-end and back-end systems to ensure secure and accurate data
        handling.
      </p>
      <ExpandableImage
        path="https://github.com/SheidaRa/Rate-This-Rental/raw/main/RateYourLandlord%202024-08-04%20at%2016.33.14.gif"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        alt="A gif showcasing a use case of a user leaving a review on a rental via the Rate This Rental Application"
        caption="Rate This Rental navigation demo"
      />

      <h3>Technologies and Tools</h3>
      <ul>
        <li>
          <strong>React:</strong> Used for building a dynamic and modular
          front-end interface with reusable components.
        </li>
        <li>
          <strong>Bootstrap:</strong> Employed for creating a responsive layout,
          ensuring compatibility across various devices and browsers.
        </li>
        <li>
          <strong>JavaScript:</strong> Implemented for client-side interactivity
          and front-end logic, including form validation and live updates.
        </li>
        <li>
          <strong>SQL:</strong> Used for backend database integration to manage
          data persistence and secure submission processes.
        </li>
      </ul>

      <h3>Development Process</h3>
      <ul>
        <li>
          <strong>Front-End Development:</strong>
          Led the development of the user interface using React and Bootstrap to
          create a responsive and dynamic experience. React components ensured
          modularity and scalability of the codebase.
        </li>
        <li>
          <strong>Database Integration:</strong>
          Collaborated with backend developers to integrate a SQL-based database
          for storing and retrieving user feedback. Ensured secure handling of
          data submissions through proper query structures and validations.
        </li>
        <li>
          <strong>Form Validation and Live Updates:</strong>
          Implemented real-time front-end form validation to enhance data
          accuracy and improve user experience. Added live update functionality
          to ensure instant feedback on submissions and changes.
        </li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        The Rate This Rental website demonstrates the power of combining modern
        front-end frameworks like React with robust database systems like SQL.
        The integration of responsive design, secure data handling, and dynamic
        user interactions provides a seamless and functional platform for users
        to share and review rental property feedback.
      </p>
    </>
  );
};

export default RTRDev;
