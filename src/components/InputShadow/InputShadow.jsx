
import './InputShadow.scss'

function InputShadow({
    wrapClass = "",
    lblTxt = "",
    id,
    ...args
}) {
    return (
        <div className={wrapClass}>
            <label className="inp-lbl-shadow" htmlFor={id}>{lblTxt}</label>
            <input
                className='inp-base'
                id={id}
                {...args}
            />
        </div>
    );
}

export default InputShadow;
