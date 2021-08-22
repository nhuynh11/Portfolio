import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are some of the projects I've been working on in my free time.
          </p>
        </div>
        <div className="space-y-4">
          {projects.map((project) => (
            <div className="block ... bg-gray-800 rounded p-4">
                <a href={project.link}><h1 className="title-font text-lg font-medium text-white mb-3">{project.title}<ExternalLinkIcon className="mx-auto inline-block w-4 mb-1" /></h1></a>
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{project.subtitle}</h2>
                <p className="leading-relaxed">{project.description}</p>
                <img
                  alt="gallery"
                  className="w-full object-cover object-center p-4"
                  src={project.image}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}