import './ButtonRed.scss'
function ButtonRed({ txt, ...args }) {
    return (
        <button className="btn-red" {...args}>
            {txt}
        </button>
    );
}

export default ButtonRed;
