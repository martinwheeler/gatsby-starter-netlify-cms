import { BASE_LANA_URL } from 'const';
import MobileMenu from 'containers/mobile-nav';
import { MENU_CONFIG } from 'containers/nav-menu/menu-config';
import { autobind } from 'core-decorators';
import { css } from 'glamor';
import React, { Component } from 'react';
import Link from 'gatsby-link';

import { COLORS, ZINDEX } from 'theme';
import { createKey } from 'utils/react';

const container = css({
  display: 'flex',
  width: '100%',
  position: 'fixed',
  top: 0,
  backgroundColor: COLORS.PINK,
  zIndex: ZINDEX.HEADER,
  boxSizing: 'border-box',
  height: '80px',
  color: 'white'
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
  alignItems: 'center',

  '@media only screen and (max-width: 768px)': {
    display: 'none'
  }
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
    opacity: 0.75
  }
});
const titleLink = css({
  textTransform: 'uppercase',
  fontSize: '28px'
});

@autobind
class Header extends Component {
  static mapMenuItem (item) {
    const { href, name } = item;
    const key = createKey(name);
    const formattedLink = href.indexOf('http') > -1 ? href : `${BASE_LANA_URL}${href}`;

    return (
      <a key={key} {...link} href={formattedLink}>
        <div {...label}>
          {name}
        </div>
      </a>
    )
  }

  static renderMenuItems () {
    return (
      MENU_CONFIG.map(Header.mapMenuItem)
    )
  }

  render () {
    return (
      <div {...container}>
        <div {...wrapper}>
          <Link {...css(link, titleLink)} style={{ display: 'flex' }} to={'/'}>
            The Edit
          </Link>

          <div {...menuItemsWrapper}>
            {Header.renderMenuItems()}
          </div>
        </div>

        <MobileMenu/>
      </div>
    );
  }
}

export default Header;
