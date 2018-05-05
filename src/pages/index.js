import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react'

class IndexPage extends PureComponent {
  static propTypes = {};

  render () {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Welcome to Lana Edit</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default IndexPage;
