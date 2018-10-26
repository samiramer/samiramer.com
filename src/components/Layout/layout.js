import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="text-grey-darkest aliased bg-grey-lightest">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.title },
            { name: 'keywords', content: data.site.siteMetadata.title },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="flex flex-col min-h-screen">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            className="flex flex-col flex-1 mx-auto mt-10 w-full"
          >
            {children}
          </div>
          <Footer />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
