import React from 'react';
import './Player.css';
import { GoTrashcan } from 'react-icons/go';


const Player = (props) => (
  <li className="Player row">
    <span className="Player__name col-6">{props.name}</span>
    <span className="Player__score col-2">{props.score}</span>
    <span className="Player__button col-1" onClick={() => props.onPlayerScoreChange(1)} >+1</span>
    <span className="Player__button col-1" onClick={() => props.onPlayerScoreChange(-1)} >-1</span>
    <span className="Player__button col-1" onClick={() => props.onPlayerRemove(props.playerIndex)} >                    <GoTrashcan />
</span>
  </li>
);

export default Player;
