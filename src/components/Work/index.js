import React from "react";
import Contact from "../Contact";
import Card from "./WorkCard";
import Activeswitch from '../../images/our_work/activeswitch-logo.png';
import Smobi from '../../images/our_work/smobi-logo.gif';
import Cycleloan from '../../images/our_work/cycleloan-logo.png';
import Commuteontario from '../../images/our_work/commute-ontario-logo.gif';
import Trakit from '../../images/our_work/trakit-logo.svg';

const cards = [
  {
    key: 'activeswitch',
    image: Activeswitch,
    title: "ActiveSwitch",
    subtitle: "Health and Wellness Program"
  },
  {
    key: 'smobi',
    image: Smobi,
    title: "SMOBi",
    subtitle: "The SustainMobility Information Portal"
  },
  {
    key: 'cycleloan',
    image: Cycleloan,
    title: "CycleLoan",
    subtitle: "SustainMobility Bike Fleet Program"
  },
  {
    key: 'commuteontario',
    image: Commuteontario,
    title: "Commute Ontario",
    subtitle: "Sustainable Commuting Program"
  },
  {
    key: 'trakit',
    image: Trakit,
    title: "TRAKiT",
    subtitle: "Activity Tracking Program"
  }
];

const Work = data => (
  <div className="flex flex-col w-full max-w-lg justify-center mx-auto">
    <div className="text-3xl md:text-4xl text-center text-grey-darkest mb-10">
      Our Work
    </div>
    <div className="flex flex-row flex-wrap">
      <div className="w-full md:w-2/5 leading-loose mb-8">
        We usually take on one project at a time to ensure that your project is given full attention.  This helps us stay focused on you and your idea's realization.  Here's a sampling of projects we've worked on.
      </div>
      <div className="w-full md:w-3/5 sm:px-4">
        {cards.map((card) => <Card key={card.key} card={card}></Card>)}
      </div>
    </div>
    <Contact text="Convinced?  Let's talk!"></Contact>
  </div>
);

export default Work;
