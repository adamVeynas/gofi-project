import { useParams } from "react-router-dom";
import postImg from "../../assets/post-img.jpg";
import postImg2 from "../../assets/post-img2.webp";
import postImg3 from "../../assets/post-img3.webp";
import postImg4 from "../../assets/post-img4.jpg";
import postImg5 from "../../assets/post-img5.webp";
import postImg6 from "../../assets/post-img6.jpeg";
import PostCardEdit from "../../components/PostCardEdit/PostCardEdit";
import PostCardDetails from "../../components/PostCardDetails/PostCardDetails";
import PostImages from "../../components/PostImages/PostImages";
import VariantsList from "../../components/VariantsList/VariantsList";
import Tags from "../../components/Tags/Tags";
import Reviews from "../../components/Reviews/Reviews";
import reviewImg from "../../assets/review-img.png";
import "./Post.scss";

const variants = [
	{
		name: "Вариант 1",
		isStock: true,
		price: 3500,
	},
	{
		name: "Вариант 2",
		isStock: true,
		price: 4500,
	},
	{
		name: "Вариант 3",
		isStock: false,
		price: 5500,
	},
	{
		name: "Вариант 4",
		isStock: true,
		price: 6500,
	},
	{
		name: "Вариант 5",
		isStock: true,
		price: 7500,
	},
	{
		name: "Вариант 6",
		isStock: true,
		price: 8500,
	},
	{
		name: "Вариант 7",
		isStock: true,
		price: 8500,
	},
	{
		name: "Вариант 8",
		isStock: true,
		price: 8500,
	},
	{
		name: "Вариант 9",
		isStock: true,
		price: 8500,
	},
];

const imgArr = [postImg, postImg2, postImg3, postImg4, postImg5, postImg6];

const tags = [
	"#Lorem",
	"#ipsum",
	"#dolor",
	"#sit",
	"#amet",
	"#consectetur",
	"#adipisicing",
	"#elit.",
	"#Dolores",
	"#ipsam",
	"#earum",
	"#perspiciatis",
	"#quasi,",
	"#tempora",
	"#esse",
	"#repudiandae",
	"#harum",
	"#sed,",
	"#aliquid",
	"#voluptatibus",
	"#qui",
	"#quos",
	"#assumenda",
	"#quod",
	"#autem",
	"#consequuntur",
	"#explicabo",
	"#nesciunt",
	"#eos",
	"#laborum",
	"#dolore",
	"#perferendis.",
];

const reviews = [
	{
		user: "Арай",
		userImg: reviewImg,
		date: new Date().toLocaleString().split(", ")[0],
		reviewTxt:
			"Особая благодарность Елизавете! Умница, отличный менеджер! Дайте ей бонус, если у Вас предусмотрено! Это очень вовлечённых со рудник! Желаю Вам процветания!",
		rating: 4,
		responses: [
		    {
		        user: "Магазин",
		        userImg: reviewImg,
		        date: new Date().toLocaleString().split(", ")[0],
		        reviewTxt: "Благодарим за отзыв!",
		    },
		],
	},
	{
		user: "Арай",
		userImg: reviewImg,
		date: new Date().toLocaleString().split(", ")[0],
		reviewTxt:
			"Особая благодарность Елизавете! Умница, отличный менеджер! Дайте ей бонус, если у Вас предусмотрено! Это очень вовлечённых со рудник! Желаю Вам процветания!",
		rating: 3,
		responses: null,
	},
	{
		user: "Aygerim",
		userImg: reviewImg,
		date: new Date().toLocaleString().split(", ")[0],
		reviewTxt:
			"Особая благодарность Елизавете! Умница, отличный менеджер! Дайте ей бонус, если у Вас предусмотрено! Это очень вовлечённых со рудник! Желаю Вам процветания!",
		rating: 2,
		responses: [
		    {
		        user: "Магазин",
		        userImg: reviewImg,
		        date: new Date().toLocaleString().split(", ")[0],
		        reviewTxt: "Благодарим за отзыв!",
		    },
		],
	},
];

function Post() {

	const { postID } = useParams();

	return (
		<div className="post-wrap">
			<div className="post-info-top">
				<div className="post-main-info">
					<PostImages imgArr={imgArr} />
					<div className="post-main-info-body">
						<PostCardEdit
							postID={postID}
							title="Шоколадный букет c ягодами"
						/>
						<VariantsList variantsList={variants} />
						<div className="post-main-info-body-bttm">
							<PostCardDetails />
						</div>
					</div>
				</div>
				<p className="post-main-descr">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<Tags tagsArr={tags} />
			</div>
			<div className="post-reviews-wrap">
				<h6 className="post-reviews-title">Отзывы</h6>

				<Reviews reviewsList={reviews} />
			</div>
		</div>
	);
}

export default Post;
