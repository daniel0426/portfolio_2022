import Link from 'next/link';
import React from 'react';
import { DocumentTextIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { ImLinkedin, ImGithub } from 'react-icons/im';
function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="/logo.png"
          width={110}
          height={100}
          alt="logo"
          className="obejct-contain cursor-pointer w-3/4 md:w-full "
        />
      </Link>
      <ul className="hidden md:flex space-x-4 text-lg items-center ">
        <li>
          <MoonIcon className="w-5 h-5 cursor-pointer " />
        </li>
        <li>
          <Link href="/#projects">PROJECTS</Link>
        </li>
        <li>
          <Link href="/#contact">CONTACT</Link>
        </li>
        <li>
          <a href="" target="_blank" className="flex items-center">
            <span>CV</span>
            <DocumentTextIcon className="w-6 h-5" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-chung-0426/"
            target="_blank"
            rel="noreferrer"
            title="linkedin"
          >
            <ImLinkedin className="w-6 h-6 text-mint" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/daniel0426"
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <ImGithub className="w-6 h-6 text-mint" />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
