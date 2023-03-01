import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      planets.map((planet) => (
        <div data-testid="solar-system" key={ planet.name } className="planets">
          <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
        </div>
      ))
    );
  }
}

export default SolarSystem;
