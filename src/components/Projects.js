import React from "react";
import { projects } from "../projects";

export default function Project() {
  return (
    <section id="project" className="bg-neutral-200 py-10 mt-10">
      <div className="container mx-auto px-72">
        <div className="text-center">
          <h2 className="text-4xl font-julius font-semibold mb-10 pt-10">
            My Projects
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {projects.map((project) => (
              <div className="rounded-xl shadow-2xl transition ease-in-out delay-150  hover:scale-110">
                <a href={project.link}>
                  <img
                    alt="image"
                    src={project.image}
                    className="w-70 h-64 rounded-xl object-cover mx-auto"
                  />
                  <br />
                  <div>
                    <h1 className="text-black text-2xl font-cormorant font-medium">
                      {project.title}
                    </h1>
                    <p className="text-black text-xl font-cormorant font-medium">
                      {project.description}
                    </p>
                    <br />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
