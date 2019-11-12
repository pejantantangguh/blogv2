import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from 'gatsby-image';
import SEO from "../components/seo"


// graphQL query
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticles {
      edges {
        node {
          id
          title
          content
          thumbnail {
            childImageSharp {
               fixed(width: 200, height: 200){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Balala"
      description="Testing 123 meta description overwrite from config"
    />
    <h1> Welcome to my Blog </h1>

    <ul>
      {data.allStrapiArticles.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <Img fixed={document.node.thumbnail.childImageSharp.fixed} />
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to Page 2</Link>
  </Layout>
)

export default IndexPage

