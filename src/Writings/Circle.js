import React from "react";
import ExpandableImage from "../Components/ExpandableImage";


const Circle = ({ zoomImage, expandTitle }) => {
  return (
    <>
      {/* < h2>Circle Dating App Design</ h2> */}

      < h3>1. Project Overview</ h3>
      <ul>
        <li><strong>Role</strong>: UX Designer</li>
        <li><strong>Tools</strong>: Figma</li>
        <li><strong>Objective</strong>: Design a group dating app that matches users into small groups based on shared interests and personalities. The app aims to create a fun, low-pressure environment where group dynamics foster better connections compared to traditional one-on-one matches.</li>
      </ul>

      <hr />
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800"
          height="450"
          src="https://embed.figma.com/proto/HcGVWdbP4sPslzEpcQPj3f/Dating-App-Design?node-id=42-1380&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=42%3A1380&embed-host=share"
          allowFullScreen
          title="Dating App Design Prototype"
        ></iframe>
        <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
          Dating App Design Prototype
        </p>

      </div>

      < h3>2. Problem Statement</ h3>
      <p>Most dating apps focus on one-on-one matching, which can lead to awkward first encounters and high-pressure situations. <strong>Circle</strong> challenges this by matching groups of people based on shared hobbies, values, and personality traits. By facilitating <strong>group interactions</strong>, the app aims to create a more relaxed and social atmosphere where connections can form naturally.</p>

      <h5>Key Design Challenges:</h5>
      <ul>
        <li>How to structure group interactions in a way that fosters chemistry and prevents the app from feeling like a social network.</li>
        <li>Encouraging users to engage with multiple profiles simultaneously without feeling overwhelmed.</li>
        <li>Ensuring that users still feel an individual sense of identity within the group setting.</li>
      </ul>

      <hr />

      < h3>3. Research</ h3>

      <h5>User Interviews & Surveys</h5>
      <p>I conducted interviews and surveys with a diverse group of potential users to understand what they liked and disliked about existing dating platforms. The key objective was to discover how they felt about the idea of <strong>group dating</strong> and whether they’d be open to this new dynamic.</p>

      <h5>Key Findings:</h5>
      <ul>
        <li><strong>Safety and Comfort</strong>: Many users, especially women, expressed that they would feel more comfortable in group settings, as it reduces the risks of awkward or unsafe one-on-one dates.</li>
        <li><strong>Group Chemistry</strong>: Users liked the idea of meeting people in groups, noting that it's similar to how they meet people in real life, such as at parties or social events.</li>
        <li><strong>Clear Group Dynamics</strong>: Some users were concerned that group dating might blur lines of interest, so they wanted clear communication about who’s interested in whom after the group interaction.</li>
        <li><strong>Customization</strong>: Users wanted to maintain individual profiles and personal identities within the group dynamic, so their unique personality would still come across during group interactions.</li>
      </ul>

      <h5>Personas:</h5>
      <ol>
        <li><strong>Sarah</strong>, 30, introvert: Finds one-on-one first dates intimidating. Prefers to meet people in a group where she can get to know them in a low-pressure environment.</li>
        <li><strong>Mike</strong>, 28, extrovert: Enjoys socializing in groups and feels that group dynamics reveal true personalities more than individual profiles ever could.</li>
      </ol>

      <hr />

      < h3>4. Design Process</ h3>

      <h5>Ideation & Wireframing</h5>
      <p>Based on user feedback, I began ideating solutions that would:</p>
      <ul>
        <li>Allow users to <strong>create individual profiles</strong> with detailed information (hobbies, values, personality traits).</li>
        <li>Use an <strong>algorithm to match groups</strong> of 4-6 users based on their shared interests and personalities.</li>
        <li>Facilitate <strong>group chats</strong> that allow users to interact before meeting in person, providing a chance to break the ice in a relaxed, conversational setting.</li>
      </ul>
      <p>I created <strong>low-fidelity wireframes</strong> to map out the group matching and group chat features. In these wireframes, each user maintains their own profile, and after a group match, users enter a shared chatroom where they can introduce themselves and talk casually before deciding to meet in person.</p>

      <h5>High-fidelity Prototypes</h5>

      <ol>
        <li><strong>Onboarding & Profile Creation</strong>:
          <ul>
            <li><strong>User Flow</strong>: The onboarding process begins with a simple, friendly interface where users input basic information (name, age, gender) and answer questions about their hobbies and values. They also select from a set of personality traits that help the algorithm match them with like-minded users.</li>
            <li><strong>Interest & Personality Questions</strong>: The app includes fun, casual questions during signup, such as "What's your ideal weekend activity?" and "How do your friends describe you?" These questions are used to build an individual’s profile and match them into the right groups.</li>
            <li><strong>Profile Layout</strong>: Each user’s profile has key sections for personal information, hobbies, and personality traits. Users can select hobbies from predefined categories (e.g., hiking, cooking, reading) and also add custom hobbies.</li>
          </ul>
        </li>
        <li><strong>Group Matching</strong>:
          <ul>
            <li><strong>Unique Matching Algorithm</strong>: Circle uses a custom algorithm to match 4-6 people into a group based on their overlapping interests, hobbies, and personality traits. The group dynamic is carefully curated to ensure that users have enough in common to foster engaging conversations.</li>
            <li><strong>Connecting Screen</strong>: Once a match is made, users are shown a fun, interactive "Connecting" screen that displays the group they’ve been matched with.</li>
          </ul>
        </li>
        <li><strong>Group Chatroom</strong>:
          <ul>
            <li><strong>Icebreaker Prompts</strong>: The group chatroom includes optional icebreaker prompts to help start conversations (e.g., "What’s one adventure you'd love to go on?").</li>
            <li><strong>User Engagement</strong>: Users can send messages, share pictures, and even plan group events directly in the chatroom. This creates a laid-back environment where users can get to know each other before any face-to-face meeting occurs.</li>
            <li><strong>Group Chemistry Evaluation</strong>: Users are encouraged to reflect on the group interaction. At the end of the chat, they can indicate their level of interest in pursuing either romantic or platonic relationships with any of the group members.</li>
          </ul>
        </li>
      </ol>

      <hr />

      < h3>5. Visual Design</ h3>

      <ol>
        <li><strong>Color Palette</strong>:
          <p>I selected warm, vibrant colors (oranges and yellows) to give the app a friendly, community-centric vibe. The goal was to make users feel comfortable and excited about group dating.</p>
        </li>
        <li><strong>Typography</strong>:
          <p>I used the <strong>Poppins</strong> typeface to ensure readability and a modern, clean look. This font complements the app’s fresh and approachable interface.</p>
        </li>
        <li><strong>Icons & Imagery</strong>:
          <p>Rounded icons and playful illustrations are used throughout the app to enhance the user experience. For example, during onboarding, users see playful illustrations of hobbies (e.g., camping, painting), which add a lighthearted touch to the profile creation process.</p>
        </li>
      </ol>

      <ExpandableImage
        path="images/projects/CircleCS.png"
        alt="Chart of values and value tensions for stakeholders"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        caption="Color Scheme"
      />

      <hr />

      < h3>6. Challenges & Solutions</ h3>

      <ol>
        <li><strong>Group Dynamics in a Dating App</strong>:
          <p>One challenge was ensuring that group interactions didn’t feel like general socializing. I tackled this by designing specific icebreaker prompts and conversation-starters that focused on common interests, while still allowing users the freedom to express themselves.</p>
          <p><strong>Solution</strong>: Integrated a feedback mechanism at the end of group chats, where users could indicate their level of interest in other group members for either romantic or platonic connections.</p>
        </li>
        <li><strong>User Profiles vs. Group Experience</strong>:
          <p>Balancing individual identity and group dynamics was tricky. I needed to ensure that users felt seen as individuals while also encouraging them to engage in group settings.</p>
          <p><strong>Solution</strong>: Each user maintains a detailed personal profile, and after the group chat, they receive a recap of individual profiles, helping them remember their connections within the group.</p>
        </li>
        <li><strong>Ensuring Safety</strong>:
          <p>Users were concerned about safety when meeting strangers. To address this, I built in safety features such as a reporting mechanism and guidelines for safe meetups.</p>
          <p><strong>Solution</strong>: Each group chat includes a link to safety tips, and users can report any inappropriate behavior directly within the app.</p>
        </li>
      </ol>

      <hr />

      < h3>7. Conclusion</ h3>
      <p><strong>Circle</strong> is a fresh approach to dating that aims to redefine how connections are made. By focusing on group dynamics, we hope to create a platform that feels more natural and enjoyable. My design process, grounded in user research and feedback, ensured that the final product resonates with the needs and desires of potential users.</p>

      <hr />

      < h3>8. Future Enhancements</ h3>
      <ul>
        <li><strong>Event Planning Feature</strong>: I plan to add a feature that allows groups to plan events based on shared interests, enhancing the overall group experience.</li>
        <li><strong>Expanded User Feedback</strong>: I want to implement a post-meeting feedback feature that helps the algorithm refine group matches based on user experiences.</li>
        <li><strong>In-App Activities</strong>: Introducing fun in-app activities, such as games or quizzes, can help break the ice during group chats.</li>
      </ul>
    </>
  );
};

export default Circle;
