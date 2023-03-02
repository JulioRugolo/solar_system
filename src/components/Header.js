import React, { Component } from 'react';
import './Header.css';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { image } = this.props;
    return (
      <header>
        <h1>Sistema Solar</h1>
        <img src={ image } alt="Logo" />
      </header>
    );
  }
}

Header.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Header;
