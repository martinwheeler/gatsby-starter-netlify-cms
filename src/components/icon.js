import React, { PureComponent } from 'react';

class Icon extends PureComponent {
  render () {
    const { src, ...props } = this.props;
    return (
      <span dangerouslySetInnerHTML={{ __html: src }} {...props} />
    );
  }
}

export default Icon;
