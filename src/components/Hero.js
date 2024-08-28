import React from 'react'
import heroImage from "../images/hero.png";
import LinkButton from './LinkButton';

const Hero = () => {
  return (
    <>
    <div className="pt-24 bg-red-200">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight text-blue-900">
              Helpful Handymen
            </h1>
            <p className="leading-normal text-2xl mb-8 text-blue-900">
              Our team of professionals stand by waiting to assist.
            </p>
            <LinkButton
            to="/contact"
            external
            className='bg-blue-900 text-white hover:text-red-700'
            >
                Contact us
            </LinkButton>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-full md:w-3/5 pt-6 text-center">
            <img
              className="w-full md:w-4/5 z-50 sm:w-2/5 mx-auto"
              src={heroImage}
              alt="hero img"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero