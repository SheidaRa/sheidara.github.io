import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const MyPlanner = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Technologies Used</h3>
      <ul>
        <li>Java</li>
      </ul>
      <h3>Project Overview</h3>
      <p>
        The Task Planner App is a feature-rich tool designed to help users
        manage and prioritize their tasks and assignments efficiently. It
        provides functionality to add, sort, and track tasks based on various
        criteria, leveraging advanced data structures and algorithms for
        seamless performance.
      </p>
      <ExpandableImage
        path="https://raw.githubusercontent.com/SheidaRa/MyPlanner/refs/heads/main/MainInterface.png"
        expandTitle={expandTitle}
        zoomImage={zoomImage}
        alt="Screenshot of MyPlanner application interface, displaying a list of tasks with details such as deadlines, categories, and priority levels. The interface includes a live clock, buttons for sorting tasks by priority, category, or time, and controls for adding, completing, or removing tasks. Tasks are displayed in a blue card format with checkboxes and delete buttons, all set against a serene water-themed background."
        caption="MyPlanner main interface"
      />

      <h3>Key Features</h3>
      <ul>
        <li>
          Allows users to create tasks with details such as name, deadlines,
          categories, and priority levels (on a scale of 1-4).
        </li>
        <li>
          Dynamic sorting of tasks by nearest deadline, alphabetical category,
          or user-defined priority, using custom comparators.
        </li>
        <li>
          Error handling for invalid or incomplete task entries, with specific
          error messages guiding users to correct input.
        </li>
        <li>
          Persistent state management to track the completion status of tasks
          across different sorting views.
        </li>
      </ul>
      <h3>Class Decomposition</h3>
      <ul>
        <li>
          <strong>PlannerApp.java:</strong> Initializes the app window, manages
          the task list, and integrates priority queues and comparators for
          sorting.
        </li>
        <li>
          <strong>AddMenu.java:</strong> Handles user input for creating tasks,
          validating entries, and adding tasks to the planner.
        </li>
        <li>
          <strong>Task.java:</strong> Represents task objects containing
          attributes like name, category, due date, and priority.
        </li>
        <li>
          <strong>TaskGUI.java:</strong> Generates graphical representations of
          tasks and integrates sorting logic with user interaction.
        </li>
        <li>
          <strong>CategoryComparator.java:</strong> Sorts tasks alphabetically
          by category and by deadline if categories are identical.
        </li>
        <li>
          <strong>PriorityComparator.java:</strong> Orders tasks based on
          user-defined priority, resolving ties using deadlines.
        </li>
        <li>
          <strong>TimeComparator.java:</strong> Sorts tasks by deadline or due
          time.
        </li>
      </ul>
      <h3>Data Structures</h3>
      <ul>
        <li>
          <strong>ArrayLists:</strong> Used to manage the tasks and their
          corresponding GUI objects, providing efficient indexing and access.
        </li>
        <li>
          <strong>Priority Queues:</strong> Utilized for sorting tasks by
          different criteria, including category, deadline, and priority.
        </li>
        <li>
          <strong>Maps:</strong> Maintains the state of task completion,
          ensuring checkboxes remain consistent across sorting views.
        </li>
      </ul>
      <h3>Future Improvements</h3>
      <ul>
        <li>
          Adding scroll functionality for better task management with larger
          task lists.
        </li>
        <li>
          Implementing a reminder system for task notifications even when the
          app is closed.
        </li>
        <li>
          Enabling export-to-calendar functionality for seamless integration
          with personal schedules.
        </li>
        <li>
          Expanding user customization with options for personalized themes and
          backgrounds.
        </li>
      </ul>
    </>
  );
};

export default MyPlanner;
