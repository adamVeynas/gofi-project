import InputShadow from "../InputShadow/InputShadow";
import VariantsChbx from "../VariantsChbx/VariantsChbx";
import DeleteIcon from "../../icons/DeleteIcon";
import "./EditPostVariants.scss";

function EditPostVariants({ variantsArr = [], setVariantsArr }) {
    const changeNameInp = (ev, idx) => {
        const updatedVariantsArr = variantsArr.map((variant, position) => {
            if (position !== idx) {
                return variant;
            }

            return {
                name: ev.target.value,
                inStock: variant.inStock,
                price: variant.price,
            };
        });

        setVariantsArr(updatedVariantsArr);
    };

    const changeInStockInp = (idx) => {
        const updatedVariantsArr = variantsArr.map((variant, position) => {
            if (position !== idx) {
                return variant;
            }

            return {
                name: variant.name,
                inStock: !variant.inStock,
                price: variant.price,
            };
        });

        setVariantsArr(updatedVariantsArr);
    };

    const changePriceInp = (ev, idx) => {
        const updatedVariantsArr = variantsArr.map((variant, position) => {
            if (position !== idx) {
                return variant;
            }

            return {
                name: variant.name,
                inStock: variant.inStock,
                price: ev.target.value,
            };
        });

        setVariantsArr(updatedVariantsArr);
    };

    const deleteVariant = (idx) => {
        const updatedVariantsArr = variantsArr.filter((variant, position) => (position !== idx));
        console.log(updatedVariantsArr);
        setVariantsArr(updatedVariantsArr);
    };

    const addMoreVariants = () => {
		
        setVariantsArr((prevVal) => [
            ...prevVal,
            { name: "", inStock: true, price: "" },
        ]);
    };

    return (
        <div className="edit-post-variants">
            <ul className="edit-post-variants-list">
                <li>
                    <span className="inp-lbl-shadow">Добавьте типы товара</span>
                </li>
                {variantsArr.map((variant, idx) => (
                    <li className="edit-post-variants-item" key={idx}>
                        <InputShadow
                            placeholder="Название"
                            wrapClass="edit-post-inp-wrap"
                            name={`editPostVariantName-${idx + 1}`}
                            value={variant.name}
                            onChange={(ev) => changeNameInp(ev, idx)}
                        />
                        <VariantsChbx
                            idx={idx}
                            chbxValue={variant.inStock}
                            changeVariantChbx={() => changeInStockInp(idx)}
                        />
                        <div className="edit-post-inp-wrap">
                            <label
                                className="inp-lbl-shadow"
                                htmlFor=""></label>
                            <input
                                placeholder="Цена"
                                className="edit-post-inp inp-base"
                                type="text"
                                name={`editPostVariantPrice-${idx + 1}`}
                                value={variant.price}
                                onChange={(ev) => changePriceInp(ev, idx)}
                            />

                            <span>тг</span>
                        </div>

                        <div
                            className="edit-post-variants-delete-icon"
                            onClick={() => deleteVariant(idx)}>
                            <DeleteIcon />
                        </div>
                    </li>
                ))}
            </ul>

            <button
                type="button"
                className="edit-post-variants-add-btn"
                onClick={addMoreVariants}>
                Добавить тип товара
            </button>
        </div>
    );
}

export default EditPostVariants;
