import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const Chroma = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Technologies Used</h3>
      <ul>
        <li>Python</li>
        <li>MediaPipe</li>
        <li>TensorFlow/Keras</li>
        <li>OpenCV</li>
      </ul>
      <h3>Project Overview</h3>
      <p>
        This project showcases an AI-driven application designed to recognize
        and interpret American Sign Language (ASL) gestures in real-time.
        Utilizing <strong>MediaPipe Studio</strong> for hand tracking and pose
        estimation, the system provides a seamless and highly accurate gesture
        recognition experience.
      </p>
      <ExpandableImage
        path="https://github.com/SheidaRa/Sign-Language-Recogniser/raw/main/Demo.gif"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        alt="A gif showcasing the Sign Language Recognizer in action, analyzing a video input of a person using the American Sign Language and generating an audio output of the translated speech."
        caption="Sign Language Recognizer demo"
      />

      <h3>Key Achievements</h3>
      <ul>
        <li>
          Developed and trained advanced machine learning models using
          TensorFlow/Keras, incorporating optimized data preprocessing to
          enhance performance and accuracy.
        </li>
        <li>
          Built an interactive real-time interface with OpenCV, allowing smooth
          video input integration and intuitive ASL gesture recognition.
        </li>
      </ul>
      <h3>Collaboration and Design</h3>
      <p>
        Collaborated within a team of three to divide responsibilities
        effectively across research, algorithm development, and user experience
        design. This teamwork resulted in a user-friendly application designed
        to make ASL communication more accessible and reliable.
      </p>
    </>
  );
};

export default Chroma;
