import React from 'react'

import Layout from '../components/Layout/layout'
import Taken from "../images/taken.svg"

const NotFoundPage = () => (
  <Layout>
    <div className="max-w-lg flex-grow mx-auto flex flex-col justify-center px-8 mt-8 mb-8">
      <img src={Taken} alt="Oh no!" className="block mx-auto w-1/2" />
      <h2 className="bg-yellow inline-block my-8 p-3">Looks like this page is a ghost that got abducted by aliens...</h2>
    </div>
  </Layout>
)

export default NotFoundPage
