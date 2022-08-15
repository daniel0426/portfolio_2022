import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { BackspaceIcon } from '@heroicons/react/outline';

const ProjectDetail = () => {
  const router = useRouter();
  const query = router.query;
  const {
    title,
    img,
    description,
    details,
    technologies,
    githubUrl,
    websiteUrl,
  } = query;

  return (
    <section className=" overflow-hidden min-h-screen ">
      <div className="container px-5 py-24 mx-auto h-full">
        <Link href="/#projects">
          <BackspaceIcon className="w-9 h-9 mb-12 text-brightpurple  opacity-80 cursor-pointer hover:opacity-100 transition" />
        </Link>
        <h1 className="text-brightpurple italic text-6xl sm:text-7xl lg:text-9xl mb-12 sm:mb-20 uppercase font-machine">
          {title}
        </h1>
        <div className="lg:w-full mx-auto flex flex-wrap justify-between ">
          <div className="w-full lg:w-3/5 lg:pr-12">
            <img
              alt="project"
              layout="fill"
              src={img && img}
              className="w-full! relative! object-contain rounded-md opacity-95"
            />
          </div>
          <div className="lg:w-2/5 w-full lg:pl-12 mt-6 lg:mt-0">
            <h2 className="text-lg mb-4">{description && description}</h2>
            <div className="mb-6">
              <p className="mb-3 text-lg">Details</p>
              {details?.map((detail, index) => (
                <p key={index} className="mb-2 text-sm font-light ">
                  {detail && detail}
                </p>
              ))}
            </div>
            <div className="mb-6">
              <p className="mb-3 text-lg">Technologies</p>
              <div className="flex flex-wrap gap-y-4">
                {technologies?.map((technology, index) => (
                  <span
                    key={index}
                    className="bg-brightpurple mr-4  rounded-3xl py-2 px-3 text-[12px] uppercase"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center sm:justify-start gap-x-4 sm:gap-x-8 ">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
