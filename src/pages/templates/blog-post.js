import React from "react";
import { graphql } from "gatsby";

export default function BlogPostTemplate({ data }) {
  const post = data.markdownRemark;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

// This query fetches the markdown data for the blog post based on the path
export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;
