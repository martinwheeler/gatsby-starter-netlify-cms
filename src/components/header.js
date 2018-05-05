import { autobind } from 'core-decorators';
import { css } from 'glamor';
import React, { Component } from 'react';
import { COLORS, ZINDEX } from 'theme';

import { createKey } from 'utils/react';

const container = css({
  display: 'flex',
  width: '100%',
  position: 'fixed',
  top: 0,
  background: 'white',
  zIndex: ZINDEX.HEADER,
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: COLORS.LANA_GREEN,
  boxSizing: 'border-box',
  height: '80px'
});
const wrapper = css({
  display: 'flex',
  width: 'inherit',
  alignItems: 'center',
  justifyContent: 'space-around'
});
const logo = css({
  height: '45px'
});
const menuItemsWrapper = css({
  display: 'flex',
  alignItems: 'center'
});
const label = css({
  fontSize: '14px',
  padding: '8px 16px',
  cursor: 'pointer',
  textTransform: 'uppercase'
});
const link = css({
  color: 'currentColor',

  '&:hover': {
    color: COLORS.LANA_GREEN
  }
});

@autobind
class Header extends Component {
  constructor (props) {
    super(props);

    this.MENU_ITEMS = [
      {
        name: 'Home',
        href: 'https://lana.global'
      },
      {
        name: 'Browse',
        href: 'https://lana.global/browse'
      },
      {
        name: 'Blog',
        href: 'https://blog.lana.global'
      },
      {
        name: 'How it works',
        href: 'https://lana.global/how-it-works'
      },
      {
        name: 'Sign in',
        href: 'https://lana.global/login'
      },
      {
        name: 'Sign up',
        href: 'https://lana.global/register'
      }
    ];
  }

  static mapMenuItem (item) {
    const { href, name } = item;
    const key = createKey(name);

    return (
      <a {...link} href={href}>
        <div key={key} {...label}>
          {name}
        </div>
      </a>
    )
  }

  renderMenuItems () {
    return (
      this.MENU_ITEMS.map(Header.mapMenuItem)
    )
  }

  render () {
    return (
      <div {...container}>
        <div {...wrapper}>
          <img {...logo} src='/img/lana-logo.png'/>

          <div {...menuItemsWrapper}>
            {this.renderMenuItems()}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
