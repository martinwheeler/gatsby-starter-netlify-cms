import { BASE_LANA_URL } from 'const';
import CategoryLinks from 'containers/category-links';
import { autobind } from 'core-decorators';
import { MENU_CONFIG } from 'footer-config';
import Link from 'gatsby-link';
import { css } from 'glamor';
import React, { PureComponent } from 'react';

import { SVG } from 'theme';
import { createKey } from 'utils/react';

const container = css({
  width: '100%',
  display: 'flex',
  background: '#F5F5F5'
});
const wrapper = css({
  display: 'flex',
  width: 'inherit',
  alignItems: 'center',
  justifyContent: 'center'
});
const logoWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  margin: '30px 0'
});
const logo = css({
  width: '23px',
  height: '23px',
  margin: '0 10px'
});
const menuItemsWrapper = css({
  display: 'flex',
  width: 'inherit',
  alignItems: 'center',
  justifyContent: 'space-around',
  minHeight: '85px',
  padding: '0 40px',
  maxWidth: '900px',

  '@media only screen and (max-width: 768px)': {
    flexDirection: 'column',
    padding: '40px'
  }
});
const label = css({
  fontSize: '16px',
  lineHeight: '28px',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '400',
  textTransform: 'initial',

  '@media only screen and (max-width: 768px)': {
    marginBottom: '20px',
  }
});
const headingLabel = css({
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '900',
  lineHeight: '24px',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexBasis: '33.33%',
  justifyContent: 'center',

  '& > span': {
    display: 'block'
  }
});
const menuItemIcon = css({
  width: '20px',
  height: 'auto'
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

const copyright = css({
  display: 'flex',
  justifyContent: 'center',
  textTransform: 'uppercase',
  fontSize: '10px',
  marginBottom: '40px'
});

@autobind
class Footer extends PureComponent {
  currentYear = new Date().getFullYear();

  static withUrl (children, key, url) {
    return (
      <a key={key} {...link} href={url}>
        {children}
      </a>
    );
  }

  static withLink (children, key, url) {
    return (
      <Link key={key} {...link} to={url}>
        {children}
      </Link>
    );
  }

  static mapMenuItem (item) {
    const { href, name, menuItems, isHeading, Icon, to } = item;
    const key = createKey(name);
    const formattedLink = href && (href.indexOf('http') > -1 ? href : `${BASE_LANA_URL}${href}`) || null;
    const styling = css(
      link,
      label,
      isHeading && headingLabel || null
    );

    const menuItemContent = (
      <div key={key} {...styling}>
        {Icon && (
          <span {...menuItemIcon}><Icon/></span>
        )}
        <span>{name}</span>
        {menuItems && menuItems.map(Footer.mapMenuItem)}
      </div>
    );

    return (formattedLink && Footer.withUrl(menuItemContent, key, formattedLink))
      || (to && Footer.withLink(menuItemContent, key, to))
      || menuItemContent;
  }

  static renderMenuItems () {
    return (
      MENU_CONFIG.map(Footer.mapMenuItem)
    )
  }

  render () {
    const { categories } = this.props;
    const { Facebook, Instagram, Pintrest } = SVG;

    return (
      <div>
        <div {...container}>
          <div {...wrapper}>
            <div {...menuItemsWrapper}>
              {Footer.renderMenuItems()}
            </div>
          </div>
        </div>

        <CategoryLinks categories={categories} />

        <div {...logoWrapper}>
          <div {...css(logo, link)}>
            <a target='_blank' href='https://www.facebook.com/lana.global' {...css(link)}>
              <Facebook/>
            </a>
          </div>
          <div {...css(logo, link)}>
            <a target='_blank' href='https://www.instagram.com/lana.global' {...css(link)}>
              <Instagram/>
            </a>
          </div>
          {/*<div {...css(logo, link)}>*/}
            {/*<a href='#' {...css(link)}>*/}
              {/*<Pintrest />*/}
            {/*</a>*/}
          {/*</div>*/}
        </div>

        <div {...copyright}>
          &copy; {this.currentYear} &nbsp; <Link {...link} to='/'>The Lana Edit</Link>
        </div>
      </div>
    );
  }
}

export default Footer;
