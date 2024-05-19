import React from "react";

const Chroma = () => {
  return (
    <>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wN_euOtl1FE?si=Kg4QoSiE542QDtPU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
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

      <h2>Overview</h2>
      <p>
        Emotions are a significant part of human existence and can be elicited
        by a range of internal or external factors. Often emotions are grouped
        into six primary categories: happiness, anger, fear, surprise, sadness,
        and disgust. However, there are more complex emotions that individuals
        can experience. This is where virtual reality (VR) comes into the
        picture. VR can help us create an immersive simulation where users can
        engage with computer-generated environments and 3D models. VR is perfect
        for immersive experiences, and we believe that it is a perfect medium to
        explore emotion.
      </p>
      <p>
        This current project is a follow-up to our previous design sprint, which
        explored emotions in VR from the perspective of a color-blind person
        (you can find it{" "}
        <a href="https://medium.com/macalester-hci/exploring-emotions-using-vr-through-the-lens-of-a-color-blind-person-3270d68576cc">
          here
        </a>
        ). This time, we are focusing on how an environment's color can impact
        someone's emotions. This is a crucial question because certain colors
        are sometimes associated with specific emotions. For instance, red is
        linked to emotions like anger or passion, blue to relaxation or sadness,
        and yellow and green to happiness or friendliness. So we investigated
        how altering the colors of a VR environment affects the user's emotional
        response. The final project is a 3D environment with two rooms – a
        "danger" and "calm" room. However, the user is able to change the color
        and lighting in each of these rooms. This was to see how the different
        colors affected the user's emotional experience. This project is the
        final one for our HCI class, and we have outlined the steps we took to
        achieve our objective below.
      </p>

      <h2>Design Process</h2>

      <h3>Ideation and Project Goal</h3>
      <p>
        This project builds upon our previous work in human-computer
        interaction. Our initial project focused on examining the relationship
        between color and emotions, and we created a virtual room themed around
        the color red. Given our positive experience using A-Frame, an
        open-source framework for developing virtual reality environments, we
        decided to further develop the concept. We started by creating sketches
        to guide the design of our new VR environment. Our aim was to explore
        different ways of evoking emotions through virtual reality. Initially,
        we planned to create seven different rooms, each representing a
        different color of the rainbow. Alternatively, we considered creating a
        single museum-like room that would adapt its contents based on the color
        chosen by the user.
      </p>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*Zd3kYicjBs1-UwjKO5Ez4g.gif"
          alt=" a gif of scketches made while rainstorming session in Idea Lab "
        />
        <p>
          <strong>Brainstorming session </strong>
        </p>
      </div>

      <p>
        To explore the effect of color on user experience, we decided to create
        two rooms, one with a "tense" theme and the other with a "calm" theme.
        Our professor Lauren Milne suggested that users should be able to change
        the color of both rooms to understand how the user's experience would be
        influenced by the color of the room, regardless of its original theme.
        For instance, would changing the color of the calm room to red make it
        feel scary? Ultimately, we chose to implement this approach to our
        project.
      </p>
      <p>
        In the initial stage of the project, we focused on exploring the two
        environments we had and figuring out the most effective color schemes to
        convey the intended emotions to the user. We had a "danger room" from
        our previous iteration of the project, which heavily featured the color
        red. Additionally, we created a "calm room" designed to evoke feelings
        of safety and relaxation. When brainstorming ideas for the calming
        experience, we gravitated towards natural elements, such as greens and
        blues.
      </p>
      <p>
        However, we realized that the emotional response to a color can differ
        depending on the environment it's in. For instance, the color red can
        represent both fear and love. We believed that by allowing users to
        change the overall color of the calm and danger rooms, we could elicit
        intriguing emotional reactions. Our goal was to let users experience
        various emotions in both rooms by altering the color. For example, a
        yellow sun in a blue sky might create a calming effect, but if the sun
        and sky were to turn red, it would evoke an entirely different feeling.
      </p>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*ajHoszWv9-EXQfBEbOQ-zA.png"
          alt=" A Photo of a Emotional Color Wheel"
        />
        <p>Emotional Color Wheel(Source: Lindly's Blog)</p>
      </div>

      <ul>
        <li>Red: Anger, embarrassment, passion, or lust.</li>
        <li>Blue: Shyness, sadness, or calmness.</li>
        <li>Yellow: Cowardice, happiness, or caution.</li>
        <li>Green: Disgust, envy, friendliness, or greed.</li>
        <li>Purple: Pride, fear, or courage.</li>
        <li>Orange: Energy, optimism or enthusiasm.</li>
      </ul>

      <h3>Prototyping</h3>
      <p>
        We started with some preliminary sketches of how we wanted the
        environment to look. We wanted to start in some liminal portal room
        where the user could learn how to navigate the environment, pick the
        colors, and choose the room to enter. The color changer, we decided,
        would be placed in between the two portals for ease of access.
      </p>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*vI0pa9ZcGEv2fa_C-oK-fA.png"
          alt="Brainstorming session scketche"
        />
        <p>
          <strong>Brainstorming session</strong>
        </p>
      </div>

      <p>
        After completing our sketches, we utilized 3D models from Sketchfab to
        create the assets for our virtual reality environments. In this project,
        we explored how different combinations of assets and colors could evoke
        different emotions in users. We created two environments: a danger room
        and a calm room. The danger room was similar to our previous project,
        but we had to adjust the lighting to allow for color changes. For the
        calm room, we chose a wilderness theme with birds chirping and wildlife
        sounds to promote a calming atmosphere. However, we acknowledged that
        wilderness environments could also be perceived as hostile, so we aimed
        to test how color changes would affect the user's emotional experience.
        The portal room, where users could change colors, was designed to be
        neutral and liminal, like a space environment. In each environment, we
        utilized different assets and models to achieve the desired emotional
        effect.
      </p>

      <h3>Movement</h3>
      <p>
        Our initial plan was to create a fully immersive VR experience for the
        users, but we encountered a navigation problem when we tried to
        implement it using the Google Cardboard VR headset. The headset does not
        support conventional controls or keyboard input, which makes it
        challenging for users to move around the environment. To overcome this
        challenge, we came up with a unique solution of using circular
        "telepads" placed on the ground. By staring at a telepad for a few
        seconds, the user's position would change to the location of the
        telepad, allowing them to move around the environment without
        traditional controls. However, our telepad system was not perfect, as we
        discovered during user testing. It was sometimes challenging to stare at
        a telepad if it was too far away, and if the telepads were too close
        together, the user could accidentally activate the wrong one. To address
        these issues, we experimented with the placement of the telepads and the
        time required to activate them. Although our movement system was not
        ideal, we were able to come up with an innovative solution to a unique
        problem.
      </p>

      <h3>Individual Rooms</h3>

      <h4>Main room</h4>
      <p>
        To provide an immersive introduction to the experience, we designed a
        space-themed liminal area with an alien aesthetic, which includes a
        color picker and two doors. This neutral environment establishes a
        baseline mood for the user. We encountered problems with loading and
        crashes due to the heavy assets we used to design the room, which we
        solved by replacing them with smaller models and redesigning the space.
        However, we also faced limitations in A-Frame when creating different
        environments, which required resizing and redesigning. We suggest
        rendering the entire 3D environment as one asset and implementing it
        into A-Frame to streamline the design process and provide more control
        over file loading.
      </p>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*S-FwLV2zqFV9guqukSpWdw.gif"
          alt=" A gif of 3D models for the main room "
        />
        <p>
          <strong>3D models for the main room</strong>
        </p>
      </div>

      <p>
        Our user tests revealed that the main room needed improvements to serve
        as an effective introduction. Despite adding an instruction panel, users
        were confused about navigating the space, and the panel was text-heavy
        and non-intuitive, which led to further confusion. We moved the
        instructions to the back of the environment and made the starting camera
        face them, so users begin by looking at the instructions away from the
        portal and color picker before turning around to start exploring. This
        change was helpful, and after shortening the instructions about
        movement, we believe that the main room provides an excellent
        introduction to the experience.
      </p>

      <h4>Danger room</h4>
      <p>
        Our main focus here was to create a room that would evoke the emotion of
        fear, with heavy emphasis on the color red. We brainstormed ideas and
        decided to incorporate an alarm clock, a spider, red lighting, and an
        exit room. These were all models we had considered during the first
        brainstorming session. Luckily, free versions were available. This room
        ended up being very similar to the original version from our previous
        HCI project.
      </p>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*MBlKvnf2Tb7h4ReQeqVnlQ.gif"
          alt=" A gif of rainstorming session of danger room sketches"
        />
        <p>
          <strong>Brainstorming session of danger room sketches</strong>
        </p>
      </div>

      <p>
        One issue we encountered in user testing was that the main attraction –
        a spider jump scare – was very difficult to trigger. The user needed to
        locate the clock, interact with it, then realize that they should
        interact with it again. Only then would the spider come out and
        "frighten" the player. Because of this, many players missed out on what
        we considered to be a highlight of the experience. That being said, the
        ambiance of the room was sufficient to create a tense feeling in the
        user. It did its job, but there was some room for improvement.
      </p>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*gfsuBzJ2dzi_oTUOgMBh1A.gif"
          alt=" A gif of 3D models for the danger room "
        />
        <p>
          <strong>3D models for the danger room</strong>
        </p>
      </div>

      <h4>Calm room</h4>

      <p>
        The calm room was fully realized as a calming woodland experience. We
        included a campfire, blue sky, cute A-frame house, and an animated fox.
        The fox, we thought, would provide some variation when the color of the
        environment changed. Foxes are predators, but also very cute. So
        depending on its presentation, a fox could be perceived very
        differently. Users ended up loving the fox model. A similar thought
        process made us include a lone house. It was a very peaceful model, but
        a single house in the middle of the woods could also be perceived as
        threatening.
      </p>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*tqd56mLp8tJVCk5kRAv7hg.gif"
          alt=" A gif of 3D models for the calm room"
        />
        <p>
          <strong>3D models for the calm room</strong>
        </p>
      </div>

      <p>
        In user testing, we found that many players wanted more freedom in the
        calm room. There were limited places to teleport and few things to
        interact with. Users assumed that the open feeling environment meant
        they had more control, but this was not the case. Many users lamented
        that they could not play with the fox or enter the house. Perhaps in the
        future we could add more interaction and movement, or alternatively, we
        could make the woods feel like a more closed environment.
      </p>

      <h2>User Testing – General Notes and Method</h2>

      <div className="img-wrapper">
        <img
          src="https://cdn-images-1.medium.com/max/1200/1*zuid3YSbaeDkpT19971w_w.gif"
          alt=" A gif ofUser testing session in library"
        />
      </div>

      <p>
        Once we resolved the technical issues with our project, we conducted
        user testing to evaluate the emotional experience based on the color of
        the room. We provided our users with a Google Cardboard VR headset, but
        for those who experienced nausea, we also offered a laptop version. We
        offered little guidance on how to use the controls, and some users found
        it difficult to figure out the control scheme. While experienced VR
        users adapted quickly, others found it challenging, especially those who
        were familiar with video games that use WASD controls. We believe that
        our solution to movement was relatively successful, but we may have been
        overly ambitious with the controls and environment.
      </p>
      <p>
        The users explored the environment for approximately 5–10 minutes and
        were asked to share any emotions they experienced, highlight colors that
        they thought suited the rooms well, and provide general feedback. At the
        end of the test, we gave them a short form to complete to obtain an
        overall impression of their experience. We tested the program on six
        users, and the results of our final user test are summarized in the next
        section.
      </p>

      <h3>User Test</h3>

      <img
        src="https://cdn-images-1.medium.com/max/1200/1*wwA7PtDlm-8MHiRB9fuKbQ.gif"
        alt=" A gif ofUser testing session in library"
      />
      <p>
        <strong>User testing session</strong>
      </p>

      <p>
        Users had varying emotional experiences depending on the color of the
        room. In the danger room, red was found to be particularly effective in
        creating an intimidating atmosphere, while yellow and green made the
        room less threatening and even comical. Purple and red still managed to
        make users feel unnerved, even though they didn't produce the same level
        of fear as red. Some colors were deemed unsuitable for certain rooms,
        with orange and purple thought to make the room look unattractive or
        like a rave.
      </p>
      <p>
        For the calm room, users generally felt calm when exploring it with
        yellow, green, and blue colors. However, when the room was red, they
        reported feeling uneasy and anxious. Users also experienced different
        emotions with mixed colors like purple and orange, with some finding it
        "trippy" and "psychedelic." If the color combinations clashed, users
        tended to leave the room quickly and adjust the color to find a better
        fit.
      </p>

      <h2>Post Analysis</h2>
      <p>
        Upon analyzing the results, we found that they generally aligned with
        our expectations. We were glad to see that the colors had such a
        significant impact on the user's experience, and the colors reported by
        players were consistent with established color theory. However, it was
        challenging to collect data for this experiment since there were
        numerous colors and directions the users could take, and we had limited
        guidance for data collection. As a result, we received more generalized
        responses, and many users did not feel the need to test every color
        combination, which would have been time-consuming. Interestingly, users
        tended to enjoy experimenting with color combinations more in the calm
        room due to its open and exploratory nature. Overall, we are pleased
        with our results, which demonstrate how different colors can affect the
        user's experience.
      </p>

      <h2>Final Reflection</h2>
      <p>
        In the future, we plan to continue exploring this project using better
        technology, such as creating a version for the Oculus. This would allow
        us to overcome some of the issues we encountered, such as control and
        loading problems. Looking back, we may have been too ambitious in our
        approach, which made it difficult to conduct extensive user testing. In
        retrospect, using a Wizard of Oz prototype for early-stage testing could
        have been beneficial. Despite these challenges, we are still satisfied
        with the outcomes of the project. We enjoyed using A-Frame to create a
        project we are proud of, and we were able to conduct an experiment to
        explore how colors influence emotions. By using VR, we were able to
        simulate real-life experiences and observe how colors in the environment
        impact human emotions.
      </p>
    </>
  );
};

export default Chroma;
