import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';


const PlayersList = (props) => (
    
   <ul className="PlayersList">
       {props.players.map((player, i) => (
           <Player
               key={i}
               playerIndex={i}
               name={player.name}
               score={player.score}
               color={props.colors[i]}
               onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
               onPlayerRemove={props.onPlayerRemove}
           />)
       )}
   </ul>
);

export default PlayersList;