import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import "../../sass/main.scss"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // const { markdownRemark: post } = dataX

    return (
      <div className="">
        {posts && posts.map(({ node: post }) => (
            <div className="" key={post.id}>
              <article 
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <h1>{post.frontmatter.title}</h1>
                <p>
                {post.frontmatter.description}
                </p>
  {/*//               <header>
  //                 {post.frontmatter.featuredimage ? (
  //                   <div className="featured-thumbnail">
  //                     <PreviewCompatibleImage
  //                       imageInfo={{
  //                         image: post.frontmatter.featuredimage,
  //                         alt: `featured image thumbnail for post ${post.frontmatter.title}`,
  //                       }}
  //                     />
  //                   </div>
  //                 ) : null}
  //                 <p className="post-meta">
  //                   <Link
  //                     className="title has-text-primary is-size-4"
  //                     to={post.fields.slug}
  //                   >
  //                     {post.frontmatter.title}
  //                   </Link>
  //                   <span> &bull; </span>
  //                   <span className="subtitle is-size-5 is-block">
  //                     {post.frontmatter.date}
  //                   </span>
  //                 </p>
  //               </header>
  //               <p>
  //                 {post.excerpt}
  //                 <br />
  //                 <br />
  //                 <Link className="button" to={post.fields.slug}>
  //                   Keep Reading →
  //                 </Link>
  //               </p>
  */}
            //</article>
          </div>
        ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 960, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)

// query BlogPostByID($id: String!) {
//   markdownRemark(id: { eq: $id }) {
//     id
//     html
//     frontmatter {
//       date(formatString: "MMMM DD, YYYY")
//       title
//       description
//       tags
//     }
//   }
// }