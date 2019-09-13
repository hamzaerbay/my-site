import React, { Component } from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import runCanvas from '../utils/canvas'
import { OutboundLink } from 'gatsby-plugin-gtag'
import twitterIcon from '../assets/twitter.svg'
import facebookIcon from '../assets/facebook.svg'
import dribbbleIcon from '../assets/dribbble.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mediumIcon from '../assets/medium.svg'
import githubIcon from '../assets/github.svg'

class IndexPage extends Component {
  componentDidMount() {
    runCanvas()
  }
  render() {
    return (
      <Layout>
        <SEO
          title="Hamza Erbay"
          keywords={[
            'software engineer',
            'front-end developer',
            'design system',
            'react developer',
            'ux designer',
            'css',
            'javascript',
          ]}
        />
        <div className="avatar">
          <Image alt="hamza erbay" />
        </div>
        <h1>Hamza Erbay</h1>
        <p>SOFTWARE ENGINEER</p>
        <ul className="contacts">
          <li>
            <OutboundLink href="https://www.facebook.com/HamzaErbay">
              <svg className="facebook icon">
                <use xlinkHref={`#${facebookIcon.id}`} />
              </svg>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://twitter.com/hamzaerbay">
              <svg className="twitter icon">
                <use xlinkHref={`#${twitterIcon.id}`} />
              </svg>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://dribbble.com/hamzaerbay">
              <svg className="dribbble icon">
                <use xlinkHref={`#${dribbbleIcon.id}`} />
              </svg>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://www.linkedin.com/in/hamzaerbay/">
              <svg className="linkedin icon">
                <use xlinkHref={`#${linkedinIcon.id}`} />
              </svg>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://github.com/hamzaerbay/">
              <svg className="github icon">
                <use xlinkHref={`#${githubIcon.id}`} />
              </svg>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href="https://medium.com/@hamzaerbay">
              <svg className="medium icon">
                <use xlinkHref={`#${mediumIcon.id}`} />
              </svg>
            </OutboundLink>
          </li>
        </ul>
        <div className="box box--one" />
        <div className="box box--two" />
        <div className="box box--three" />
        <div className="box box--four" />
        <canvas />
      </Layout>
    )
  }
}

export default IndexPage
