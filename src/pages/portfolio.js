import React from 'react'

import Card from '../components/Work/WorkCard';
import Contact from '../components/Contact';

import Layout from '../components/Layout/layout'
import Activeswitch from '../images/our_work/activeswitch-logo.png';
import Smobi from '../images/our_work/smobi-logo.gif';
import Cycleloan from '../images/our_work/cycleloan-logo.png';
import Commuteontario from '../images/our_work/commute-ontario-logo.gif';
import Trakit from '../images/our_work/trakit-logo.svg';

const cards = [
  {
    key: 'activeswitch',
    image: Activeswitch,
    title: "ActiveSwitch",
    subtitle: "Health and Wellness Program",
    description: "Active Switch, formerly known as the Activate Your Commute Program, is an engaging health and wellness program that focuses on motivating users to get from 'Point A to B' using active and healthy travel options.<br/><br/>The Active Switch interactive online tool keeps participants engaged allowing them to set personal goals and visually track their progress, the calories they have burned, and the greenhouse gas emissions they have saved.",
    url: 'https://activeswitch.ca',
    techStack: ['Laravel', 'jQuery']
  },
  {
    key: 'smobi',
    image: Smobi,
    title: "SMOBi",
    subtitle: "The SustainMobility Information Portal",
    description: "SMOBi is a “one-stop shop” portal with a toolbox of ready to use programs, marketing campaigns and a wide range of resources that encourage, support and reward active, healthy and sustainable travel options. The programs are designed to encourage healthy and active lifestyles, to reduce travel by single occupant vehicles and to improve our communities by reducing congestion and greenhouse gas emissions.",
    url: 'https://smobi.ca',
    techStack: ['Laravel', 'Vue.JS']
  },
  {
    key: 'cycleloan',
    image: Cycleloan,
    title: "CycleLoan",
    subtitle: "SustainMobility Bike Fleet Program",
    description: "The CycleLoan Bike Fleet Program is a perfect solution for a variety of organizations looking for practical, affordable and healthy transportation options. Whether your organization is looking to promote health and environmental initiatives, build brand awareness, or add some fun, the CycleLoan Program can help.",
    url: 'https://cycleloan.ca',
    techStack: ['Laravel', 'Vue.JS', 'Electron']
  },
  {
    key: 'trakit',
    image: Trakit,
    title: "TRAKiT",
    subtitle: "Activity Tracking Program",
    description: "Active Switch, formerly known as the Activate Your Commute Program, is an engaging health and wellness program that focuses on motivating users to get from 'Point A to B' using active and healthy travel options.<br/><br/>The Active Switch interactive online tool keeps participants engaged allowing them to set personal goals and visually track their progress, the calories they have burned, and the greenhouse gas emissions they have saved.",
    url: 'https://activeswitch.ca',
    techStack: ['Laravel', 'iOS', 'Android']
  },
  {
    key: 'commuteontario',
    image: Commuteontario,
    title: "Commute Ontario",
    subtitle: "Sustainable Commuting Program",
    description: `
    The Commute Ontario program provides a comprehensive Transportation Demand Management program, similar to the Smart Commute program to employers across Ontario, Canada. 
    <br/><br/>
    As part of the 1st phase of the program, a carpool parking permit program was implemented for employers to manage their respective carpools. 
    <br/><br/>    
    Upcoming phases of the program will include:
    <br/><br/>
    <ul>    
     <li>Pathway Intelligence provided ridematching service</li>
     <li>ActiveSwitch walking and cycling program</li>
     <li>Emergency Ride Home Program</li>
     <li>Information portal for municipalities to post TDM related resources</li>
     <li>Full calendar of marketing campaigns, incentive and rewards</li>
     <li>Tracking tools to measure return on investment</li>
    </ul>
    `,
    url: 'https://activeswitch.ca',
    techStack: ['GatsbyJS']
  }
];

const PortfolioPage = () => (
  <Layout>
    <div className="max-w-full px-8 mb-8">
      <h1 className="text-2xl md:text-4xl text-center text-grey-darkest mb-10">
        The CodeLoop Portfolio
      </h1>
      <div className="flex flex-row flex-wrap items-stretch">
          {cards.map((card) => {
            return (
              <div className="w-full lg:w-1/2 flex sm:px-4">
                <Card key={card.key} card={card}></Card>
              </div>
            )
          })}
      </div>
      <Contact text="Convinced?  Let's talk!"></Contact>
    </div>
  </Layout>
)

export default PortfolioPage
