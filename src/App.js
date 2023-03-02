import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    const url = 'https://github.com/tryber/sd-029-b-project-solar-system/blob/Julio-Rugolo-Solar-System/src/images/logo.png';
    return (
      <div className="maincontent">
        <Header image={ url } />
        <div className="content">
          <SolarSystem />
          <Missions />
        </div>
      </div>
    );
  }
}

export default App;
