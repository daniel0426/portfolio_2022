import React from 'react';
import Image from 'next/image';
import { ImLinkedin, ImGithub } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

function Footer() {
  return (
    <footer>
      <div className=" flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image
            src="/logo.png"
            alt="logo"
            width={60}
            height={50}
            className="obejct-contain cursor-pointer w-3/4 md:w-full "
          />
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 Made with Love by Daniel
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
          <a
            href="https://www.linkedin.com/in/daniel-chung-0426/"
            target="_blank"
            rel="noreferrer"
            title="linkedin"
            className="ml-3"
          >
            <ImLinkedin className="w-6 h-6 text-mint" />
          </a>
          <a
            href="https://github.com/daniel0426"
            target="_blank"
            rel="noreferrer"
            title="github"
            className="ml-3"
          >
            <ImGithub className="w-6 h-6 text-mint" />
          </a>
          <a
            href="mailto:devdaneil0426@gmail.com"
            target="_blank"
            rel="noreferrer"
            title="mail"
            className="ml-3"
          >
            <HiOutlineMail className="w-8 h-8 text-mint" />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
