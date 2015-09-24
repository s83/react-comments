import React from 'react';

/**
 * simple component that generates white spaces
 * example: <Spaces size=10/>
 */
export default class Spaces extends React.Component {
  static propTypes = {
    size: React.PropTypes.number
  }

  /**
   * generate whitespaces from a given size
   * @return {string} whitespaces
   */
  renderSpaces () {
    const size = this.props.size;
    return Array(1 + (size ? size : 1)).join(' ');
  }

  render () {
    return (
      <span className="spaces">
      {this.renderSpaces()}
      </span>
    );
  }
}
