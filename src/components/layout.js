import * as React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

const Layout = ({ children }) => {
  return (
    <LoadingSpinner>
      <div className="bg-navy min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Contact />
        </main>
        <Footer />
        {children}
      </div>
    </LoadingSpinner>
  );
};

export default Layout;
