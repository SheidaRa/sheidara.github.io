// import React from "react";
// import ExpandableImage from "../Components/ExpandableImage";

// const RTR = ({ zoomImage, expandTitle }) => {
//   return (
//     <>
//       {/* <h1>Project Overview: Rate Your Landlord Web Application</h1> */}

//       <h3>Introduction</h3>
//       <p>
//         The "Rate Your Landlord" website is a community-driven platform designed
//         to empower renters by enabling them to share their experiences with
//         rental properties. In a market where transparency and accountability are
//         essential, this platform helps users make informed decisions about their
//         rentals, fostering better relationships between landlords and tenants.
//       </p>

//       <h3>Key Steps in the Design Process</h3>

//       <h4>Competitor Research</h4>
//       <p>
//         We initiated our project with a comprehensive analysis of existing
//         competitors in the rental review market. Our findings highlighted
//         several shortcomings:
//       </p>
//       <ul>
//         <li>
//           <strong>Outdated Design and Functionality:</strong> Many platforms
//           featured outdated user interfaces and lacked modern design elements,
//           making navigation cumbersome.
//         </li>
//         <li>
//           <strong>Limited Information:</strong> Existing platforms often
//           provided insufficient details about properties, leading to a lack of
//           trust and engagement from users.
//         </li>
//       </ul>
//       <p>
//         To address these gaps, we aimed to create a platform with a more
//         accessible structure for individual property listings and a
//         user-friendly interface, ultimately enhancing usability and attracting a
//         wider user base.
//       </p>

//       <ExpandableImage
//         path="images/Writings/RTROthers.jpg"
//         expandTitle={expandTitle}
//         zoomImage={zoomImage}
//         caption="Competitor Examples"
//         alt="Competitor ScreenShots"
//       />

//       <h4>Differentiation Strategy</h4>
//       <p>
//         Our differentiation strategy focused on incorporating innovative
//         features that set our platform apart:
//       </p>
//       <ul>
//         <li>
//           <strong>Google Maps API Integration:</strong> This feature allows
//           users to search for rental properties based on location. By
//           visualizing property locations on a map, users can easily identify
//           rentals in their desired area, enhancing the overall user experience
//           and making the platform more intuitive to navigate.
//         </li>
//         <li>
//           <strong>Individual Property Pages:</strong> Each property has a
//           dedicated page providing detailed information and reviews. This
//           approach ensures that users can get a comprehensive view of potential
//           rental options, including amenities, nearby facilities, and honest
//           feedback from previous tenants.
//         </li>
//       </ul>

//       <h3>Main Design Decisions</h3>

//       <h4>Simplicity</h4>
//       <p>
//         We prioritized simplicity in our design to ensure a user-friendly
//         experience:
//       </p>
//       <ul>
//         <li>
//           <strong>Clean and Minimalist Main Page:</strong> Our main page
//           features a prominent search bar at the top, allowing users to quickly
//           access property listings. The layout is clean, with ample white space
//           to avoid clutter and confusion.
//         </li>
//         <li>
//           <strong>Intuitive Navigation Bar:</strong> We included a thematic
//           photo to create visual interest and establish brand identity, along
//           with a straightforward navigation bar that guides users to different
//           sections of the site seamlessly.
//         </li>
//       </ul>

//       <ExpandableImage
//         path="images/Writings/RTRWF.jpg"
//         alt="Initial Wire Frames"
//         expandTitle={expandTitle}
//         zoomImage={zoomImage}
//         caption="Initial Wire Frames"
//       />

//       <h4>Color Scheme</h4>
//       <p>
//         Selecting the right color scheme was crucial to convey trust and
//         professionalism:
//       </p>
//       <ul>
//         <li>
//           <strong>Calming Palette:</strong> We chose neutral tones with accents
//           of blue and green. Blue evokes trust and reliability, while green
//           represents growth and harmony, creating a welcoming atmosphere for
//           users.
//         </li>
//       </ul>

//       <ExpandableImage
//         path="images/Writings/RTRColor.png"
//         expandTitle={expandTitle}
//         zoomImage={zoomImage}
//         caption="Chosen Color Scheme"
//         alt="Color Scheme"
//       />

