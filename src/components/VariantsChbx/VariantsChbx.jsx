
import './VariantsChbx.scss'

function VariantsChbx({ changeVariantChbx, chbxValue = true, idx }) {

    return (
        <div className="edit-post-inp-wrap">
            <label className="edit-post-inp-lbl">В наличии</label>
            <input
                className="edit-post-inp"
                type="checkbox"
				name={`editPostVariantInstock-${idx + 1}`}
				checked={chbxValue}
				onChange={changeVariantChbx}
            />
            <button
                type="button"
				className={`edit-post-variants-btn ${chbxValue ? 'edit-post-variants-btn_yes' : ''}`}
				onClick={changeVariantChbx}
			>
                Да
            </button>
            <button type="button"
				className={`edit-post-variants-btn ${chbxValue ? '' : 'edit-post-variants-btn_yes'}`}
				onClick={changeVariantChbx}
			>
                Нет
            </button>
        </div>
    );
}

export default VariantsChbx;
