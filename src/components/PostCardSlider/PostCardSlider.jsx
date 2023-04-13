import { useEffect, useRef, useState } from "react";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import "./PostCardSlider.scss";
import { useNavigate } from "react-router-dom";

function PostCardSlider({ sliderList, id }) {

	const [imgIdx, setImgIdx] = useState(0)
	const [isVisible, setIsVisible] = useState(true)
	const navigate = useNavigate()

	const prevHandler = () => {
		const isFirstSlide = imgIdx === 0;
    	const newIdx = isFirstSlide ? sliderList.length - 1 : imgIdx - 1;
		setIsVisible(false)
		setImgIdx(newIdx)
	}

	const nextHandler = () => {
		const isLastslide = imgIdx === sliderList.length - 1
		const newIdx = isLastslide ? 0 : imgIdx + 1
		setIsVisible(false)
		setImgIdx(newIdx)
	}

	useEffect(() => {

		const timerID = setTimeout(() => {
			setIsVisible(true)
		}, 500)

		return () => clearTimeout(timerID)

	}, [isVisible])

    return (
        <div className="post-card-slider">
            <div onClick={() => navigate(`/posts/${id}`)} className={`post-card-img ${isVisible ? '' : 'post-card-img_last'}`}>
                <img src={sliderList[imgIdx].url} alt="post image" />
            </div>
			<div className="post-card-slider-arrows">
				<div className="post-card-slider-arrow-prev" onClick={prevHandler}>
					<ArrowLeft />
				</div>
				<div className="post-card-slider-arrow-next" onClick={nextHandler}>
					<ArrowRight />
				</div>
			</div>
        </div>
    );
}

export default PostCardSlider;
