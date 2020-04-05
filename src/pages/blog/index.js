import React from 'react'

import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <div>
      <div>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        > */}
        <div className="menu">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <h3>
            <Link to="/blog/">Blog</Link>
          </h3>
        </div>
        <h1
        // className="has-text-weight-bold is-size-1"
        // style={{
        //   boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
        //   backgroundColor: '#f40',
        //   color: 'white',
        //   padding: '1rem',
        // }}
        >
          Latest stories OOOOO
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
      </div >
    )
  }
}
