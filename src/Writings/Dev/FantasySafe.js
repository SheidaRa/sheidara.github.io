import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const FantasySafe = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        This app is designed to provide a simple and easy-to-use interface for
        counting and tracking resources, such as money, in fantasy games.
        Developed using the <strong>Java programming language</strong> and the{" "}
        <strong>Android framework</strong>, it features two fragments: one for
        displaying the current counter value and another for controlling it. The
        app employs an <strong>SQLite database</strong> to save the counter
        value, allowing users to retrieve it even after closing and reopening
        the app.
      </p>
      <p>
        The app offers a solution to the challenge of manually tracking game
        resources or remembering their values between sessions. Users can
        increment, decrement, or add values to the counter using intuitive
        buttons and fields, and a save feature ensures data persistence.
      </p>
      <ExpandableImage
        path="https://raw.githubusercontent.com/SheidaRa/Fantasy-Safe/refs/heads/main/Demo.png"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        alt="An image showing the Fantasy Safe app under development."
        caption="Development demo"
      />

      <h3>Technologies Used</h3>
      <ul>
        <li>
          <strong>Java</strong> for application logic and functionality
        </li>
        <li>
          <strong>Android framework</strong> for UI components and lifecycle
          management
        </li>
        <li>
          <strong>SQLite</strong> for local database storage
        </li>
        <li>
          <strong>MediaPlayer</strong> for handling audio playback
        </li>
      </ul>

      <h3>Implementation Details</h3>
      <h4>Fragments</h4>
      <p>The app utilizes two fragments for modular functionality:</p>
      <ul>
        <li>
          <strong>CounterFragment:</strong> Displays the current counter value
          by receiving updates from the MainActivity class and updating the
          TextView.
        </li>
        <li>
          <strong>ControlsFragment:</strong> Provides controls for managing the
          counter value. It includes:
          <ul>
            <li>Plus and minus buttons to increment or decrement the value</li>
            <li>A field to input custom values for bulk addition</li>
            <li>
              A save button to store the counter value in the SQLite database
            </li>
          </ul>
          The fragment communicates with the MainActivity class for executing
          these actions.
        </li>
      </ul>

      <h4>SQLite Database</h4>
      <p>
        The app uses the <strong>SQLite library</strong> for local data storage.
        The <code>DatabaseHelper</code> class, extending{" "}
        <code>SQLiteOpenHelper</code>, acts as the interface between the app and
        the database. Key methods include:
      </p>
      <ul>
        <li>
          <strong>onCreate():</strong> Creates the database and its table using
          SQL commands when the app is launched for the first time.
        </li>
        <li>
          <strong>saveCounter():</strong> Saves the current counter value to the
          database using the <code>SQLiteDatabase.insert()</code> method.
        </li>
        <li>
          <strong>getCounter():</strong> Retrieves the saved counter value upon
          app launch using the <code>SQLiteDatabase.query()</code> method.
        </li>
      </ul>
      <p>
        These methods ensure data persistence, allowing the user to resume
        tracking seamlessly between sessions.
      </p>

      <h4>Background Music</h4>
      <p>
        The app uses the <strong>MediaPlayer</strong> object for audio playback.
        The <code>create()</code> method initializes the player with an audio
        file from the <code>res/raw</code> directory. The{" "}
        <code>setLooping()</code> method allows the music to play continuously,
        while <code>start()</code> begins playback. This enhances the immersive
        experience for users during gameplay.
      </p>

      <h3>Conclusion</h3>
      <p>
        The Fantasy Game Resource Tracker App offers a robust solution for
        tracking resources in fantasy games. Its implementation leverages key
        technologies such as fragments for modular functionality, SQLite for
        data persistence, and MediaPlayer for audio playback. The app has been
        thoroughly tested for performance and functionality, meeting its
        intended purpose. Future enhancements could include features such as a
        mute option for background music and automatically displaying the saved
        counter value upon app launch.
      </p>
    </>
  );
};

export default FantasySafe;
