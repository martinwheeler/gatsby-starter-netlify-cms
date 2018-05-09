import { css } from 'glamor';
import React, { PureComponent } from 'react';
import Link from 'gatsby-link';
import { kebabCase, capitalize } from 'lodash';

const categoryWrapper = css({
  display: 'flex',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '10px 0'
});

const category = css({
  flex: '1 1 50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '58px'
});

const link = css({
  color: 'currentColor',
  cursor: 'pointer',
  userSelect: 'none',
  opacity: '1',

  '&:hover': {
    opacity: '0.7',
    color: 'currentColor',
    textDecoration: 'inherit'
  }
});

class CategoryLinks extends PureComponent {
  static renderCategory (category) {
    return (
      <div key={category.fieldValue} {...css(category, link)}>
        <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
          {capitalize(category.fieldValue)}
        </Link>
      </div>
    );
  }

  render () {
    const { categories } = this.props;
    return (
      <div {...categoryWrapper}>
        {categories.map(CategoryLinks.renderCategory)}
      </div>
    )
  }

}

export default CategoryLinks;
