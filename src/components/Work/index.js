import React from "react"
import Contact from "../Contact"
import Card from "./WorkCard"
import Cards from '../../data/works'

const Work = data => (
  <div className="flex flex-col w-full max-w-lg justify-center mx-auto">
    <h1 className="text-2xl md:text-4xl text-center text-grey-darkest mb-10">
      Our Work
    </h1>
    <div className="flex flex-row flex-wrap">
      <div className="w-full md:w-2/5 leading-loose mb-8">
        We usually take on one project at a time to ensure that your project is given full attention.  This helps us stay focused on you and your idea's realization.  Here's a sampling of projects we've worked on.
      </div>
      <div className="w-full md:w-3/5 sm:px-4">
        {Cards.map((card) => <Card key={card.key} card={card} compact={true}></Card>)}
      </div>
    </div>
    <Contact text="Convinced?  Let's talk!"></Contact>
  </div>
);

export default Work;
