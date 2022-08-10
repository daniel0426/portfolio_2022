import Image from 'next/image';
import React from 'react';
import Skills from './Skills';

function About() {
  return (
    <section className="container mx-auto flex flex-col py-12 ">
      <h2 className="section-title">about</h2>
      <div className="flex flex-col md:flex-row justify-center ">
        <div className="uppercase  mx-auto text-lg sm:text-lg md:text-[24px] leading-normal lg:leading-tight w-3/4 md:max-w-lg lg:max-w-xl mb-16 ">
          <p className="text-right">i am createive frontend </p>
          <p className="mb-4">
            developer based in new zealand. i use my passion and skills to
            create software products and exceptional web experiences.
          </p>
          <p className="mb-4">
            I have the ability to work independently as well as within a team
            environment with a proactive and eager attitude towards professional
            growth in my craft.
          </p>
          <p>
            beyond front-end development, i eager to learn how to show data
            effectively to users and write backend logic to handle massive
            traffic
          </p>
        </div>
        <div className="w-3/4 md:w-1/2 flex flex-col justify-center mx-auto md:mx-0">
          <div className=" text-center mb-6 opacity-80 w-3/4 md:w-2/3 mx-auto uppercase text-xl lg:text-2xl">
            <div className="relative bottom-6 md:bottom-4 right-4 md:right-2 h-6 text-6xl text-[92px] text-left text-purple">
              “
            </div>
            <p className="mb-2 md:mb-6 text-center">your attitude</p>
            <p className="text-center">determines your altitude</p>
            <div className="relative left-4 md:left-2 h-3 text-6xl text-[92px] text-right text-purple">
              ”
            </div>
          </div>
          <Image
            src="/about-img.png"
            width={200}
            height={280}
            className="object-contain"
            alt="about img"
          />
        </div>
      </div>
      <Skills />
      <h2 className="section-title">about /</h2>
    </section>
  );
}

export default About;
