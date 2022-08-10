import Image from 'next/image';
import React from 'react';

function Skills() {
  return (
    <section className="container md:mt-12 bg-white/95 w-[90%] lg:w-[85%] mx-auto py-12 rounded-lg  ">
      <p className="text-xl sm:text-2xl font-light text-purple pb-12 text-center sm:text-left sm:ml-12 ">
        Here are some technologies that <br /> I can make your idea into real{' '}
      </p>
      <div className="grid grid-cols-2 gap-y-[2rem] md:grid-cols-4">
        <div className="skill">
          <Image src="/skills/js.svg" width={80} height={80} alt="skill-img" />
          <p className="text-background">
            Javascript <br />
            (ES+6)
          </p>
        </div>
        <div className="skill">
          <Image src="/skills/ts.svg" width={80} height={80} alt="skill-img" />
          <p className="text-background">Typescript</p>
        </div>
        <div className="skill">
          <Image
            src="/skills/react.svg"
            width={80}
            height={80}
            alt="skill-img"
          />
          <p className="text-background">React</p>
        </div>
        <div className="skill">
          <Image
            src="/skills/redux.svg"
            width={80}
            height={80}
            alt="skill-img"
          />
          <p className="text-background">
            Redux <br /> (thunk / saga)
          </p>
        </div>
        <div className="skill">
          <Image
            src="/skills/next.svg"
            width={80}
            height={80}
            alt="skill-img"
          />
          <p className="text-background">Next.js</p>
        </div>
        <div className="skill">
          <Image
            src="/skills/tailwind.svg"
            width={80}
            height={80}
            alt="skill-img"
          />
          <p className="text-background">Tailwindcss</p>
        </div>
        <div className="skill">
          <Image
            src="/skills/firebase.svg"
            width={80}
            height={80}
            alt="skill-img"
          />
          <p className="text-background">Firebase</p>
        </div>
        <div className="skill">
          <Image src="/skills/aws.svg" width={80} height={80} alt="skill-img" />
          <p className="text-background">AWS</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
