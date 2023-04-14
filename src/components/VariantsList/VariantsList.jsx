
import "./VariantsList.scss";

function VariantsList({ variantsList = [] }) {
    return (
        <ul className="variants-list round-shadow">
            {variantsList.map((variant) => (
                <li className="variants-item" key={variant.name}>
                    <div className="variant-name">{variant.name}</div>
                    <div
                        className={`post-card-details-instok ${
                            variant.isStock
                                ? ""
                                : "post-card-details-instok-not"
                        }`}>
                        {variant.isStock ? "В наличии" : "Нет в наличии"}
                    </div>
                    <div className="variant-price">{variant.price} тг</div>
                </li>
            ))}
        </ul>
    );
}

export default VariantsList;
