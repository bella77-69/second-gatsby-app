import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../component/layout"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
              }
              timeToRead
              excerpt
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
    <ul>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <li key={edge.node.id}>
            <h2>
              <Link to={`/blog/${edge.node.fields.slug}/`}>
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <div>
              <span>
                Posted on {edge.node.frontmatter.date} <span> / </span>{" "}
                {edge.node.timeToRead} min read
              </span>
            </div>
            <p>{edge.node.excerpt}</p>
            <div>
              <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
            </div>
          </li>
        )
      })}
    </ul>
  </Layout>
  )
}

export default Blog