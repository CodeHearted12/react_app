import React, { Component } from 'react';
import './styles.App.css';
import logo from './logo.svg';
import EarthquakeInfo from './EarthquakeInfo';
import EarthquakeList from './EarthquakesList';


class App extends Component {
  render() {
    return (
      <div className="App"><div className="App"><div className="title"><div className="my-header">
Earthquakes!
</div>
</div>
<img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EarthquakeInfo />
       <EarthquakeList />
      </div>
    );
  }
}

export default App;
