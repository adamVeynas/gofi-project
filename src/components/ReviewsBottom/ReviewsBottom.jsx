import { useState } from "react";
import InputShadow from "../InputShadow/InputShadow";
import Rating from "../Rating/Rating";
import "./ReviewsBottom.scss";

function ReviewsBottom({ rating }) {

	const [inpValue, setInpValue] = useState('')

    return (
        <div className="reviews-item-bttm">
            <InputShadow
                wrapClass="reviews-item-bttm-resp-inp"
                placeholder="Комментарий"
                value={inpValue}
                onChange={(ev) => setInpValue(ev.target.value)}
            />
            <button className="reviews-item-bttm-resp-btn">Ответить</button>
            <Rating rating={rating} />
        </div>
    );
}

export default ReviewsBottom;
