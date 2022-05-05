import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// import SEO from '../components/seo';
// import Layout from '../components/layout';

/* eslint-disable */
const blogContent = html => (
  <div
    className="blog-post-content"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);
/* eslint-enable */

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        {blogContent(html)}
      </div>
    </div>
  );
}

export const BlogTemplate = () => {
  const { site } = useStaticQuery(
    graphql`
    query($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          path
          title
          description
        }
      }
    }
    `,
  );
  return site.markdownRemark;
};
