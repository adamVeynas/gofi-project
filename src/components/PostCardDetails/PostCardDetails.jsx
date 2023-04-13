import LikeIcon from "../../icons/LikeIcon";
import ShareIcon from "../../icons/ShareIcon";
import StarIcon from "../../icons/StarIcon";
import './PostCardDetails.scss'

function PostCardDetails() {
    return (
        <div className="post-card-details">
            <div className="post-card-details-icon">
                <div className="post-card-details-icon-wrap">
                    <LikeIcon />
                </div>
                <span>200</span>
            </div>
            <div className="post-card-details-icon">
                <div className="post-card-details-icon-wrap">
                    <ShareIcon />
                </div>
                <span>150</span>
            </div>
            <div className="post-card-details-icon">
                <div className="post-card-details-icon-wrap">
                    <StarIcon />
                </div>
                <span>4.5</span>
            </div>
        </div>
    );
}

export default PostCardDetails;
