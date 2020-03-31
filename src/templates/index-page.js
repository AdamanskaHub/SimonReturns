import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

// import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

import "../../sass/main.scss"
import img from "../img/simon.png"

export const IndexPageTemplate = ({
  // image,
  title,
  MegaTitle,
  MegaTitleX,
  SubTitle,
  TitleOne,
  ParaOne,
  TitleTwo,
  ParaTwo,
  TitleThree,
  ParaThree,
}) => (
  <div className="container">

      <div className="menu">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/blog/">Blog</Link>
        </h3>
      </div>

      <section className="intro">
        <div className="blob"></div>
        <h1>
          {MegaTitle}
        </h1>
        <h1>
          {MegaTitleX}
        </h1>
        <p>{SubTitle}</p>
      </section>

      <section className="section sectiontwo">
        <div className="portrait">
          {/* <img src={data.image} alt="Simon" /> */}
          {/* <img src="../static/img/simon.jpg" alt="Simon" /> */}
          <img src={img} alt="Simon" />
        </div>
        <div>
          <h2><span className="fancy">{TitleOne}</span></h2>
          <p>{ParaOne}</p>
          <h2><span className="fancy">{TitleTwo}</span></h2>
          <p>{ParaTwo}</p>
        </div>
      </section>

      <section className="section sectionthree">
        <h2><span className="fancy">{TitleThree}</span></h2>
        <p>{ParaThree}</p>
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
        <div className="bubble bubble6"></div>
        <div className="bubble bubble7"></div>
        <div className="bubble bubble8"></div>
      </section>s
  
    <section className="section sectionfour">
        <h2><span className="fancy">Contact</span></h2>
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name:</label> <input type="text" name="name" />
          </p>
          <p>
            <label>Your Email:</label> <input type="email" name="email" />
          </p>
          <p>
            <label>Message:</label> <textarea name="message"></textarea>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </section>
    </div>
)

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  MegaTitle: PropTypes.string,
  MegaTitleX: PropTypes.string,
  SubTitle: PropTypes.string,
  TitleOne: PropTypes.string,
  ParaOne: PropTypes.string,
  TitleTwo: PropTypes.string,
  ParaTwo: PropTypes.string,
  TitleThree: PropTypes.string,
  ParaThree: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div>
      <IndexPageTemplate
        // image={frontmatter.image}
        title={frontmatter.title}
        MegaTitle={frontmatter.MegaTitle}
        MegaTitleX={frontmatter.MegaTitleX}
        SubTitle={frontmatter.SubTitle}
        TitleOne={frontmatter.TitleOne}
        ParaOne={frontmatter.ParaOne}
        TitleTwo={frontmatter.TitleTwo}
        ParaTwo={frontmatter.ParaTwo}
        TitleThree={frontmatter.TitleThree}
        ParaThree={frontmatter.ParaThree}
        // intro={frontmatter.intro}
      />
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        MegaTitle
        MegaTitleX
        SubTitle
        TitleOne
        ParaOne
        TitleTwo
        ParaTwo
        TitleThree
        ParaThree
        
      }
    }
  }
`


{/* <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </div>
  
  // image {
        //   childImageSharp {
        //     fluid(maxWidth: 2048, quality: 100) {
        //       ...GatsbyImageSharpFluid
        //     }
        //   }
        // }
  */


}