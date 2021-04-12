import { useSelector, useDispatch } from 'react-redux';
import './keyboard.scss';
import i18n from '../../conf/i18n.json'
import { addError } from '../figure/figureSlice'
import { newChoice } from '../keyboard/keyboardSlice'
import { selectChoices, selectWordArray } from './keyboardSlice';
import { resetCounter } from '../clock/clockSlice';

export function Keyboard(props) {

    const wordArray = useSelector(selectWordArray)
    const choices = useSelector(selectChoices)
    const dispatch = useDispatch();
    const disableLetter = (letter) => {
        dispatch(newChoice(letter))
        dispatch(resetCounter())
        if (!wordArray.includes(letter)) dispatch(addError())
    }
    return (
        <div className="keyboard column align-center">
            <div className="word row justify-center">
                {wordArray.map((letter) => <div className="letter" key={`someletter-${Math.random()}`}>{choices.includes(letter) ? letter : ''}</div>)}
            </div>
            <div className="alphabet row wrap justify-center">
                {i18n.alphabet.map(letter => <button className="letter" onClick={() => disableLetter(letter)} key={letter} disabled={choices.includes(letter) ? true : false}>{letter}</button>)}
            </div>
        </div>
    );
}