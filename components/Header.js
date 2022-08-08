import Link from 'next/link';
import React from 'react';
import { DocumentTextIcon } from '@heroicons/react/outline';
function Header() {
  const mainLogo = (
    <h2 className="text-2xl font-machine leading-6">
      Dev <br />
      Daniel
    </h2>
  );
  return (
    <header>
      <Link href="/" className="text-2xl font-machine whitespace-pre">
        {mainLogo}
      </Link>
      <ul className="flex space-x-4">
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
        <li></li>
      </ul>
    </header>
  );
}

export default Header;
