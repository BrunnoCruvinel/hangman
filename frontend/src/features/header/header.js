import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/* import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice'; */
import './header.scss';
import { Button } from '../button/button.js'
import { Music } from '../music/music.js'

export function Header() {
  /*   const count = useSelector(selectCount); */
  const dispatch = useDispatch();
  /*   const [incrementAmount, setIncrementAmount] = useState('2'); */



  return (
    <div className="header">
      <div className="row align-center">
        <Button className="grid-2">MY GAMES</Button>
        <h1 className="title grid-8 row justify-center">HANGMAN</h1>
        <div className="options">
          <Music />
        </div>
      </div>
    </div>
  );
}
