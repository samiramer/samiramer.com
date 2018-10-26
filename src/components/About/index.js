import React from "react";
import Contact from "../Contact";
import Me from "../../images/me_small.png";

const AboutPage = () => (
  <div>
    <h1 className="text-2xl md:text-4xl text-center text-grey-darkest mb-10">
      Who is CodeLoop?
    </h1>
    <div className="mx-auto flex flex-col justify-between items-center leading-normal">
      <img className="w-32 mb-6" alt="Hi!" src={Me} />
      <p>
        Hi! My name is Samir Amer and I have been building software applications for almost 20 years.
        <br /><br />
        The very first application I ever built was a Pac-Man game for my Computers class when I was 16 years old.  I enjoyed it so much that it became clear to me building software will be a passion of mine for life.  So I got myself a Computer Engineering degree and haven't looked back since.
      </p>
      <p className="w-4/5 border-l-4 border-grey-darkest pl-4 italic mt-12 mb-12">
        Software development is not just a job for me, it is a passion!
      </p>
      <p>
        Over the years I have worked on projects of all different sizes and scope such as a very large campground management system serving thousands of customers a day, an automated IoT based bicycle fleet management system, a carpool parking management tool for workplaces, and several other challenging projects.
        <br /><br />
        I have had the pleasure of building software with many languages such as PHP, Javascript, C#.NET, Python, C, Java and many more - picking up invaluable knowledge along the way.
      </p>
      <p className="w-4/5 border-r-4 border-grey-darkest pr-4 italic mt-12 mb-12">
        Being able to "create" something with the power of my fingerprints is an addictive feeling. It never gets old!
      </p>
      <p>
        For the past few years, I have been implementing custom web based applications for clients who have the idea but need help with executing their vision on the web.
        <br /><br />
        Although I am a firm believer in letting the project decide the tools for you, my go to choices nowadays is a fantastic PHP framework called Laravel for backend and APIs along with Vue.JS for frontend and SPA (single page application) development.
      </p>
    </div>
    <Contact text="Excited?  Let's talk!"></Contact>
  </div>
);

export default AboutPage;
