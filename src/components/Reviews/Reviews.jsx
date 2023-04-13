import { useState } from "react";
import Rating from "../Rating/Rating";
import InputShadow from "../InputShadow/InputShadow";
import "./Reviews.scss";
import ReviewsBottom from "../ReviewsBottom/ReviewsBottom";

function Reviews({ reviewsList = [] }) {
    const [responseField, setResponseField] = useState("");

    return (
        <div className="reviews-list">
            {reviewsList.map((review, i) => {
                const { user, userImg, date, reviewTxt, rating, responses } = review;

                return (
                    <div className="reviews-item" key={i}>
                        <div className="reviews-item-top">
                            <div className="reviews-item-reviewver">
                                <div className="reviews-item-reviewer-img">
                                    <img src={userImg} alt="review image" />
                                </div>
                                <div className="reviews-item-reviewer-name">
                                    {user}
                                </div>
                            </div>
                            <div className="reviews-item-date">{date}</div>
                        </div>

                        <p className="reviews-item-txt">{reviewTxt}</p>

                        {responses && (
                            <div className="reviews-item-response-list">
                                {responses.map((response, i) => (
                                    <div className="reviews-item" key={i}>
                                        <div className="reviews-item-top">
                                            <div className="reviews-item-reviewver">
                                                <div className="reviews-item-reviewer-img">
                                                    <img
                                                        src={response.userImg}
                                                        alt="review image"
                                                    />
                                                </div>
                                                <div className="reviews-item-reviewer-name">
                                                    {response.user}
                                                </div>
                                            </div>
                                            <div className="reviews-item-date">
                                                {response.date}
                                            </div>
                                        </div>
                                        <p className="reviews-item-txt">
                                            {response.reviewTxt}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
						 <ReviewsBottom rating={rating} />
                    </div>
                );
            })}
        </div>
    );
}

export default Reviews;
