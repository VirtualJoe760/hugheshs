import React from "react";
import { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [isHovered, setIsHovered] = useState(false);

  return (
    <nav id="header" className="fixed w-full z-30 top-0 bg-blue-950">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link
            className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            to="/"
          >
            {/* <!--Icon from: http://www.potlabicons.com/ --> */}
            <svg   
              className="h-10 fill-current inline mx-1 mb-1"
              fill="#8a0a0a"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 380.721 380.721"
              enable-background="new 0 0 305.762 305.762"
              stroke="#8a0a0a"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="m302.37,87.612c-1.876-0.914-4.108-0.678-5.752,0.607l-13.558,10.605c-1.243,0.973-2.005,2.436-2.087,4.013l-1.692,32.366c-0.109,2.08-1.392,3.916-3.308,4.734l-43.509,18.561c-2.572,1.097-3.898,3.962-3.071,6.633l11.448,36.948c0.453,1.461 0.271,3.044-0.499,4.365-0.771,1.321-2.06,2.257-3.555,2.582l-62.587,13.586c-2.931,0.636-4.799,3.519-4.182,6.454l5.095,24.243c0.405,1.927-0.26,3.923-1.74,5.222l-42.92,37.674c-1.707,1.498-2.307,3.898-1.507,6.023 0.801,2.126 2.834,3.533 5.106,3.533h16.383 149.544c3.013,0 5.456-2.443 5.456-5.456v-207.788c0-2.087-1.19-3.991-3.065-4.905z" />{" "}
                  <path d="m106.74,177.652v-35.896l-16.473,8.143c0.007,5.027-1.527,9.923-4.485,14.112-4.585,6.493-12.07,10.369-20.024,10.369-5.081,0-9.964-1.552-14.121-4.488l-.748-.528-10.359,5.121v5.197l-1.87,44.701-24.993,60.661c-3.155,7.659 0.495,16.427 8.155,19.583 1.869,0.771 3.805,1.135 5.708,1.135 5.896,0 11.489-3.5 13.875-9.29l26-63.105c0.666-1.617 1.045-3.339 1.118-5.087 1.265-30.221 1.736-41.364 1.907-45.561 0.065-1.596 1.378-2.857 2.976-2.857 1.315,0 2.491,0.821 2.943,2.056l14.822,40.409-13.834,65.324c-1.716,8.104 3.463,16.065 11.567,17.782 1.048,0.222 2.093,0.328 3.122,0.328 6.937,0 13.165-4.839 14.66-11.895l14.728-69.546c0.584-2.759 0.379-5.626-0.592-8.272l-14.082-38.396z" />{" "}
                  <circle cx="73.771" cy="25.907" r="25.907" />{" "}
                  <path d="m145.727,123.732l28.063-25.7c1.358-1.244 2.367-2.722 3.045-4.312 18.5-9.145 26.531-13.115 35.038-17.32 4.608,7.923 7.962,13.69 12.47,21.441 1.399,2.405 4.002,3.851 6.783,3.768 2.781-0.084 5.293-1.683 6.545-4.168l14.94-29.651c1.154-2.29 1.072-5.008-0.217-7.225l-23.112-39.741c-2.105-3.62-6.747-4.849-10.368-2.743l-24.05,13.987c-3.62,2.105-4.848,6.747-2.743,10.368 6.232,10.715 4.887,8.402 11.186,19.234l-32.343,15.988c-4.503-2.265-10.12-1.669-14.059,1.937l-11.893,10.892-6.845,3.384c-0.525-2.492-1.03-4.868-1.478-6.943-0.4-1.854-0.909-3.628-1.507-5.326-4.671-13.244-15.14-21.531-27.791-21.531h-67.24c-16.229,0-29.498,13.203-29.581,29.396l-.071,8.933c-0.207,25.864-0.167,20.278-0.156,21.293 0.046,4.14 2.118,7.845 5.278,10.076l19.164,13.533-12.237,6.049-16.65,8.23c-4.951,2.447-6.98,8.445-4.533,13.396 1.743,3.526 5.288,5.57 8.972,5.57 1.487,0 2.999-0.333 4.424-1.037l26.372-13.036 12.237-6.049 5.189,3.664c2.19,1.547 4.707,2.29 7.199,2.29 3.923,0 7.786-1.842 10.222-5.291 2.969-4.204 2.974-9.607 0.449-13.736l10.788-5.333 31.348-15.496c0.042,0.205 0.067,0.33 0.07,0.345 1.192,5.856 6.419,10.006 12.248,10.006 5.966,0.001 8.494-3.327 14.844-9.142zm-71.818,1.903l-12.237,6.049-26.29-18.565c0.105-13.051 0.141-17.608 0.188-23.489 0.007-1.368 1.119-2.472 2.487-2.468 1.367,0.004 2.473,1.113 2.473,2.48v12.421l22.228,15.697 43.982-21.74v-6.548c0-1.047 0.718-1.957 1.736-2.2 1.018-0.243 2.072,0.243 2.544,1.177 0.484,0.957 0.916,2.184 1.233,3.758 0.822,4.075 1.94,7.67 3.244,12.922l-41.588,20.506z" />{" "}
                </g>{" "}
              </g>
            </svg>
            Hughes Home Services
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-white p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {/* Nav link 1 */}
            <li className="mr-3">
              <Link
                className={`inline-block py-2 px-4 text-white hover:text-red-700 font-bold no-underline
                    ${activeLink === "home" ? "font-bold" : "*:"}`}
                to="/"
                onClick={() => setActiveLink("home")}
              >
                HOME
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block text-white no-underline hover:text-red-700 hover:text-underline py-2 px-4"
                to="/"
                onClick={() => setActiveLink("services")}
              >
                SERVICES
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block text-white no-underline hover:text-red-700 hover:text-underline py-2 px-4"
                to="/"
                onClick={() => setActiveLink("remodles")}
              >
                REMODLES
              </Link>
            </li>
          </ul>
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            CONTACT
          </button>
        </div>
      </div>
      <hr className="border-b border-red-300 opacity-25 my-0 py-0" />
    </nav>
  );
};

export default Navbar;
