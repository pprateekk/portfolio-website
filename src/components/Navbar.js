import React from "react";

const Navbar = () => {
  return (
    // <nav className="bg-black fixed top-0 left-0 right-0 z-10 p-4 text-white">
    <nav className="bg-neutral-200 fixed top-0 left-0 right-0 z-10 p-4 text-black">
      <div className="container  mx-auto flex justify-between items-center">
        <a href="#home" className="text-4xl font-cormorant font-bold">
          Prateek
        </a>
        <ul className="flex space-x-4 text-lg font-cormorant font-light">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#coop">Coop</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
