import React from 'react'

// import ContactUs from '../components/ContactUs'
import Layout from '../components/Layout/layout'

const ProcessPage = () => (
  <Layout>
    <div className="max-w-lg mx-auto px-8 flex flex-col my-auto text-center text-grey-darkest leading-loose">
      <h1 className="text-2xl md:text-4xl text-center text-grey-darkest">
        The contact form is coming soon!
      </h1>
      <h2 className="mt-8">
        But I am always available via email at
        <br />
        <a className="text-red" href="mailto:samir@codeloop.co">
          &lt;samir@codeloop.co&gt;
        </a>
        <br />
        Let's build something!
      </h2>
      {/* <ContactUs /> */}
    </div>
  </Layout>
)

export default ProcessPage
