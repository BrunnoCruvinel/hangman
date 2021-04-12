import './button.scss';
export const Button = (props) => <button className={`button ${props.className}`} onClick={props.onClick}>{props.children}</button>
