import React from "react"
import { graphql } from "gatsby"

import Layout from "../component/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
      timeToRead
      html
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
    <div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <span>
        Posted on {props.data.markdownRemark.frontmatter.date}{" "}
        <span> / </span> {props.data.markdownRemark.timeToRead} min read
      </span>
      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      >
</div>
    </div>
  </Layout>
  )
}

export default BlogPost