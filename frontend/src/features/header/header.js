import './header.scss';
import { Button } from '../button/button.js'
import { Music } from '../music/music.js'
import i18n from '../../conf/i18n.json'

export function Header() {
  return (
    <div className="header">
      <div className="row column-s align-center">
        <div className="grid-2 grid-12-s text-center-s">
          <Button><i className="fa fa-list" /> &nbsp;{i18n.mygames}</Button>
        </div>
        <h1 className="title grid-8 row justify-center">The Hangman Game</h1>
        <div className="options">
          <Music />
        </div>
      </div>
    </div>
  );
}
