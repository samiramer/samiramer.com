import React from 'react'

import Intro from '../components/Intro'
import Process from '../components/Process'
import About from '../components/About'
import Work from '../components/Work'
import Layout from '../components/Layout/layout'

const IndexPage = () => (
  <Layout>
    <div className="mt-8 mb-24">
      <Intro />
    </div>
    <div className="mb-8 p-8">
      <Process />
    </div>
    <div className="mb-8 p-8">
      <Work />
    </div>
    <div className="mb-8 p-8 max-w-lg mx-auto">
      <About />
    </div>
  </Layout>
)

export default IndexPage
