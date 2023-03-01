import React, { Component } from 'react';
import Planets from './Planets';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div>
        <Title headline="Planetas" />
        <Planets />
      </div>
    );
  }
}

export default SolarSystem;
