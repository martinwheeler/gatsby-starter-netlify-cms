import CategoryLinks from 'containers/category-links';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import React, { PureComponent } from 'react';
import { css } from 'glamor';

import Header from 'containers/header';
import Footer from 'containers/footer';
import 'layouts/all.sass';

const padding = css({
  paddingTop: '80px'
});

@autobind
class TemplateWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
  };

  render () {
    const { children, data } = this.props;
    const { posts: { categories } } = data;

    return (
      <div>
        <Helmet title="Lana Edit" />
        <Header />
        <div {...padding} />
        <CategoryLinks categories={categories}/>
        <div>{children()}</div>
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper;

export const query = graphql`
  query AboutQuery {
    posts: allMarkdownRemark {
      categories: group(field: frontmatter___categories) {
        fieldValue
      }
    }
  }
`;
