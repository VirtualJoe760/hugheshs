import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { formSubmitTy } from "../images";


const ContactPostSubmit = () => {
  return (
    <section id="contact">
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-10 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Contact Us
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Need help with a home repair or improvement project? Contact us
                today to schedule a service call or get a free quote from our
                experienced handyman team. We're here to assist with everything
                from minor fixes to full remodels—just let us know how we can
                help!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:+1 (760) 797-5434"
                      className="hover:text-gray-900"
                    >
                      +1 (760) 797-5434
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:hughes.underdahl@hugheshomeservices.us"
                      className="hover:text-gray-900"
                    >
                      hughes.underdahl@hugheshomeservices.us
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mx-auto max-w-lx lg:mx-0 lg:max-w-lg md:pt-44 sm:pt-20 sm:px-10">    
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">Thank you, we will get back to you as soon as possible.</h2>
            <img 
          className="justify-center"
          src={formSubmitTy}
          alt="form submitted"
          placeholder="blurred"
          />   
          </div>        
             
        </div>
      </div>
    </section>
  );
};

export default ContactPostSubmit;
