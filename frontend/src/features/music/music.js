/* import { useState } from 'react'; */
import './music.scss';
/* import i18n from '../../conf/i18n.json' */
import song from './wanderlust.mp3'
export function Music(props) {

    /* const [off, setOff] = useState(true) */

    /*     const button = (off) ?
            <div className="music off" onClick={() => setOff(false)} title={i18n.turnon}>
                <i className="fa fa-music" />
                <i className="fa fa-ban" />
            </div> :
            <div className="music" onClick={() => setOff(true)} title={i18n.turnoff}>
                <i className="fa fa-music" />
            </div> */

    return (
        <audio id="song" src={song} loop controls />
    );
}