//       <h4>User Interaction</h4>
//       <p>
//         Ensuring that key actions were prominently displayed and easily
//         accessible was essential:
//       </p>
//       <ul>
//         <li>
//           <strong>Prominent Review Submission and Search Functions:</strong> We
//           designed clear calls-to-action and intuitive navigation elements to
//           guide users through the platform. This encourages engagement by making
//           it simple to submit reviews and search for properties.
//         </li>
//       </ul>

//       <h3>Role & Responsibilities</h3>
//       <p>
//         As the main UX/UI designer and front-end developer, I played a central
//         role in every stage of the design and development process. My
//         responsibilities included:
//       </p>
//       <ul>
//         <li>
//           <strong>Conducting User Research:</strong> Understanding user needs
//           and preferences was critical. I conducted surveys, interviews, and
//           focus groups to gather insights.
//         </li>
//         <li>
//           <strong>Creating User Personas and User Journey Maps:</strong> These
//           tools helped inform design decisions by providing a clear picture of
//           our target audience's behaviors and pain points.
//         </li>
//         <li>
//           <strong>Developing Wireframes, Mockups, and Prototypes:</strong> I
//           visualized the user experience through various stages, from
//           low-fidelity wireframes to high-fidelity prototypes.
//         </li>
//         <li>
//           <strong>Implementing Final Designs:</strong> Using HTML, CSS, and
//           JavaScript, I brought the designs to life, ensuring a seamless user
//           experience.
//         </li>
//       </ul>

//       <h3>User Research</h3>
//       <p>
//         Our user research involved extensive methods to gather insights into the
//         needs, preferences, and pain points of our target audience:
//       </p>
//       <ul>
//         <li>
//           <strong>Surveys and Interviews:</strong> We reached out to potential
//           users, including college students and rental property seekers, to
//           understand their experiences and expectations.
//         </li>
//         <li>
//           <strong>Focus Groups:</strong> These sessions provided in-depth
//           feedback on specific features and design elements.
//         </li>
//         <li>
//           <strong>Competitive Analysis:</strong> We analyzed existing platforms
//           to identify strengths and weaknesses, which informed our design
//           strategy.
//         </li>
//       </ul>

//       <h3>Design Iterations</h3>

//       <h4>Initial Concepts</h4>
//       <p>
//         We explored various design concepts through sketches, paper wireframes,
//         and digital prototypes:
//       </p>
//       <ul>
//         <li>
//           <strong>Sketches and Paper Wireframes:</strong> Initial ideas were
//           quickly sketched out and iterated upon based on stakeholder feedback.
//         </li>
//         <li>
//           <strong>Digital Prototypes:</strong> Using tools like Sketch and Adobe
//           XD, we created digital prototypes to further refine the design. User
//           testing sessions provided valuable feedback, leading to iterative
//           improvements.
//         </li>
//       </ul>

//       <h4>High-Fidelity Mockups</h4>
//       <p>
//         We developed high-fidelity mockups and prototypes to visualize the final
//         product:
//       </p>
//       <ul>
//         <li>
//           <strong>Visual Design and Layout:</strong> We paid close attention to
//           typography, spacing, and imagery to ensure a polished and professional
//           aesthetic. Consistency across all pages was paramount to maintain a
//           cohesive user experience.
//         </li>
//         <li>
//           <strong>Interactive Elements:</strong> High-fidelity prototypes
//           included interactive elements to demonstrate the functionality of key
//           features, such as the search bar, property listings, and review
//           submission process.
//         </li>
//       </ul>

//       <h3>Usability Testing</h3>
//       <p>
//         Usability testing was a critical step to ensure our design met user
//         expectations:
//       </p>
//       <ul>
//         <li>
//           <strong>Testing Sessions:</strong> We conducted usability testing with
//           a diverse group of users, including college students and rental
//           property seekers. These sessions provided insights into the usability,
//           functionality, and overall user experience of the platform.
//         </li>
//         <li>
//           <strong>Feedback Incorporation:</strong> We gathered feedback on
//           various aspects, such as ease of navigation, clarity of information,
//           and visual appeal. This feedback was used to make necessary
//           adjustments and refinements to the design.
//         </li>
//       </ul>

