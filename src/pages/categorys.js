import Link from 'gatsby-link'
import { css } from 'glamor';
import { kebabCase } from 'lodash'
import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { COLORS } from 'theme';

const link = css({
  color: COLORS.PINK,
  cursor: 'pointer',
  userSelect: 'none',
  opacity: '1',

  '&:hover': {
    opacity: '0.7',
    color: 'currentColor',
    textDecoration: 'inherit'
  }
});

class AllCategories extends PureComponent {
  render () {
    const {
      data: {
        allMarkdownRemark: { group },
        site: {
          siteMetadata: { title }
        }
      }
    } = this.props;
    return (
      <section className="section">
        <Helmet title={`Categories | ${title}`}/>
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">Categories</h1>
              <ul className="taglist">
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link {...link} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AllCategories;

export const categoryPageQuery = graphql`
  query CategoriesQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`
