import { css } from 'glamor';
import React, { PureComponent } from 'react';

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

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div {...categoryWrapper}>
        <div {...css(category, link)}>
          Parenting
        </div>
        <div {...css(category, link)}>
          Fashion
        </div>
        <div {...css(category, link)}>
          Food
        </div>
        <div {...css(category, link)}>
          Travel
        </div>
        <div {...css(category, link)}>
          Beauty
        </div>
      </div>
    )
  }

}

export default CategoryLinks;