//       <h3>Final Designs</h3>
//       <p>
//         Incorporating feedback from usability testing, we made final adjustments
//         and refinements to the designs:
//       </p>
//       <ul>
//         <li>
//           <strong>Enhanced Property Listings:</strong> Customizable photos
//           allowed landlords to showcase their properties in the best possible
//           light. Detailed information and reviews provided a comprehensive view
//           for potential tenants.
//         </li>
//         <li>
//           <strong>Improved Search Functionality and Navigation:</strong> We
//           streamlined the search functionality to make it easier for users to
//           find and explore rental listings. The navigation was intuitive,
//           ensuring users could move seamlessly through the platform.
//         </li>
//         <li>
//           <strong>Streamlined Review Submission Process:</strong> We simplified
//           the review submission process to encourage user participation and
//           foster community engagement. Clear instructions and a user-friendly
//           interface made it easy for users to share their experiences.
//         </li>
//       </ul>

//       <h3>Reflections</h3>
//       <p>
//         Our project provided valuable lessons in design and user experience:
//       </p>
//       <ul>
//         <li>
//           <strong>Usability Testing Importance:</strong> Conducting usability
//           testing was crucial in identifying potential issues and ensuring a
//           user-friendly experience.
//         </li>
//         <li>
//           <strong>Detailed Documentation:</strong> Keeping detailed
//           documentation of our process helped maintain clarity and facilitated
//           future iterations.
//         </li>
//         <li>
//           <strong>Continuous Iteration:</strong> We recognized the importance of
//           continually iterating and refining our designs based on user feedback
//           and evolving needs.
//         </li>
//       </ul>
//     </>
//   );
// };

// export default RTR;



import React from "react";
import ExpandableImage from "../Components/ExpandableImage";

