import { css } from 'glamor';
import { autobind } from "core-decorators";
import React, { PureComponent } from "react";

import Hamburger from 'components/hamburger';
import MobileNav from 'containers/nav-menu/mobile';
import { MENU_CONFIG } from "containers/nav-menu/menu-config";

const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const hideHamburger = css ({
  '@media only screen and (min-width: 769px)': {
    display: 'none'
  }
});

@autobind
class MobileMenu extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  openMenu () {
    this.setState({ visible: true });
  }

  closeMenu () {
    this.setState({ visible: false });
  }

  render () {

    return (
      <div {...container}>
        <MobileNav
          style={{ zIndex: 1 }}
          items={MENU_CONFIG}
          isVisible={this.state.visible}
          onClose={this.closeMenu}
        />

        <Hamburger {...hideHamburger} onClick={this.openMenu}/>
      </div>
    );
  }
}

export default MobileMenu;
