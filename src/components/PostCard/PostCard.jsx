import PostCardEdit from "../PostCardEdit/PostCardEdit";
import sliderImg from "../../assets/post-img.jpg";
import sliderImg2 from "../../assets/post-img2.webp";
import sliderImg3 from "../../assets/post-img3.webp";
import sliderImg4 from "../../assets/post-img4.jpg";
import sliderImg5 from "../../assets/post-img5.webp";
import sliderImg6 from "../../assets/post-img6.jpeg";
import PostCardSlider from "../PostCardSlider/PostCardSlider";
import PostCardDetails from "../PostCardDetails/PostCardDetails";
import { useNavigate } from "react-router-dom";
import "./PostCard.scss";

const sliderImgs = [
    {
        url: sliderImg,
    },
    {
        url: sliderImg2,
    },
    {
        url: sliderImg3,
    },
    {
        url: sliderImg4,
    },
    {
        url: sliderImg5,
    },
    {
        url: sliderImg6,
    },
];

function PostCard({ id }) {
    const navigate = useNavigate();

    return (
        <div className="post-card">
            <PostCardSlider id={id} sliderList={sliderImgs} />

            <div className="post-card-body">
                <PostCardEdit titleOnClick={() => navigate(`/posts/${id}`)} postID={id} title="Шоколадный букет c ягодами" />

                <p className="post-card-descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris
                </p>

                <div className="post-card-bttm">
                    <div
                        className="post-card-price">
                        от 5000 тг
                    </div>
                    <div className="post-card-detail-info">
                        <PostCardDetails />
                        <span className="post-card-details-instok">
                            В наличии
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
