import Link from 'gatsby-link'
import { kebabCase } from 'lodash'
import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'

class AllTags extends PureComponent {
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
        <Helmet title={`Tags | ${title}`}/>
        <div className="container content">
          <div className="columns">
            <div
              className="column is-10 is-offset-1"
              style={{ marginBottom: '6rem' }}
            >
              <h1 className="title is-size-2 is-bold-light">Tags</h1>
              <ul className="taglist">
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
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

export default AllTags;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
