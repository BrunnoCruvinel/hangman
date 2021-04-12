import { useDispatch } from 'react-redux';
import './App.scss';
import i18n from './conf/i18n.json'
import { Header } from './features/header/header';
import { Figure } from './features/figure/figure';
import { Keyboard } from './features/keyboard/keyboard';
import { Button } from './features/button/button.js'
import { Clock } from './features/clock/clock.js'
import { newWord } from './features/keyboard/keyboardSlice';
import { resetError } from './features/figure/figureSlice';
import { resetCounter } from './features/clock/clockSlice';
function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className='container row column-s align-center'>
        <div className="grid-2 row justify-center"><Clock /></div>
        <div className="grid-8 column align-center">
          <Figure />
          <Keyboard />
        </div>
        <div className="grid-2 grid-12-s new">
          <Button className='new-word' onClick={() => dispatch(newWord()) && dispatch(resetError()) && dispatch(resetCounter())}><i className="fa fa-redo" /> {i18n.newword}</Button>
        </div>
      </div>
    </>
  );
}

export default App;
