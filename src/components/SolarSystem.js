import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          Planets.map(({ name, image }) => (
            <PlanetCard planetName={ name } planetImage={ image } key={ name } />
          ))
        }
      </div>
    );
  }
}

export default SolarSystem;
