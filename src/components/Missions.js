import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        <div className="mission">
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
                key={ name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
