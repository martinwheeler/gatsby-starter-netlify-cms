import { css } from "glamor";
import React, { PureComponent } from 'react';

const hamburgerWrapper = css({
  position: 'absolute',
  right: '20px',
  minHeight: '20px',
  width: '30px',
  cursor: 'pointer',

  '&:hover': {
    opacity: 0.75
  }
});

const hamburgerLine = css({
  position: 'absolute',
  height: '20%',
  width: 'inherit',
  backgroundColor: 'rgb(66,66,66)',
  borderRadius: '0.94px',

  '&:nth-child(1n)': {
    top: '0%'
  },

  '&:nth-child(2n)': {
    top: '40%'
  },

  '&:nth-child(3n)': {
    top: '80%'
  },
});

class Hamburger extends PureComponent {
  render () {
    const { ...props } = this.props;
    return (
      <span {...hamburgerWrapper} {...props}>
        <span {...hamburgerLine} />
        <span {...hamburgerLine} />
        <span {...hamburgerLine} />
      </span>
    );
  }
}

export default Hamburger;
