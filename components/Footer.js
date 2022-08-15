import React from 'react';
import Image from 'next/image';
import { ImLinkedin, ImGithub } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <footer>
      <div className=" flex items-center sm:flex-row flex-col mb-4">
        <div className="flex items-center ">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={50}
              className="obejct-contain cursor-pointer w-3/4 md:w-full "
            />
          </a>
          <p className="text-sm text-gray-500 ml-4 pl-4 border-l-2 border-gray-200 py-2 ">
            © Handcrafted by me @twentytwentytwo
          </p>
        </div>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4   items-center ">
          <a
            href="https://www.linkedin.com/in/daniel-chung-0426/"
            target="_blank"
            rel="noreferrer"
            title="linkedin"
            className="ml-5"
          >
            <ImLinkedin className="w-6 h-6 text-mint hover:brightness-125 " />
          </a>
          <a
            href="https://github.com/daniel0426"
            target="_blank"
            rel="noreferrer"
            title="github"
            className="ml-5"
          >
            <ImGithub className="w-6 h-6 text-mint hover:brightness-125" />
          </a>
          <a
            href="mailto:devdaneil0426@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="mail"
            className="ml-5"
          >
            <HiOutlineMail className="w-8 h-8 text-mint hover:brightness-125" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
