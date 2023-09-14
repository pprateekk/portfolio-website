import molecule from "./assets/molecule.jpg";
import sudoku from "./assets/sudoku.png";
import chatapp from "./assets/chatapp.png";
import tictac from "./assets/tictactoe.png";

export const projects = [
  {
    title: "Web-Chat-Application",
    description:
      "A full-stack web-based chat application developed using Flask and Socket.IO for real-time communication.",
    image: chatapp,
    link: "https://www.github.com/pprateekk/web-chat-application",
  },
  {
    title: "Sudoku-Solver-GUI",
    description:
      "This is a backtracking algorithm program that solves a sudoku puzzle. It has both a GUI and a text-based version.",
    image: sudoku,
    link: "https://www.github.com/pprateekk/sudoku-solver-GUI",
  },
  {
    title: "Molecule-Viewer",
    description:
      "A full-stack application featuring a user-friendly GUI front-end for uploading SDF files and displaying SVG images of molecules.",
    image: molecule,
    link: "https://www.github.com/pprateekk/molecule-viewer",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A Tic Tac Toe game implemented in Java",
    image: tictac,
    link: "https://github.com/pprateekk/game-tictactoe",
  },
];
