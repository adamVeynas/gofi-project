import { useState } from "react";
import './InputBase.scss'

function InputBase({
	name,
	id,
	placeholder,
	type,
	...args
}) {

	const [ value, setValue ] = useState('')

    return (
        <div className="input-wrap">
            <label htmlFor={id} className="input-lbl"></label>
            <input
				value={value}
				onChange={(ev) => setValue(ev.target.value)}
				id={id}
                type={type}
				name={name}
                className="input-inp"
                placeholder={placeholder}
				{...args}
            />
        </div>
    );
}

export default InputBase;
