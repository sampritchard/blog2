import React from "react";
import Link from "gatsby-link";
import { StickyContainer, Sticky } from 'react-sticky';

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>

      <ul style={{ listStyle: `none`, float: `right` }}>
      <h3>Sam Pritchard</h3>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/blog">Blog</ListLink>
        <ListLink to="/projects">Projects</ListLink>
      </ul>
    </header>
    {children()}
  </div>

 
