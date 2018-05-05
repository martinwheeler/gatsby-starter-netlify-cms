import { autobind } from 'core-decorators';
import Link from 'gatsby-link';
import { css } from 'glamor';
import React, { Component } from 'react';
import { COLORS, SHADOWS, ZINDEX } from 'theme';

import { createKey } from 'utils/react';

const container = css({
  width: '100%',
  display: 'flex',
  background: COLORS.LANA_GREEN,
});
const wrapper = css({
  display: 'flex',
  width: 'inherit',
  alignItems: 'center',
  justifyContent: 'space-around'
});
const logoWrapper = css({
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
class Footer extends Component {
  constructor (props) {
    super(props);

    this.MENU_ITEMS = [
      {
        name: 'Official Things',
        menuItems: [
          {
            name: 'Careers',
            href: '/'
          },
          {
            name: 'Feedback',
            href: '/'
          },
          {
            name: 'Privacy Policy',
            href: '/'
          },
          {
            name: 'Terms of Service',
            href: '/'
          },
        ]
      },
      {
        name: 'Tips & Tricks',
        menuItems: [
          {
            name: 'Photography',
            href: '/'
          },
          {
            name: 'How it Works',
            href: '/'
          },
          {
            name: 'FAQs',
            href: '/'
          },
          {
            name: 'Blog',
            href: '/'
          },
        ]
      },
      {
        name: 'About Lána',
        menuItems: [
          {
            name: 'Our Story',
            href: '/'
          },
          {
            name: 'Why Lána',
            href: '/'
          },
          {
            name: 'Impact & Sustainability',
            href: '/'
          },
          {
            name: 'Maternity',
            href: '/'
          },
          {
            name: 'Media/Press',
            href: '/'
          },
          {
            name: 'Contact Us',
            href: '/'
          },
        ]
      }

    ];

  }

  static mapMenuItem (item) {
    const { href, name } = item;
    const key = createKey(name);

    return (
      <Link {...link} to={href}>
        <div key={key} {...label}>
          {name}
        </div>
      </Link>
    )
  }

  renderMenuItems () {
    return (
      this.MENU_ITEMS.map(Footer.mapMenuItem)
    )
  }

  render () {
    return (
      <div {...container}>
        <div {...wrapper}>

          <div {...menuItemsWrapper}>
            {this.renderMenuItems()}
          </div>


          <div {...logoWrapper}>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
