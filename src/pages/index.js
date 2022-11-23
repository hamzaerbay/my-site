import React, { Component } from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import runCanvas from '../utils/canvas'
import { OutboundLink } from 'gatsby-plugin-gtag'
import TwitterIcon from '../assets/twitter.svg'
import DribbbleIcon from '../assets/dribbble.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import MediumIcon from '../assets/medium.svg'
import GithubIcon from '../assets/github.svg'

class IndexPage extends Component {
  componentDidMount() {
    runCanvas()
  }

  render() {
    return (
      <Layout>
        <SEO
          title='Hamza Erbay'
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
        <div className='avatar'>
          <Image alt='hamza erbay' />
        </div>
        <h1>Hamza Erbay</h1>
        <p>SOFTWARE ENGINEER</p>
        <ul className='contacts'>
          <li>
            <OutboundLink href='https://twitter.com/hamzaerbay'>
              <TwitterIcon className='twitter icon' />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href='https://dribbble.com/hamzaerbay'>
              <DribbbleIcon className='dribbble icon' />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href='https://www.linkedin.com/in/hamzaerbay/'>
              <LinkedinIcon className='linkedin icon' />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href='https://github.com/hamzaerbay/'>
              <GithubIcon className='github icon'/>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href='https://medium.com/@hamzaerbay'>
              <MediumIcon className='medium icon' />
            </OutboundLink>
          </li>
        </ul>
        <div className='box box--one' />
        <div className='box box--two' />
        <div className='box box--three' />
        <div className='box box--four' />
        <canvas />
      </Layout>
    )
  }
}

export default IndexPage
