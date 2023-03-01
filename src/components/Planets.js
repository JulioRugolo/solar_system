import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class Planets extends Component {
  render() {
    return (
      planets.map((planet) => (
        <div data-testid="solar-system" key={ planet.name }>
          <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
        </div>
      ))
    );
  }
}

export default Planets;
