import React from 'react'

import BlogRoll from '../../components/BlogRoll'
import { Link, } from 'gatsby'

import "../../../sass/main.scss"

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div className="container">
      <div>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        > */}
        <div className="menu menu-blog">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <h3>
            <Link to="/blog/">Blog</Link>
          </h3>
        </div>
        
      </div>
      
      {/* <section className="section">
        <div className="container">
          <div className="content"> */}
          <section className="section sectionthree">
          <h1 className="blog-title"
          // className="has-text-weight-bold is-size-1"
          // style={{
          //   boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          //   backgroundColor: '#f40',
          //   color: 'white',
          //   padding: '1rem',
          // }}
          >
            BlogTitle
          </h1>
            <BlogRoll />
            </section>
          {/* </div>
        </div>
      </section> */}
      </div >
    )
  }
}
