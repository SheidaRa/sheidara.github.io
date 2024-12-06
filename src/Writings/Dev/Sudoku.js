import React from "react";
import ExpandableImage from "../../Components/ExpandableImage";

const Sudoku = ({ zoomImage, expandTitle }) => {
  return (
    <>
      <h3>Overview</h3>
      <p>
        This project is a Python script that solves Sudoku puzzles using the{" "}
        <strong>backtracking algorithm</strong>. The program accepts a 9x9
        Sudoku puzzle as input, represented as a 2D array, with empty slots
        denoted by the number <code>0</code>. Once the code is executed, the
        solved puzzle is displayed in the terminal in a structured format for
        easy readability.
      </p>

      <h3>Technologies and Programming Languages</h3>
      <ul>
        <li>
          <strong>Python</strong> as the programming language for implementing
          the backtracking algorithm
        </li>
        <li>
          Commented-out code for <strong>Tkinter</strong> (not used in the
          solving process) to create a graphical interface
        </li>
      </ul>

      <h3>Algorithm and Implementation</h3>

      <h4>Core Functions</h4>
      <ul>
        <li>
          <strong>printBoard():</strong> Takes a 2D array and prints it in the
          format of a Sudoku puzzle, with horizontal lines separating 3x3 boxes
          for better readability.
        </li>
        <li>
          <strong>isEmpty():</strong> Searches the board for the first empty
          cell (value <code>0</code>) and returns its coordinates. If no empty
          cells are found, it returns <code>None</code>.
        </li>
        <li>
          <strong>validRow(), validCol(), validBox():</strong> Validate whether
          a given number can be placed in a specific row, column, or 3x3 box,
          respectively.
        </li>
        <li>
          <strong>validNum():</strong> Combines the row, column, and box
          validation checks to determine if a number is valid in a specific
          cell.
        </li>
        <li>
          <strong>solve():</strong> Uses the backtracking algorithm to
          recursively try numbers in empty cells, backtracking if a solution is
          not possible. The function:
          <ul>
            <li>
              Identifies the next empty cell using <code>isEmpty()</code>.
            </li>
            <li>
              Tries numbers from 1 to 9, validating each with{" "}
              <code>validNum()</code>.
            </li>
            <li>
              If a valid number is found, it is placed in the cell, and the
              function recurses with the updated board.
            </li>
            <li>
              If no number leads to a solution, the function backtracks by
              undoing the last move and tries the next number.
            </li>
          </ul>
        </li>
      </ul>

      <h4>Backtracking Process</h4>
      <p>
        The script follows a recursive backtracking approach to solve the Sudoku
        puzzle:
      </p>
      <ol>
        <li>
          Identify the first empty cell using <code>isEmpty()</code>.
        </li>
        <li>
          For each number from 1 to 9:
          <ul>
            <li>
              Check if it is a valid move using <code>validNum()</code>.
            </li>
            <li>
              If valid, place the number in the cell and recursively call{" "}
              <code>solve()</code>.
            </li>
            <li>
              If the recursive call fails, undo the move (backtrack) and try the
              next number.
            </li>
          </ul>
        </li>
        <li>Repeat until the puzzle is solved or no solution is found.</li>
      </ol>

      <h3>Execution</h3>
      <p>
        The script initializes the board as a 2D array representing the Sudoku
        puzzle to be solved. It then:
      </p>
      <ul>
        <li>
          Calls the <code>solve()</code> function to attempt solving the puzzle.
        </li>
        <li>
          If the function returns <code>True</code>, it uses{" "}
          <code>printBoard()</code> to display the solved puzzle in the
          terminal.
        </li>
        <li>
          If the function returns <code>False</code>, it indicates that the
          puzzle cannot be solved with the given initial state.
        </li>
      </ul>

      <h3>Conclusion</h3>
      <p>
        The Sudoku Solver efficiently solves puzzles using a recursive
        backtracking algorithm, leveraging Python's capabilities for logical
        processing and array manipulation. While the Tkinter code for a
        graphical interface is not utilized, the core functionality ensures a
        reliable solution for Sudoku puzzles directly via terminal execution.
      </p>
    </>
  );
};

export default Sudoku;
