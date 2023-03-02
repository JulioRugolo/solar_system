import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import Title from './Title';
import './PlanetCard.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <div className="titlePlanets">
          <Title headline="Planetas" />
        </div>
        <div className="solar">
          <hr />
          <div className="planets">
            {
              Planets.map(({ name, image }) => (
                <PlanetCard planetName={ name } planetImage={ image } key={ name } />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
