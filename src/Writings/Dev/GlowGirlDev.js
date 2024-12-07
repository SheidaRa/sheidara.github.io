import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const GlowGirlDev = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        Glow Girl is a groundbreaking women's health app developed during a
        hackathon hosted by Hack the Gap on April 27th and 28th, 2024. The app
        won first place, highlighting its innovative approach to ensuring
        confidentiality and accessibility for women’s health resources. Glow
        Girl is available as a Progressive Web App (PWA), allowing users to
        download the website onto their devices for enhanced privacy and
        convenience, especially in culturally sensitive environments.
      </p>
      <ExpandableImage
        path="https://raw.githubusercontent.com/SheidaRa/HackTGap/refs/heads/main/mockups/mobile_2.png"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        alt="A screenshot of the 'Health and Wellness' category of the Glow Girl app on mobile. Giving access to many topics like UTIs or PCOS"
        caption="Glow Girl Health and Wellness category interface"
        width="25%"
      />

      <h3>Purpose</h3>
      <p>
        Glow Girl is designed to empower women by providing a secure,
        accessible, and private platform for accessing essential health
        information. With multilingual support and advanced security features,
        the app ensures that users can confidently explore resources in a way
        that respects their privacy.
      </p>

      <h3>Impact</h3>
      <ul>
        <li>
          Supports individuals of all ages seeking confidential health
          information.
        </li>
        <li>
          Empowers women in culturally sensitive environments where discussing
          health topics may be challenging.
        </li>
        <li>
          Caters to anyone interested in women's health and privacy-first
          solutions.
        </li>
      </ul>

      <h3>Security Features</h3>
      <ul>
        <li>Ambiguous app logo to protect user privacy.</li>
        <li>
          Downloadable Progressive Web App for secure and discreet access.
        </li>
      </ul>

      <h3>Future Features</h3>
      <ul>
        <li>Screen blackout feature via double-tap for quick privacy.</li>
        <li>
          Automatic browser history deletion every minute for added
          confidentiality.
        </li>
        <li>
          Accessibility enhancements like dark mode and adjustable font sizes.
        </li>
        <li>Expanded multilingual support for inclusivity.</li>
        <li>
          Integration of advanced security features and an adequate API for
          women's health resources.
        </li>
        <li>
          Seeking investors and a dedicated team to further develop the
          platform.
        </li>
      </ul>

      <h3>Technologies and Tools Used</h3>
      <ul>
        <li>
          <strong>React:</strong> For building the app's dynamic user interface.
        </li>
        <li>
          <strong>Progressive Web App:</strong> Enabled the website to function
          as a downloadable app for increased accessibility and privacy.
        </li>
        <li>
          <strong>Redux:</strong> For managing the app's state and ensuring
          seamless functionality.
        </li>
        <li>
          <strong>Bootstrap:</strong> For responsive design and user-friendly
          layouts.
        </li>
        <li>
          <strong>Figma:</strong> Used for prototyping and designing the user
          interface.
        </li>
        <li>
          <strong>Canva:</strong> For creating visual assets and graphics.
        </li>
        <li>
          <strong>Trello:</strong> For task management and team collaboration
          during development.
        </li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        Glow Girl stands out as a secure, innovative, and inclusive solution for
        women’s health. By addressing privacy concerns and accessibility
        challenges, it offers a safe space for users to explore essential
        resources. The app’s ongoing development promises even greater impact,
        with features that continue to prioritize security, usability, and
        empowerment.
      </p>
    </>
  );
};

export default GlowGirlDev;
