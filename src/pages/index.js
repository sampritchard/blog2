import React from 'react';
import Link from 'gatsby-link';
import { SocialIcon } from 'react-social-icons';

const IndexPage = () => (
  <div>
    <img style={{width: 125, height: 125}}
    src="https://avatars0.githubusercontent.com/u/19427016?s=400&v=4" alt="Sam Pritchard"/>
    <SocialIcon url="https://www.instagram.com/howhardpritchard" color="black" style={{width: 25, height: 25}} />
    <SocialIcon url="http://github.com/sampritchard" color="black" style={{width: 25, height: 25, }} />
    <h2>About</h2>

    <p>I live in London.</p>
    <p>Now go build something great.</p>
  </div>
)

export default IndexPage
