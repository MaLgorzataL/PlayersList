import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
  constructor() {
    super();
 
    this.state = {
      players: [
        {
          name: 'Kunegunda',
          score: 15,
        },
        {
          name: 'Antoś',
          score: 10000,
        }
      ],
      colors: ['red', 'purple', 'fuchsia','green', 'lime', 
                'olive', 'yellow', 'blue', 'teal', 'aqua'
              ],
      number: 0,
      backgroundColor: 'white'
    };
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  };

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onPlayerRemove = (playerIndex) => {
    if (this.state.players !== []) {
      this.setState({
        players: this.state.players.filter((player, index) => {
          if (index !== playerIndex) {
          return { ...player};
          } else this.state.players.splice(index,0);
        })
      });
    }
  };
 
  render() {
    return (
      <div className="App">
        <h1>Players List</h1>
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList 
          players={this.state.players} 
          colors={this.state.colors}
          onScoreUpdate={this.onScoreUpdate} 
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
}

export default App;