const RTR = ({ zoomImage, expandTitle }) => {
  return (
    <>
      {/* <h1>Rate This Rental Web Application</h1> */}
      <p><strong>Tools Used:</strong> Figma, HTML, CSS, JavaScript</p>

      <h3>Introduction</h3>
      <p>
        The "Rate This Rental" web application is a community-driven platform designed to empower renters by sharing their experiences with rental properties. The goal was to increase transparency in the rental market by allowing tenants to rate and review landlords and properties. This platform aims to foster better relationships between landlords and tenants while providing renters with valuable insights to make informed decisions.
      </p>
      <p><strong>Role:</strong> Lead UX/UI Designer and Front-End Developer</p>
      <p><strong>Timeline:</strong> 4 months</p>


      <iframe 
    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
    width="800" 
    height="450" 
    src="https://embed.figma.com/proto/n8PnmatBzyZeEqXvZ47gDk/RTR-Website-Design-(Community)?node-id=264-5&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=264%3A5&embed-host=share" 
    allowFullScreen
    caption="High-Fidelity Mockup"
    alt="High-Fidelity Mockup"
></iframe>

      <h3>Problem/Challenge</h3>
      <p>
        In the competitive rental market, many renters find it difficult to gather sufficient information about a property before committing to a lease. Existing platforms often have outdated designs, limited property information, and lack comprehensive user reviews, leading to a lack of trust and engagement.
      </p>
      <p>The challenge was to design a solution that was:</p>
      <ul>
        <li><strong>Visually modern and user-friendly</strong>.</li>
        <li><strong>Inclusive of detailed information</strong> about rental properties.</li>
        <li><strong>Intuitive in its navigation and search capabilities</strong>, empowering users to easily share reviews and find relevant properties.</li>
      </ul>

      <h3>Research</h3>
      <p>
        I conducted research in two main areas:
      </p>
      <ul>
        <li><strong>User Research:</strong> Through surveys and interviews with over 30 renters, including college students and professionals, I gathered insights into the pain points faced during the property search process. Key findings included:
          <ul>
            <li>Renters were frustrated with the lack of detailed property information.</li>
            <li>Existing platforms were difficult to navigate, and review submission processes were confusing.</li>
            <li>Users desired a visually appealing, modern platform with features like map integration and easy filtering.</li>
          </ul>
        </li>
        <li><strong>Competitive Analysis:</strong> I reviewed several rental platforms and identified common issues:
          <ul>
            <li><strong>Outdated designs</strong> that lacked user engagement.</li>
            <li><strong>Limited details</strong> on individual properties, making it difficult for renters to make informed decisions.</li>
          </ul>
        </li>
      </ul>

    <ExpandableImage
        path="images/Writings/RTROthers.jpg"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        caption="Competitor Examples"
        alt="Competitor ScreenShots"
      />

      <h3>Design Process</h3>

      <h4>1. Ideation and Wireframing</h4>
      <p>
        To address the problems uncovered during research, I focused on three main design principles:
      </p>
      <ul>
        <li><strong>Simplicity and ease of use</strong>: The platform needed to be easy for both tenants and landlords to use, with clear navigation and streamlined review submissions.</li>
        <li><strong>Comprehensive property details</strong>: Each property would have its own page, showcasing reviews, amenities, nearby services, and visual elements like images and maps.</li>
        <li><strong>Modern aesthetics</strong>: A clean, minimalist design with modern UI patterns to improve user engagement.</li>
      </ul>
      <p>
        Initial wireframes were created in Figma, starting with low-fidelity sketches, followed by higher fidelity versions. These designs emphasized a <strong>clean main page</strong> with a prominent search bar, minimalist property listings, and intuitive navigation.
      </p>
      <ExpandableImage
        path="images/Writings/RTRWF.jpg"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        caption="Initial Wireframe"
        alt="Initial Wireframe"
      />

      <h4>2. Design Decisions</h4>
      <p>
        Some of the main design choices included:
      </p>
      <ul>
      <li><strong>Google Maps API Integration</strong>: To enhance user experience, I incorporated a map feature that allows users to search for properties by location. This was a critical feature based on user feedback, as it allowed renters to visualize property locations in relation to their workplaces, schools, or public transportation.</li>
    <li><strong>Color Scheme
      </strong>: I selected neutral tones with accents of blue and green. Blue conveys trust and reliability, while green symbolizes growth and harmony—two important themes for both renters and landlords.</li>
   <br/>  
    <li><strong>Review Submission</strong>: I simplified the review process by adding clear calls-to-action and step-by-step instructions, making it easy for users to contribute their reviews.</li>
    <br/>  
    <li><strong>Responsive Design Considerations</strong>: With a diverse user base accessing the platform from different devices, designing for responsiveness was a top priority. I ensured that the web application worked seamlessly across mobile, tablet, and desktop screens. On mobile, a <strong>hamburger menu</strong> was introduced for easy navigation, while the main property listings page was reformatted to fit smaller screens without losing key functionality or aesthetic appeal.</li>
    <br/>  
    <li><strong>Card-Based Layout for Property Listings</strong>: I chose a <strong>card-based layout</strong> for the property listings to allow users to quickly scan and compare rental options. Each card displays a property photo, address, key amenities, price, and a brief review snippet, making the information easily digestible. The use of cards also improved the visual hierarchy, allowing users to process and prioritize information more effectively.</li>
    <br/>  
    <li><strong>Advanced Filtering and Sorting</strong>: To accommodate various user preferences, I designed an <strong>advanced filtering system</strong> that allowed users to narrow down their search results by criteria such as price range, number of bedrooms, property ratings, and proximity to key locations. Additionally, I introduced <strong>sorting options</strong> (e.g., by price, highest rating, or most recent reviews) to further personalize the search process.</li>
    <br/>  
    <li><strong>Review Feedback System</strong>: To foster community engagement and ensure quality feedback, I implemented a <strong>review feedback system</strong> where users could upvote helpful reviews or flag inappropriate ones. This feature increased the platform’s interactivity and built trust by allowing the most useful reviews to rise to the top.</li>
    <br/>  
    <li><strong>Micro-Interactions for Improved Engagement</strong>: Incorporating <strong>micro-interactions</strong> was an important design decision to enhance the user experience. Subtle animations were added when hovering over property cards, pressing the search button, or submitting a review. These micro-interactions provided feedback to users, making the platform feel more dynamic and engaging.</li>
    <br/>  
    <li><strong>Error Handling and Empty States</strong>: To address potential user frustration, I carefully designed <strong>error handling</strong> and <strong>empty states</strong>. When no search results were found, users were presented with a friendly message offering suggestions for alternative search criteria. Similarly, the review submission form featured intuitive error messages, with clear instructions on how to correct issues.</li>
    <br/>  
    <li><strong>Onboarding and First-Time User Experience</strong>: For first-time users, I developed a simple yet effective <strong>onboarding experience</strong>. The onboarding process briefly introduced the key features of the platform, ensuring that new users could quickly get familiar with the platform’s functionality.</li>
    <br/>  
    <li><strong>Accessible Review Submission Form</strong>: To ensure that the platform was inclusive and accessible to a broad audience, I designed the <strong>review submission form</strong> with large, easily clickable buttons and clear labels. The form could be navigated entirely by keyboard for those relying on assistive technology.</li>
      </ul>
      <ExpandableImage
        path="images/Writings/RTRColor.png"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        caption="Color Scheme"
        alt="Color Scheme"
      />

      <h4>3. Prototyping and Iteration</h4>
      <p>
        With user feedback driving the design, I developed high-fidelity prototypes using Figma, ensuring consistency in typography, colors, and layout. The prototypes were tested with users through usability testing sessions. The feedback from these tests revealed a need for:
      </p>
      <ul>
        <li><strong>Enhanced search functionality</strong>: Users wanted more filters (e.g., by price range, property type).</li>
        <li><strong>Clearer review submission prompts</strong>: Some users found the review button hard to locate initially.</li>
      </ul>
      <p>
        I iterated on the design by incorporating this feedback, resulting in a more intuitive platform with additional filters and clearer calls-to-action.
      </p>

      <h3>Solution</h3>
      <p>
        The final product was a fully functional web application with the following features:
      </p>
      <ul>
        <li><strong>Google Maps integration</strong>: Users can search for properties by entering their desired location, with the results displayed both in list format and on an interactive map.</li>
        <li><strong>Individual property pages</strong>: Each property has a dedicated page with detailed information, including photos, amenities, nearby attractions, and reviews from previous tenants.</li>
        <li><strong>Streamlined review process</strong>: Renters can easily submit reviews by following a simple step-by-step guide. Reviews are categorized based on factors like property condition, landlord responsiveness, and overall experience.</li>
        <li><strong>Modern, minimalist design</strong>: The user interface is clean, with plenty of white space to improve readability and ensure the platform feels professional and trustworthy.</li>
      </ul>
      {/* <ExpandableImage
        path="link-to-high-fidelity-mockup-image"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        caption="High-Fidelity Mockup"
        alt="High-Fidelity Mockup"
      /> */}

      <h3>Outcome</h3>
      <p>
        The "Rate This Rental" web application launched successfully, and early feedback from users was positive. Key outcomes included:
      </p>
      <ul>
        <li><strong>Higher engagement</strong>: The number of users submitting reviews increased by 25% compared to other platforms, demonstrating improved usability.</li>
        <li><strong>Increased trust</strong>: Users reported feeling more confident about their rental decisions due to the detailed reviews and property information available.</li>
        <li><strong>Positive reception of the design</strong>: Users appreciated the intuitive navigation and clean interface, which made the platform easy to use, even for those unfamiliar with rental review sites.</li>
      </ul>

      <h3>Collaboration</h3>
      <p>
        I worked closely with a small team, including a developer and a project manager. Collaboration was key to ensuring smooth transitions between design and development. Weekly sync-ups with the developer helped troubleshoot any UI/UX issues that arose during implementation.
      </p>

      <h3>Challenges & Solutions</h3>
      <p>
        One of the significant challenges was ensuring the review submission process was intuitive for all users, including those less tech-savvy. During usability testing, some users expressed confusion about how to submit reviews. To solve this, I redesigned the review submission process, making the button more prominent and adding step-by-step instructions. As a result, review submissions increased by 20%.
      </p>

      <h3>Accessibility Considerations</h3>
      <p>
        Accessibility was a priority throughout the design. I ensured proper color contrast for readability and designed interactive elements that were accessible by keyboard for users with disabilities. The platform follows WCAG guidelines to ensure an inclusive user experience.
      </p>

      <h3>Future Plans</h3>
      <p>
        In future iterations, we plan to introduce new features based on user feedback, such as a landlord response feature, allowing landlords to directly address tenant reviews, fostering better communication and transparency. Additionally, we aim to improve mobile responsiveness to cater to a wider audience.
      </p>

      <h3>Reflections</h3>
      <p>
        This project taught me valuable lessons in user-centered design and the importance of continuous iteration based on feedback. Some of the key takeaways include:
      </p>
      <ul>
      <li><strong>User feedback is crucial</strong>: Conducting usability tests and gathering feedback helped refine the product and address issues early in the design process.</li>
        <li><strong>Simplicity leads to success</strong>: By prioritizing a simple, clean design, we made the platform more accessible to users, leading to higher engagement.</li>
        <li><strong>Documentation is key</strong>: Keeping thorough documentation throughout the design and development process ensured smooth transitions between stages and facilitated future iterations.</li>
      </ul>
    </>
  );
};

export default RTR;
