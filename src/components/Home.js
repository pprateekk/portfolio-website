import React from "react";
import githubimg from "../assets/icons/github.png";
import linkedin from "../assets/icons/link.png";
import email from "../assets/icons/email2.png";

export default function Home() {
  return (
    <section id="home" className="bg-neutral-200 py-8">
      <div className="flex flex-col items-center justify-center h-screen ">
        <h2 className="text-6xl font-cormorant font-semibold">👋</h2>
        <h2 className="text-8xl font-cormorant font-semibold">
          Hello there! I'm Prateek
        </h2>
        <h3 className="text-black text-3xl font-cormorant font-medium pt-2">
          I'm currently in my 3rd year of Computer Science at the University of
          Guelph.
        </h3>
        <br />

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="mailto:pprateek@uoguelph.ca"
            className="opacity-100 hover:opacity-75"
          >
            <img src={email} alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/p-prateek"
            className="opacity-100 hover:opacity-75"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.github.com/pprateekk"
            className="opacity-100 hover:opacity-75"
          >
            <img src={githubimg} alt="github" />
          </a>
        </div>
      </div>
    </section>
  );
}
