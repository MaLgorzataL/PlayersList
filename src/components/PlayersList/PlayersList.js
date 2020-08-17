import React, { useEffect } from 'react';
import Player from '../Player/Player';
import './PlayersList.css';
import '../Player/Player.css';

export default function PlayersList(props) {
    let playersNode;

    const chooseRandomColor = (colors) => {
        let randomColor = Math.floor(
          Math.random() * colors.length);
        return props.colors[randomColor];
      };
      
    // Podobnie do metod componentDidMount i componentDidUpdate:  
    useEffect(() => {    // Zmień kolor tła  });
      if (props.players.length>0) {
        let playersNode = document.querySelectorAll(".Player");
        let thisplayer = playersNode.length-1;
        playersNode[thisplayer].style.background = chooseRandomColor(props.colors);
      }
    });

 return (   
   <ul className="PlayersList">
       {props.players.map((player, i) => (
           <Player
               key={i}
               playerIndex={i}
               name={player.name}
               score={player.score}
               onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
               onPlayerRemove={(playerIndex) => props.onPlayerRemove(playerIndex)}
           />
           // Zmień tło
           )
       )}
   </ul>
 )
}

