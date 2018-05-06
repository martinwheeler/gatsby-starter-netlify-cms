import { BASE_LANA_URL } from 'const';
import { autobind } from 'core-decorators';
import { css } from 'glamor';
import React, { PureComponent } from 'react';
import { SVG } from "theme";

const wrapper = css({
  position: 'fixed',
  right: 0,
  top: 0,

  minWidth: '320px',
  width: '80%',
  height: '100vh',
  overflow: 'hidden',
  willChange: 'transform',
  pointerEvents: 'none',
  transform: 'translateZ(0)'
});

const leaveAnimation = css.keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(100%)' }
});

const enterAnimation = css.keyframes({
  '0%': { transform: 'translateX(100%)' },
  '100%': { transform: 'translateX(0)' }
});

const menuListAnimation = {
  animationName: leaveAnimation,
  animationDuration: '500ms',
  animationFillMode: 'forwards'
};

const menuListContainer = {
  position: 'relative',
  backgroundColor: 'rgb(35, 165, 170)',
  height: 'inherit',
  padding: '60px 0',
  overflowY: 'scroll',
  pointerEvents: 'all',
  willChange: 'transform',

  '&::-webkit-scrollbar': {
    display: 'none'
  }
};

const menuItemsWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start'
});

const menuItem = css({
  display: 'flex',
  alignItems: 'center',
  padding: '0 40px',
  cursor: 'pointer',
  minHeight: '60px',
  color: 'white',
  textTransform: 'uppercase',
  fontFamily: 'Quicksand, Arial, sans-serif',
  fontSize: '18px',
  fontWeight: '600',
  pointerEvents: 'all',

  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.05)'
  }
});

const closeButton = css({
  position: 'fixed',
  right: '40px',
  top: '30px',
  cursor: 'pointer',
  width: '22px',
  height: '22px',
  pointerEvents: 'all',
  color: 'white',

  '& > svg': {
    fill: 'white',
    width: 'inherit',
    height: 'inherit'
  }
});

const currentAnimationDirection = (shouldBeVisible, initialLoad) => {
  return shouldBeVisible
    ? {
      ...menuListAnimation,
      animationName: enterAnimation,
      animationDuration: '300ms'
    }
    : {
      ...menuListAnimation,
      ...(initialLoad && { animationDuration: '0ms' })
    };
};

@autobind
class MobileMenu extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      visible: false
    };
    this.initialLoad = true;
  }

  componentDidMount () {
    this.initialLoad = false;
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.isVisible) {
      this.setState({ visible: true });
    } else if (!nextProps.isVisible) {
      this.setState({ visible: false });
    }
  }

  closeMenu () {
    this.props.onClose();
  }

  handleMenuNavigation (item) {
    const { href } = item;
    const formattedHref = href.indexOf('http') > -1 ? href : `${BASE_LANA_URL}${href}`;

    setTimeout(() => {
      window.top.location.href = formattedHref;
    }, 360);

    this.closeMenu();
  }

  render () {
    const {
      items,
      isVisible,
      staticContext,
      ...props
    } = this.props;
    const { visible } = this.state;
    const { Close } = SVG;
    const animationStyles = currentAnimationDirection(visible, this.initialLoad);

    return (
      <div {...wrapper} {...props}>
        <div {...css({ ...animationStyles, ...menuListContainer})}>
          <div {...css(menuItemsWrapper)}>
            {items.map(this.renderMenuItem)}
          </div>

          <div {...closeButton} onClick={this.closeMenu}>
            <Close/>
          </div>
        </div>
      </div>
    );
  }

  renderMenuItem (item, index) {
    const { Navigation } = this.props;
    const onClick = () => this.handleMenuNavigation(item);

    return (
      <div key={item.name} {...css(menuItem)} onClick={onClick}>
        {item.name}
      </div>
    );
  }
}

export default MobileMenu;
