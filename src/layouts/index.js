import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import React, { PureComponent } from 'react';

import Header from 'components/header';
import Footer from 'components/footer';
import 'layouts/all.sass';

@autobind
class TemplateWrapper extends PureComponent {
  static propTypes = {
    children: PropTypes.func,
  };

  render () {
    const { children } = this.props;

    return (
      <div>
        <Helmet title="Lana Edit" />
        <Header />
        <div>{children()}</div>
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper
