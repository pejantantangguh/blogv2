import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';

export const query = graphql`
    query ArticleTemplate($id: String!) {
        strapiArticles(id: {eq:$id}) {
            title
            content
            thumbnail {
                childImageSharp {
                    fixed(width:200, height: 200) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`

const ArticleTemplate = ({ data }) => (
    <Layout>
        <h1>{data.strapiArticles.title}</h1>
        {/* <p>by <Link to={`/authors/User_${data.strapiArticles.author.id}`} /> {data.strapiArticles.author.username}</p> */}
        <Img fixed={data.strapiArticles.thumbnail.childImageSharp.fixed} />
        <p>{data.strapiArticles.content}</p>
    </Layout>
)

export default ArticleTemplate;