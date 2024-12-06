import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const RTRDev = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Technologies Used</h3>
      <ul>
        <li>React Native</li>
        <li>Firebase</li>
        <li>NativeWind</li>
      </ul>
      <h3>Project Overview</h3>
      <p>
        Circle is a cross-platform mobile app designed to connect users with
        groups based on shared interests and personality traits, fostering
        meaningful friendships and social connections. Built with{" "}
        <strong>React Native</strong> and <strong>Expo</strong>, the app offers
        a smooth and intuitive user experience.
      </p>
      <h3>Key Features</h3>
      <ul>
        <li>
          Real-time database functionality and secure authentication powered by
          Firebase, ensuring a seamless user experience.
        </li>
        <li>
          Responsive design and interactive features implemented with
          NativeWind, enhancing engagement and accessibility across devices.
        </li>
        <li>
          Encrypted messaging stored in our database using a SHA-1 key,
          prioritizing user privacy and data security.
        </li>
        <li>
          Push notifications handled via Firebase Functions to keep users
          connected and informed in real time.
        </li>
      </ul>
      <h3>Impact</h3>
      <p>
        This app bridges the gap between technology and human connection,
        creating a platform where users can form lasting relationships in a safe
        and engaging environment.
      </p>
    </>
  );
};

export default RTRDev;
