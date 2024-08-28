import * as React from "react";
import Navbar from "./Navbar";
import Services from "./Services";
import ServicesHero from "./ServicesHero";
import Footer from "./Footer";

const ServicesLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <Services />
      </main>
      <Footer />
    </>
  );
};


export default ServicesLayout