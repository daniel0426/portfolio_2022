import React from 'react';
import Link from 'next/link';

import {
  DocumentTextIcon,
  MoonIcon,
  SunIcon,
  MenuAlt3Icon,
  XCircleIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import { ImLinkedin, ImGithub } from 'react-icons/im';

function Header() {
  const MobileMenuOpenHandler = () => {
    document.body.classList.add('is-nav-open');
  };

  const MobileMenuCloseHandler = () => {
    document.body.classList.remove('is-nav-open');
  };

  return (
    <header className="bg-gradient">
      <Link href="/">
        <Image
          src="/logo.png"
          width={110}
          height={100}
          alt="logo"
          className="obejct-contain cursor-pointer w-3/4 md:w-full "
        />
      </Link>
      <MenuAlt3Icon
        className="w-11 h-11 cursor-pointer md:hidden transition-all duration-400 ease-[cubic-bezier(0.19, 1, 0.22, 1)] "
        onClick={MobileMenuOpenHandler}
      />
      <nav className="nav transition-all">
        <XCircleIcon
          className="nav-close-btn w-11 h-11 text-purple hover:text-white transition"
          onClick={MobileMenuCloseHandler}
        />
        <ul className="space-x-4 ">
          <li className="theme-btn">
            <MoonIcon className="w-5 h-5 cursor-pointer" />
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
              <DocumentTextIcon className="w-12 h-13 ml-0.5 md:ml-0.3 md:w-5 md:h-5 " />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-chung-0426/"
              target="_blank"
              rel="noreferrer"
              title="linkedin"
            >
              <ImLinkedin className="w-11 h-11 md:w-6 md:h-6  text-purple hover:text-white md:text-mint md:hover:text-mint " />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/daniel0426"
              target="_blank"
              rel="noreferrer"
              title="github"
            >
              <ImGithub className="w-11 h-11 md:w-6 md:h-6 text-purple hover:text-white md:text-mint md:hover:text-mint " />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
