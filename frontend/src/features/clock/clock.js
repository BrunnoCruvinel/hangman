import './clock.scss';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCounter, decrement } from './clockSlice';
import { addError } from '../figure/figureSlice';

export function Clock(props) {

    const counter = useSelector(selectCounter);
    const dispatch = useDispatch()

    useEffect(() => {
        setInterval(function () {
            dispatch(decrement())
        }, 1000)
    }, []);
    useEffect(() => {
        if (counter === 0) dispatch(addError())
    });
    return (
        <div className="clock">
            <i className="fa fa-clock" /> &nbsp; {counter > -1 ? counter : '0'}
        </div>
    );
}