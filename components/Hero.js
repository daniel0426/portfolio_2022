import React from 'react';
import HeroAnimation from './HeroAnimation';

function Hero() {
  return (
    <section className="text-white font-montserrat h-[70vh] md:h-[90vh] flex ">
      <div className="container mx-auto flex py-24 md:flex-row flex-col items-center justify-center">
        <div className="w-3/4 md:w-1/2 mx-auto flex flex-col md:items-start mb-12 md:mb-0  ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:leading-tight mb-4 border-l-2 border-l-purple border-dashed pl-4 ">
            Hi ! My name is
            <br />
            <span className="text-purple"> Daniel Chung </span>
          </h1>
          <p className="md:mb-8 leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-70 font-light">
            Creative frontend developer
          </p>
        </div>
        <div className=" w-3/4 sm:w-3/5 md:w-1/3  mx-auto ">
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
}

export default Hero;
