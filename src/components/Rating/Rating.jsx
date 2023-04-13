import { useState } from "react";
import StarIcon from "../../icons/StarIcon";
import StarRedIcon from "../../icons/StarRedIcon";
import "./Rating.scss";

function Rating({ rating = 0 }) {

    const [ratingArr, setratingArr] = useState([1,2,3,4,5]);

	const clickHandler = (idx) => {
		console.log('Rating ' + idx);
	}

    return (
        <div className="rating">
            {ratingArr.map((i) => (
                <div className="rating-star" key={i} onClick={() => clickHandler(i)}>
                    {rating >= i ? <StarRedIcon /> : <StarIcon />}
                </div>
            ))}
        </div>
    );
}

export default Rating;
