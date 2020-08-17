import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  let player = {name:'Ania',score: 0};
  let players = [player];
  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  let scoreUpdate = onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(5);
});

it('should add player', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Gosia');
  const players = appComponent.state('players');
  expect(players.length).toEqual(3);
  expect(players[2].name).toEqual('Gosia');
  expect(players[2].score).toEqual(0);
});
