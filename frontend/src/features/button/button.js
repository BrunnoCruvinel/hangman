import './button.scss';
export function Button(props) {
    return (
        <div className="button">
            { props.children }
        </div>
    );
}