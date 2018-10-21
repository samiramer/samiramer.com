import React from "react";
import IntroImage from "../../images/intro.svg";
import Contact from "../Contact";

const Intro = () => {

  return (
    <div className="text-center px-4 sm:px-1">
      <img className="w-4/5 lg:w-2/5 mb-4 md:mb-12 lg:mb-8 xl:mb-10 fill-current" alt="Welcome to CodeLoop!" src={IntroImage} />
      <p className="text-2xl md:text-4xl sm:px-4 mb-8 lg:mb-10 xl:mb-12 leading-loose text-grey-darkest">
        Turning your great ideas into inspired software.<br />
        So let's build something together!
      </p>
      <p className="text-base md:text-lg leading-loose w-full sm:w-4/5 md:w-2/3 lg:w-1/2 mx-auto">
        Specializing in all aspects related to building a product for the web.<br />Helping you harness your idea into a concrete product that you can proudly launch and share with the world!
      </p>
      <Contact text="Inspired?  Let's talk!"></Contact>
    </div>
  )

};

export default Intro;
