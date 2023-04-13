import PostCard from "../PostCard/PostCard";
import "./PostList.scss";

const posts = [1, 2, 3, 4];

function PostList() {
    return (
        <ul className="posts-list">
            {posts.map((post) => (
                <li key={post} className="posts-item">
                    <PostCard id={post} />
                </li>
            ))}
        </ul>
    );
}

export default PostList;
