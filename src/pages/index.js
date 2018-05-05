import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { css } from 'glamor';
import { COLORS } from 'theme';

const container = css({
  marginTop: '130px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});
const postWrapper = css({
  maxWidth: '1170px',
  display: 'flex',
  flexWrap: 'wrap',
  width: 'inherit',
  padding: '0 15px'
});
const postContainer = css({
  maxWidth: '33.33%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 15px',
  marginBottom: '30px'
});
const featuredImage = css({
  height: '360px',
  width: '100%',
  backgroundColor: 'rebeccapurple'
});
const contentWrapper = css({
  backgroundColor: '#EEEEED',
  padding: '20px 40px 40px 40px'
});
const dateStyles = css({
  fontSize: '12px',
  textTransform: 'uppercase',
  lineHeight: '33px',
  letterSpacing: '2px',
  fontFamily: 'Montserrat, sans-serif'
});
const headingStyles = css({
  fontFamily: 'Prata, serif',
  fontWeight: '400',
  fontSize: '26px',
  lineHeight: '48px',
  color: 'black',
});
const descriptionStyles = css({
  fontFamily: 'Prata, serif',
  fontWeight: '400',
  fontSize: '15px',
  color: 'rgb(102, 102, 102)',
  marginBottom: '1em',
  paddingTop: '10px',
  lineHeight: '28px'
});
const linkStyles = css({
  textDecoration: 'uppercase',
  fontFamily: 'Montserrat, sans-serif',
  lineHeight: '30px',
  letterSpacing: '2px',
  fontSize: '12px',
  color: COLORS.LANA_GREEN,
  marginTop: '20px',
  display: 'block',
  minHeight: '42px'
});

class Posts extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array
      })
    })
  };

  mapPostItem (item) {
    const { node: post } = item;
    const {
      id,
      fields: {
        slug
      },
      frontmatter: {
        title,
        date,
      },
      excerpt
    } = post;

    /*
      post = {
        id,
        fields: {
          slug
        },
        frontmatter: {
          title,
          date
        },
        excerpt,
      }
    */

    return (
      <div key={id} {...postContainer}>
        <div {...featuredImage} />
        <div {...contentWrapper}>
          <div {...dateStyles}>{date}</div>
          <div {...headingStyles}>{title}</div>
          <div {...descriptionStyles}>{excerpt}</div>
          <Link to={slug} {...linkStyles}>READ MORE</Link>
        </div>
      </div>
    );
  }

  render () {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div {...container}>
        <div {...postWrapper}>
          {/*<div className="content">*/}
          {/*<h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>*/}
          {/*</div>*/}
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post')
            .map(this.mapPostItem)}
        </div>
      </div>
    )
  }
}

export default Posts;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
