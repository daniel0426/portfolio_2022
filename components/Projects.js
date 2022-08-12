import Link from 'next/link';
import React from 'react';

function Projects({ projects }) {
  return (
    <section className="container mx-auto py-12 px-2" id="projects">
      <h2 className="section-title">projects</h2>
      <div className="flex flex-col mx-auto w-4/5 sm:w-full md:flex-row justify-center sm:grid-cols-2 items-start">
        <div className="font-light mx-auto py-7 max-w-xs sm:max-w-sm lg:max-w-sm">
          <p className="max-w-md text-[16px] mx-auto mb-6">
            This is a showcase of my works using variety of technologies.
          </p>
          <p className="max-w-md text-[16px] mx-auto mb-12">
            The word of development process has grown at an extremely rapid rate
            and my aim has been to evolve with it. I am learning and gaining new
            skills every day.
          </p>
        </div>
        <div className="mx-auto">
          {projects.map((project) => (
            <Link
              href={{ pathname: `/projects/${project.id}`, query: project }}
              key={project.id}
              className="cursor-pointer"
            >
              <div className="cursor-pointer  mb-4 sm:mb-0">
                <p className="text-6xl sm:text-9xl text-purple font-machine  transition-all hover:italic hover:translate-x-2">
                  {project.title}
                </p>
                <p className="opacity-90 font-light pl-2">
                  eifjaiejifajfeiawjefiajfiejifajiefja
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
