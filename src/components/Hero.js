import React from "react";
import { heroImg, heroBg} from "../images";
import LinkButton from "./LinkButton";

const Hero = () => {
  return (
    <>
      <div
        className="pt-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-left">
            <h1 className="my-4 ml-4 text-5xl font-bold leading-tight text-white">
              Helpful Handymen
            </h1>
            <p className="leading-normal ml-4 text-2xl mb-8 text-white">
              Our team of professionals stand by waiting to assist.
            </p>
            <LinkButton
              to="/#contact"
              className="bg-blue-900 sm:ml-0 text-white mb-5 hover:text-red-700"
            >
              Contact us
            </LinkButton>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 pt-6 text-center">
            <img
              className="w-full md:w-4/5 z-50 sm:w-2/5 mx-auto"
              src={heroImg}
              alt="hero img"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
