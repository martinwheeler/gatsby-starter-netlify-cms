import { css } from 'glamor';
import { autobind } from 'core-decorators';
import React, { PureComponent } from 'react';

import { COLORS } from 'theme';
import { BASE_LANA_URL } from 'const';
import { createKey } from 'utils/react';
import { MENU_CONFIG } from 'footer-config';

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
  width: 'inherit',
  flexDirection: 'column',
  alignItems: 'flex-start',
  margin: '10px 20px'
});
const label = css({
  fontSize: '16px',
  lineHeight: '24px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '400',
  textTransform: 'initial',
});
const headingLabel = css({
  textTransform: 'uppercase',
  fontSize: '16px',
  fontWeight: '900',
  lineHeight: '24px',
  color: 'white',
  padding: '20px 0 10px 0',

  '& > span': {
    display: 'block',
    paddingBottom: '5px'
  }
});
const link = css({
  color: 'white',

  '&:hover': {
    color: COLORS.LANA_PURPLE
  }
});

@autobind
class Footer extends PureComponent {
  static withLink (children, key, url) {
    return (
      <a key={key} {...link} href={url}>
        {children}
      </a>
    );
  }

  static mapMenuItem (item) {
    const { href, name, menuItems } = item;
    const key = createKey(name);
    const formattedLink = href && (href.indexOf('http') > -1 ? href : `${BASE_LANA_URL}${href}`) || null;
    const styling = css(
      label,
      menuItems && headingLabel || null
    );

    const menuItemContent = (
      <div key={key} {...styling}>
        <span>{name}</span>
        {menuItems && menuItems.map(Footer.mapMenuItem)}
      </div>
    );

    return formattedLink && Footer.withLink(menuItemContent, key, formattedLink) || menuItemContent;
  }

  static renderMenuItems () {
    return (
      MENU_CONFIG.map(Footer.mapMenuItem)
    )
  }

  render () {
    return (
      <div {...container}>
        <div {...wrapper}>

          <div {...menuItemsWrapper}>
            {Footer.renderMenuItems()}
          </div>


          <div {...logoWrapper}>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
