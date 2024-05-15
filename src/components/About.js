import React, { useState } from "react";
import bootstrap from "../assets/icons/bootstrap.png";
import cprog from "../assets/icons/cprog.png";
import csharp from "../assets/icons/csharp.png";
import cssimg from "../assets/icons/css.png";
import docker from "../assets/icons/docker.png";
import flask from "../assets/icons/flask.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/githubnew.png";
import html from "../assets/icons/html.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/javascript.png";
import mysql from "../assets/icons/mysql.png";
import net from "../assets/icons/net.png";
import python from "../assets/icons/python.png";
import react from "../assets/icons/react.png";
import tailwind from "../assets/icons/tailwind.png";

export default function About() {
  const [activeSection, setActiveSection] = useState("experience"); //default

  // const aboutContent = (
  //   <div className="pt-4">
  //     <p>
  //       I am a third year Computer Science student at the University of Guelph
  //       minoring in Business, blending my technical skills with a keen
  //       understanding of the business world.
  //     </p>
  //     <br />
  //     <p>
  //       I am actively seeking opportunities for software development roles that
  //       will allow me to apply and further develop my skills. I'm excited to
  //       connect and explore potential collaborations.
  //     </p>
  //   </div>
  // );

  const experienceContent = (
    <div className="pt-4">
      <div className="flex justify-between text-lg font-bold">
        <div className="flex-initial">MANTECH Inc.</div>
        <div className="flex-initial text-right">Januray 2024 - Present</div>
      </div>

      <p className="italic ">Software Developer </p>

      <ul className="list-disc pt-2">
        <li>
          Designing and developing new control/automation/reporting software for
          MANTECH's lab products and systems, primarily in C#, and utilizing
          .NET framework and Windows Presentation Foundation (WPF)
        </li>
        <li>Integrating new equipment into existing software systems.</li>
        <li>
          Collaborating effectively with team members, demonstrating strong
          teamwork and communication skills.
        </li>
      </ul>
      <br />
      <div className="flex justify-between text-lg font-bold">
        <div className="flex-initial">University of Guelph</div>
        <div className="flex-initial text-right">Sept 2023 - December 2023</div>
      </div>
      <div className="flex justify-between">
        <div className="flex-initial italic">
          Teaching Assistant - CIS*1300: Programming <br></br> CIS*2500:
          Intermediate Programming
        </div>
        <div className="flex-initial text-right font-bold">
          (Sept 2022 - April 2023)
        </div>
      </div>

      <ul className="list-disc pt-2">
        <li>
          Conducted labs with over 50+ students, delivering instructions on
          various C programming language concepts.
        </li>
        <li>
          Assisted students in understanding assignments, labs, and fundamental
          concepts during office hours, ensuring clarity and comprehension.
        </li>
        <l1>
          Collaborated with fellow teaching assistants to coordinate
          assignments, labs, and grading activities.
        </l1>
        <li>
          Managed the ticketing system effectively to promptly address and
          resolve student queries.
        </li>
      </ul>

      <br />
      <div className="flex justify-between text-lg font-bold">
        <div className="flex-initial">University of Guelph</div>
        <div className="flex-initial text-right">May 2023 - Sept 2023</div>
      </div>

      <p className="italic ">Research Assistant </p>

      <ul className="list-disc pt-2">
        <li>
          Automated the task of coding student feedback comments, analyzing and
          categorizing them, saving significant time and effort for teachers.
        </li>
        <li>
          Implemented data mining algorithms to identify patterns, keywords, and
          specific criteria within comments, enabling automated assignment of
          categories.
        </li>
      </ul>
    </div>
  );

  const skillsContent = (
    <div>
      <h4 className="pt-4">Languages and DataBases</h4>
      <div className="flex flex-wrap gap-2 pt-2 pb-4">
        <img src={python} alt="python" />
        <img src={cprog} alt="c" />
        <img src={csharp} alt="csharp" />
        <img src={java} alt="java" />
        <img src={javascript} alt="js" />
        <img src={html} alt="html" />
        <img src={cssimg} alt="css" />
        <img src={mysql} alt="mysql" />
        {/* {iconnames.map((name) => (
              <img src={name} alt="im" />
            ))} */}
      </div>
      <h4>Framework and Technologies</h4>
      <div className="flex flex-wrap gap-2 pt-2 pb-4">
        <img src={react} alt="react" />
        <img src={flask} alt="flask" />
        <img src={bootstrap} alt="bs" />
        <img src={tailwind} alt="tail" />
        <img src={net} alt="netfr" />
      </div>
      <h4>Tools and Platforms</h4>
      <div className="flex flex-wrap gap-3 pt-2 pb-4">
        <img src={git} alt="git" />
        <img src={github} alt="github" />
        <img src={docker} alt="docker" />
      </div>
    </div>
  );

  let sectionContent;
  if (activeSection === "skills") {
    sectionContent = skillsContent;
  } else {
    sectionContent = experienceContent;
  }

  // const iconnames = [
  //   python,
  //   cprog,
  //   java,
  //   javascript,
  //   react,
  //   mysql,
  //   html,
  //   cssimg,
  //   flask,
  //   bootstrap,
  //   tailwind,
  //   git,
  //   docker,
  //   github,
  // ];

  return (
    <section id="about" className="bg-neutral-200 py-10 mt-10">
      <h2 className="text-center text-4xl font-julius font-extrabold mb-10 pt-10">
        ABOUT ME
      </h2>
      <div className="grid grid-cols-1 gap-4 px-60">
        {/* <div className="container mx-auto">
          <img src={vector} alt="vectorimg"></img>
        </div> */}
        <div className="container bg-neutral-200">
          <h2 className="text-xl font-playfair mb-4">
            {/* <button
              className="border-transparent hover:border-b hover:border-black transition duration-300"
              onClick={() => setActiveSection("about")}
            >
              Me
            </button>
            &nbsp; &nbsp; */}
            <button
              className="border-transparent hover:border-b hover:border-black transition duration-300"
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </button>
            &nbsp; &nbsp;
            <button
              className="border-transparent hover:border-b hover:border-black transition duration-300"
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
          </h2>

          <p className="text-black text-lg font-playfair font-light border-t pt-2">
            {sectionContent}
          </p>
        </div>
      </div>
    </section>
  );
}
