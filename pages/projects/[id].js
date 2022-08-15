import Link from 'next/link';
import React from 'react';
import { BackspaceIcon } from '@heroicons/react/outline';
import { getProject, getProjects } from '../../lib/projects';
import { motion } from 'framer-motion';
import { ProjectDetailVariants } from '../../motionVariants';

export async function getStaticPaths() {
  const projects = await getProjects();

  return {
    paths: projects['projects'].map((project) => ({
      params: { id: project.id.toString() },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { id } }) {
  const project = await getProject(id);
  return {
    props: { project },
  };
}

const ProjectDetail = ({ project }) => {
  const {
    title,
    img,
    description,
    details,
    technologies,
    githubUrl,
    websiteUrl,
  } = project;

  return (
    <motion.section
      className="overflow-hidden min-h-screen "
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <div className="container px-5 py-16 mx-auto h-full">
        <Link href="/#projects">
          <BackspaceIcon className="w-9 h-9 mb-12 text-brightpurple  opacity-80 cursor-pointer hover:opacity-100 transition" />
        </Link>
        <motion.h1
          className="text-brightpurple italic text-6xl sm:text-7xl lg:text-9xl mb-12 sm:mb-20 uppercase font-machine"
          variants={ProjectDetailVariants.title}
        >
          {title}
        </motion.h1>
        <div className="lg:w-full mx-auto flex flex-wrap justify-between ">
          <div className="w-full lg:w-3/5 lg:pr-12">
            <motion.img
              alt="project"
              layout="fill"
              src={img && img}
              className="w-full! relative! object-contain rounded-md opacity-95"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.3 }}
            />
          </div>
          <motion.div className="lg:w-2/5 w-full lg:pl-12 mt-6 lg:mt-0">
            <motion.div variants={ProjectDetailVariants.stagger}>
              <motion.h2
                className="text-lg mb-4"
                variants={ProjectDetailVariants.fadeInUp}
              >
                {description}
              </motion.h2>
              <div className="mb-6">
                <motion.p
                  className="mb-3 text-lg"
                  variants={ProjectDetailVariants.fadeInUp}
                >
                  Details
                </motion.p>
                {details.map((detail, index) => (
                  <motion.p
                    key={index}
                    className="mb-2 text-[15px] font-light"
                    variants={ProjectDetailVariants.fadeInUp}
                  >
                    {detail}
                  </motion.p>
                ))}
              </div>
              <div className="mb-6">
                <motion.p
                  className="mb-3 text-lg"
                  variants={ProjectDetailVariants.fadeInUp}
                >
                  Technologies
                </motion.p>
                <div className="flex flex-wrap gap-y-4">
                  {technologies.map((technology, index) => (
                    <motion.span
                      key={index}
                      className="bg-brightpurple mr-4  rounded-3xl py-2 px-3 text-[12px] uppercase"
                      variants={ProjectDetailVariants.fadeInUp}
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </div>
              <motion.div
                className="mt-8 flex justify-center sm:justify-start gap-x-4 sm:gap-x-8 "
                variants={ProjectDetailVariants.fadeInUp}
              >
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="websiteUrl"
                    className="py-2 px-4 sm:border sm:border-1 text-background bg-white sm:border-brightpurple   sm:bg-background sm:text-brightpurple sm:hover:bg-brightpurple sm:hover:text-white transition-all"
                  >
                    View Code
                  </a>
                )}

                {websiteUrl && (
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="website Url"
                    className="py-2 px-4 sm:border sm:border-1 text-background bg-white sm:border-brightpurple   sm:bg-background sm:text-brightpurple sm:hover:bg-brightpurple sm:hover:text-white transition-all"
                  >
                    View Site
                  </a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectDetail;
