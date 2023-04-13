import { useEffect, useState } from "react";
import "./PostImages.scss";

function PostImages({ imgArr = [] }) {
    const [imgIdx, setImgIdx] = useState(0);
    const [isIdxChanged, setIsIdxChanged] = useState(false);


	const clickHandler = (idx) => {
		setIsIdxChanged(true)
		setImgIdx(idx)
	}

	useEffect(() => {

		let timerID = setTimeout(() => {
			setIsIdxChanged(false)
		}, 300)

		return () => clearInterval(timerID)
	}, [imgIdx, isIdxChanged])

    return (
        <div className="post-main-imgs">
            <div className={`post-main-imgs-big-img ${isIdxChanged ? 'post-main-imgs-big-img_act' : ''}`}>
                <img src={imgArr[imgIdx]} alt="post big image" />
            </div>

            <div className="post-main-imgs-small-imgs">
                {imgArr.map((img, idx) => (
                    <div className="post-main-imgs-small-img" key={idx} onClick={() => clickHandler(idx)}>
                        <img src={img} alt="post small img" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostImages;
