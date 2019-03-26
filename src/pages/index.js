import React, {Component} from 'react';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import runCanvas from '../utils/canvas';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://twitter.com/hamzaerbay" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://dribbble.com/hamzaerbay" target="_blank">
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://www.linkedin.com/in/hamzaerbay/" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://github.com/hamzaerbay/" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </OutboundLink>
        </li>
        <li>
          <OutboundLink href="https://medium.com/@hamzaerbay" target="_blank">
            <i className="fa fa-medium" aria-hidden="true"></i>
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
