import React from "react";
import HeaderLink from "./headerLink";
import { Link } from 'gatsby';
import logo from '../../images/codeloop_logo_wide.svg';

const Header = () => {
  const handleClick = function (e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white border-b shadow w-full">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4">
        <div
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div>
            <HeaderLink
              url="/about"
              text="About Me"
            ></HeaderLink>

            <HeaderLink
              url="/process"
              text="Our Process"
            ></HeaderLink>
          </div>
        </div>

        <Link to="/" className="hidden lg:flex items-center no-underline">
          <span className="text-5xl text-black underline font-bold">Samir Amer</span>
        </Link>

        <Link to="/" className="flex w-48 lg:hidden items-center no-underline">
          <span className="text-5xl text-black underline font-bold">Samir Amer</span>
        </Link>

        <div
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div>
            <HeaderLink
              url="/portfolio"
              text="Portfolio"
            ></HeaderLink>

            <HeaderLink
              url="/contact"
              text="Contact"
            ></HeaderLink>
          </div>
        </div>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-grey-darkest"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h60v2H0V3zm0 6h60v2H0V9zm0 6h60v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden w-full"
        >
          <div>
            <HeaderLink
              url="/about"
              text="About Me"
            ></HeaderLink>

            <HeaderLink
              url="/process"
              text="Our Process"
            ></HeaderLink>

            <HeaderLink
              url="/portfolio"
              text="Portfolio"
            ></HeaderLink>

            <HeaderLink
              url="/contact"
              text="Contact"
            ></HeaderLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
