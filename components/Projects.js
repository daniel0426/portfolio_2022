import React from 'react';

function Projects({ projects }) {
  return (
    <section className="container mx-auto py-12 px-2">
      <h2 className="section-title">projects</h2>
      <p className="max-w-md text-[16px] mx-auto mb-2">
        This is a showcase of my works using variety of technologies
      </p>
      <p className="max-w-md text-[16px] mx-auto mb-12">
        The word of development process has grown at an extremely rapid rate and
        my aim has been to evolve with it. I am learning and gaining new skills
        every day.
      </p>
      <div className="grid grid-cols-1 gap-y-[3rem] sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <h3 key={project.id} className="text-center">
            {project.title}
          </h3>
        ))}
      </div>

      <h2 className="section-title">projects /</h2>
    </section>
  );
}

export default Projects;
