import Link from 'next/link';
import React from 'react';

function Projects({ projects }) {
  return (
    <section className="container mx-auto py-12 px-2" id="projects">
      <h2 className="section-title">projects</h2>
      <div className="flex flex-col mx-auto w-4/5 sm:w-full md:flex-row justify-center sm:grid-cols-2 items-start ">
        <div className="font-light mx-auto py-7 sm:w-1/2  relative flex flex-col min-h-full">
          <p className="max-w-md text-[16px] mx-auto mb-6 ">
            This is a showcase of my works using variety of technologies.
          </p>
          <p className="max-w-md text-[16px] mx-auto mb-12 ">
            The word of development process has grown at an extremely rapid rate
            and my aim has been to evolve with it. I am learning and gaining new
            skills every day.
          </p>
          <div className="flex flex-1 h-full flex-col items-center opacity-80 ">
            <div className="w-2.5 h-2.5 mb-8 rounded-full bg-brightpurple "></div>
            <div className="w-0.5 flex-1 h-full bg-brightpurple"></div>
          </div>
        </div>
        <div className="mx-auto sm:w-1/2 md:pl-12">
          {projects.map((project) => (
            <Link
              href={{ pathname: `/projects/${project.id}`, query: project }}
              key={project.id}
              className="cursor-pointer"
            >
              <div className="cursor-pointer mb-4 sm:mb-0 flex flex-col group ">
                <p className="text-6xl sm:text-8xl  lg:text-9xl text-purple  font-machine opacity-85 hover:opacity-100 hover:brightness-125  hover:italic hover:translate-x-3 transition-all">
                  {project.title}
                </p>
                <p className="opacity-70 text-sm sm:text-base font-light pl-0.5 sm:pl-2  group-hover:opacity-100 transition-all">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <h2 className="section-title">projects /</h2>
    </section>
  );
}

export default Projects;
