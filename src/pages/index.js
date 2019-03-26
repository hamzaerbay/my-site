import React, {Component} from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import runCanvas from '../utils/canvas';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import twitterIcon from '../assets/twitter.svg';
import facebookIcon from '../assets/facebook.svg';
import dribbbleIcon from '../assets/dribbble.svg';
import linkedinIcon from '../assets/linkedin.svg';
import mediumIcon from '../assets/medium.svg';
import githubIcon from '../assets/github.svg';

class IndexPage extends Component {
  componentDidMount(){
    runCanvas();
  }
  render(){
  return (
  <Layout>
    <SEO title="Hamza Erbay" keywords={['front-end developer', 'design system', 'react developer', 'ux designer', 'css', 'javascript']} />
    <div className="avatar">
      <Image alt="hamza erbay"/>
    </div>
    <h1>Hamza Erbay</h1>
    <p>FRONT END DEVELOPER</p>
    <ul className="contacts">
        <li>
          <OutboundLink href="https://www.facebook.com/HamzaErbay" target="_blank">
            <svg className="facebook icon">
              <use xlinkHref={`#${facebookIcon.id}`} />
            </svg>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://twitter.com/hamzaerbay" target="_blank">
            <svg className="twitter icon">
              <use xlinkHref={`#${twitterIcon.id}`} />
            </svg>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://dribbble.com/hamzaerbay" target="_blank">
            <svg className="dribbble icon">
              <use xlinkHref={`#${dribbbleIcon.id}`} />
            </svg>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.linkedin.com/in/hamzaerbay/" target="_blank">
            <svg className="linkedin icon">
              <use xlinkHref={`#${linkedinIcon.id}`} />
            </svg>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://github.com/hamzaerbay/" target="_blank">
            <svg className="github icon">
              <use xlinkHref={`#${githubIcon.id}`} />
            </svg>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://medium.com/@hamzaerbay" target="_blank">
            <svg className="medium icon">
              <use xlinkHref={`#${mediumIcon.id}`} />
            </svg>
          </OutboundLink>
        </li>
    </ul>
    <div className="box box--one"></div>
    <div className="box box--two"></div>
    <div className="box box--three"></div>
    <div className="box box--four"></div>
    <canvas></canvas>
  </Layout>);
}}

export default IndexPage;
