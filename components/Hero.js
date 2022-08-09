import React from 'react';
import HeroAnimation from './HeroAnimation';

function Hero() {
  return (
    <section className="text-white font-montserrat h-[85vh] flex items-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
        <div className=" font-medium md:w-1/2 flex flex-col md:items-start  mb-16 md:mb-0  ">
          <h1 className="text-3xl lg:leading-tight md:text-4xl lg:text-5xl mb-4 border-l-2 border-l-purple border-dashed pl-4 ">
            Hi ! My name is
            <br />
            <span className="text-purple"> Daniel Chung </span>
          </h1>
          <p className="md:mb-8 leading-relaxed text-xl md:text-2xl lg:text-2xl opacity-70 font-light">
            Creative frontend developer
          </p>
        </div>
        <div className=" w-4/5 md:w-1/3 lg:w-1/4  ">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}

export default Hero;
