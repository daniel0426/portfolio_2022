import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BackspaceIcon } from '@heroicons/react/outline';

const ProjectDetail = () => {
  const router = useRouter();
  const query = router.query;
  const { title, img } = query;
  const [ratio, setRatio] = useState(16 / 9);
  return (
    <section className=" overflow-hidden min-h-screen ">
      <div className="container px-5 py-24 mx-auto h-full">
        <Link href="/#projects">
          <BackspaceIcon className="w-8 h-8 mb-12 text-brightpurple  opacity-80 cursor-pointer hover:opacity-100 transition" />
        </Link>
        <h1 className="text-brightpurple italic text-6xl sm:text-7xl lg:text-9xl mb-12 sm:mb-20 uppercase font-machine">
          {title}
        </h1>
        <div className="lg:w-full mx-auto flex flex-wrap justify-between ">
          <div className="w-full lg:w-1/2 lg:pr-12">
            <img
              alt="ecommerce"
              layout="fill"
              src={img}
              className="w-full! relative! object-contain rounded-md opacity-95"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-12  mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>

            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>
              <div className="flex ml-6 items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
