import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import CoopPage from "./components/Coop";

function App() {
  return (
    <main className="bg-neutral-200">
      <Navbar />
      <Home />
      <About />
      <CoopPage />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
