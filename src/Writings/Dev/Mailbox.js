import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const Mailbox = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Technologies Used</h3>
      <ul>
        <li>Raspberry Pi</li>
        <li>Python</li>
        <li>Sensors (Motion Sensor)</li>
        <li>SMTP (Email Notifications)</li>
      </ul>
      <h3>Project Overview</h3>
      <p>
        This project introduces an IoT solution designed to notify users when
        their mailbox receives mail. The system uses a Raspberry Pi and a motion
        sensor to monitor the mailbox and sends real-time email notifications,
        making it especially useful for individuals unable to check their
        mailbox regularly or those who want instant updates.
      </p>
      <ExpandableImage
        path="https://raw.githubusercontent.com/SheidaRa/Smart-Mail-Box/refs/heads/main/CircuitDiagram.png"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        alt="A diagram representing the system's circuit"
        caption="Circuit diagram"
      />
      <h3>Key Features</h3>
      <ul>
        <li>
          Motion detection using a sensor connected to the Raspberry Pi,
          accurately identifying when the mailbox is opened.
        </li>
        <li>
          Email notifications with a creative "Snail Mail Notification" message
          that adds excitement and engagement for recipients.
        </li>
        <li>
          Configurable time delay to avoid sending multiple notifications for
          repeated sensor triggers, ensuring efficiency and reducing server
          load.
        </li>
      </ul>
      <h3>Technical Details</h3>
      <ul>
        <li>
          Used the Raspberry Pi GPIO library with the "BOARD" numbering system
          to reference physical pin numbers for precise hardware control.
        </li>
        <li>
          Configured pin 10 as an input pin with an initial state of low (off)
          to monitor the mailbox's status.
        </li>
        <li>
          Developed a Python script that continuously monitors the sensor and
          sends notifications via Gmail's SMTP server.
        </li>
        <li>
          Integrated a 600-second delay after sending each email to prevent
          duplicate notifications and ensure smooth system performance.
        </li>
      </ul>
      <h3>Creative Messaging</h3>
      <p>
        The email notifications feature a fun and engaging message, starting
        with a catchy subject line, "Snail Mail Notification." This approach
        adds a personal touch, making the notifications not just functional but
        delightful for recipients.
      </p>
      <h3>Impact</h3>
      <p>
        This IoT system demonstrates how smart technology can simplify daily
        routines and add convenience to users' lives. The innovative approach
        ensures timely communication while maintaining reliability and
        efficiency.
      </p>
    </>
  );
};

export default Mailbox;
