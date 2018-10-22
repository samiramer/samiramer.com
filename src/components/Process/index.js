import React from "react";
import Contact from "../Contact";
import Card from "./ProcessCard";
import Idea from "../../images/idea.svg";
import Code from "../../images/code.svg";
import Launch from "../../images/launch.svg";

const cards = [
  {
    key: 'idea',
    image: Idea,
    title: "Whta is your idea?",
    body: "So what's your idea about?  What is the mission statement?  What do you want to achieve with it?  What type of user do you envision using your idea?<br/><br/>This is a crucial step because it helps lay the foundation for everything moving forward.  We need to ask everything we need to know about your idea.<br/><br/>What is a must have?  What is a nice to have?  What can we do without? And so on...<br/><br/>Sadly some questions will be very boring.  But at least we'll be very thorough!"
  },
  {
    key: 'code',
    image: Code,
    title: "Let's Build It",
    body: "Once all of your core requirements are established, we agree on an overall technical solution and begin putting it all together - this is the fun part! <br/><br/>An iterative approach is preferred where the solution is divided into smaller tasks.<br/><br/>Each functional feature is then implemented, tested and deployed one by one until we reach our final goal.<br/><br/>Following a collaborative approach will allow for more transparent communication and provide opportunities to identify, improve or enhance any gaps that could surface."
  },
  {
    key: 'launch',
    image: Launch,
    title: "We launch!",
    body: "The exciting part of the process. When we share what we've been working on with the world!<br/><br/>It doesn't end here though. We still need to monitor the solution and ensure that everything works as it should and fine tune the little things we may have missed. <br/><br/>What if you want to enhance a feature?  Or better yet, what if your product takes off and you need help keeping up with everything?<br/><br/>I always agree to stay on board for a while to make sure I am available to you after this step. This way we can have a smooth transition from implementation to launch."
  }
];

const Process = () => (

  <div className="w-full mx-auto">
    <div className="text-3xl md:text-4xl text-center text-grey-darkest mb-10">
      Trust The Process
    </div>
    <div className="mx-auto leading-normal text-sm flex flex-col md:flex-row">
      {cards.map((card) => <Card key={card.key} card={card}></Card>)}
    </div>
    <Contact text="Convinced?  Let's talk!"></Contact>
  </div>
);

export default Process;
