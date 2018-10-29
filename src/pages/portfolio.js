import React from 'react'

import Card from '../components/Work/WorkCard'
import Contact from '../components/Contact'

import Layout from '../components/Layout/layout'
import Cards from '../data/works'

const PortfolioPage = () => (
  <Layout>
    <div className="max-w-full px-8 mb-8">
      <h1 className="text-2xl md:text-4xl text-center text-grey-darkest mb-10">
        The CodeLoop Portfolio
      </h1>
      <div className="flex flex-row flex-wrap items-stretch">
          {Cards.map((card) => {
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
