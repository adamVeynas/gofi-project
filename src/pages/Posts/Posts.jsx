import { useState } from "react";
import personalImg from "../../assets/personal-img.png";
import SearchIcon from "../../icons/SearchIcon";
import PostList from "../../components/PostList/PostList";
import "./Posts.scss";

function Posts() {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="posts-wrap">
            <div className="personal-img posts-img">
                <img src={personalImg} alt="personal image" />
            </div>

            <div className="posts-search">
                <div className="posts-search-inp-wrap">
                    <label
                        className="posts-search-inp-lbl"
                        htmlFor="postsSearch">
                        <SearchIcon />
                    </label>
                    <input
						value={searchValue}
                        className="posts-search-inp"
                        type="text"
                        name="postsSearch"
                        id="postsSearch"
                        placeholder="Найти пост"
                        onChange={(ev) => setSearchValue(ev.target.value)}
                    />
                </div>
            </div>

            <PostList />
        </div>
    );
}

export default Posts;
