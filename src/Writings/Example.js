import React from "react";

const Example = () => {
  return (
    <>

<img src="images/projects/hci.jpg" />
<p>A screen of our hi-fi prototype for an AAC device on tablet</p>

    <h2>Overview</h2>
    <p>Communication is one of the most basic but essential activities that people hardly think about in their everyday life. It is such a mundane idea to us that we usually forget how important speech is for us to connect with each other. For people with communication disabilities, communication becomes a problem that they have to deal with daily. Augmentative and Alternative Communication (AAC) devices were invented with the idea of assisting them to communicate their needs, thoughts, and emotions effectively. However, many of these devices have outdated designs and limited functionality and the communication problem remains a challenge to its end users.</p>
    <p>What can we do to improve their experience? Our team took on a challenge to find a way to improve the experience of using AAC devices for people with disabilities. This project is part of a two-week design sprint in our Human-Computer Interaction class. Below is the research and design process that we used to tackle this problem space.</p>

    <h2>Our design process</h2>

    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*qZaEy3_t1hMBsnAOo2Oc4g.png" />

    <h3>Artifact Analysis</h3>
    <p>We started with a technical investigation of TouchChat — one of the most used AAC devices. We looked at TouchChat’s free version on both mobile and tablets and defined some initial values that we thought are important while using TouchChat to communicate. We also identified possible stakeholders and defined what values and value tensions the current solutions might provide for them. Some values from using TouchChat that we mapped to potential stakeholders are included below with values in blue and value tensions in red:</p>

    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*r1vhdvJPPZxJC-lXP1Fevg.jpeg" />
    <p>A chart of values and value tensions for stakeholders</p>

    <h3>Contextual Inquiry</h3>
    <p>Having the values in mind, we wanted to test our assumptions and learn more about the users’ values. Thus, we conducted a contextual inquiry with a panel of four students aged 18–21 from a local school for special needs: Ella, Elena, Chris, and Ajani, accompanied by their speech-language pathologist. We got the chance to observe how they would use the device for their needs as well as ask them some questions to identify important values for them. Here are examples of some of our questions:</p>
    <ul>
        <li>What do you like about your current device?</li>
        <li>What do you dislike?</li>
        <li>What are the barriers when you use your device?</li>
        <li>What has been helpful for you when using your device?</li>
        <li>How much can you customize your device?</li>
        <li>Is there anything you would wish to change about your device?</li>
    </ul>
    <p>After observing the panel interacting with their devices and having a conversation with them, we narrowed our stakeholders to only people with speech impediments. This is because we believe that they are the group who uses the device the most as well as has the most problems. Here are some pain points that we noted from our panelists:</p>

    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Twbv_9NYDWarFg1LXQsWMg.png" />
    <p>Pain points from our four panelists</p>

    <h3>Affinity Diagramming</h3>
    <p>After thinking through the pain points, we moved on to the convergence process where we try to identify and prioritize which problems to solve. In order to achieve that, we first used affinity diagramming to put our research in context and in relation to each other.</p>
    
    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_j3fs5-gz7lQ1ZdNcK8yzQ.png" />
    
    <h3>Affinity Diagramming</h3>
   
    <p>Based on the color-coded mapping, we chose to focus mostly on Ella and Elena’s opinions on their devices as we could come up with the most technically feasible solutions to those problems. Our list of potential solutions includes:</p>
    <ul>
        <li>Ability to customize the device</li>
        <li>Easy editing and programming sentences</li>
        <li>Having the option to express the wait time for a person to compose a sentence</li>
        <li>Ability to save previous conversations for easy access</li>
        <li>Responsive UI on different devices</li>
        <li>More natural voices</li>
        <li>Visual disability-friendly options</li>
        <li>Easier access to specific words</li>
    </ul>
    <p>We took a step further and sketched out what those features would look like visually.</p>
    
    <img src="https://miro.medium.com/v2/resize:fit:750/format:webp/1*O9zIRfsTstwRnJCjsLWThg.png" />
    <p>Sketches for potential features</p>
    
    <h3>Paper Sketches</h3>
    <p>Taking all of our ideas into consideration, we decided to focus on four specific values that are bolded below:</p>
    <ul>
        <li>Ability to customize the device</li>
        <li>Easy editing and programming sentences</li>
        <li>Having the option to express the wait time for a person to compose a sentence</li>
        <li>Ability to save previous conversations for easy access</li>
        <li>Responsive UI on different devices</li>
        <li>More natural voices</li>
        <li>Visual disability-friendly options</li>
        <li>Easier access to specific words</li>
    </ul>
    <p>Our choices and prioritization are based on what would help Ella and Elena the most. We sketched out how the screens in our device would be given our four potential features.</p>
    
    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*9YYbeaIFcI1lRZNoO0kIGg.png" />
    <p>Our paper sketches — including the homepage, profile, and history screens</p>

    <h3>Hi-fi Prototyping</h3>
    <p>With our time constraint, we moved on to mock up a high-fidelity version of our sketches, keeping in mind that our sketches could have been tested and improved. Here is the hi-fi prototype of our device:</p>
    <p>The homepage includes different categories of words, allowing easier access to specific words. Additionally, we also included a “Wait!” button that triggers blinking lights from the device, signaling the other interlocutor to wait.</p>
    
    
    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*OquloEAKLl7td5M9kx8RgQ.gif" />
    <p>Homepage with categories, access to history and wait buttons</p>
    
    <p>The profile page allows customizing categories as well as app colors and icons.</p>

    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*Fd3PWI_JzXYOm6Bu3j8rlg.gif" />
    <p>Profile page with customizations</p>
    
    
    <p>Finally, we added a feature for saving recent conversations. This allows users to access the conversation that they saved and have the device speak a full sentence without retyping.</p>

    <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*LnPqe6HuR_HIAetDgCZPNA.gif" />
    <p>History page with access to saved conversations</p>
    
    <p>The Figma link for our project can be found here.</p>

    <h3>Storyboard</h3>
    <p>For the “Wait!” button feature, we sketched out a storyboard instead of wireframing it digitally as it helped us put this feature into context. Here is how the waiting feature would look like in a conversation:</p>
    
    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lrwFN75HQcbza8vdV0Rqew.png" />
    <p>Storyboarding</p>

    <h3>Reflections</h3>
    <p>Overall, our design sprint allowed us to learn about VSD and apply it in a very meaningful context. We had a clear vision of what we wanted to achieve, but there are definitely areas where we could improve upon. Here are some reflections and future considerations that we discussed after the project:</p>
    <ul>
        <li>If we have more time, we would have conducted some usability testing for our hi-fi prototype. We acknowledge the potential usability issues and biases that our current prototype has.</li>
        <li>Documentation of the process is very important for us!</li>
        <li>We would love to tackle more problems coming from Ajani and Chris, as well as other stakeholder groups.</li>
    </ul>

    <p>Credit to <a href="https://icons8.com/">icons8.com</a> for our lovely icons!</p>

    </>
  );
};

export default Example;
