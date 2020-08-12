import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 5,
        },
        {
          name: 'Antoś',
          score: 0,
        }
      ]
    }
  }
 
  render() {
    return (
      <div className="App">
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate}/>
      </div>
    );
  }
}

export default App;

