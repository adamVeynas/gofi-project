import "./Tags.scss";

function Tags({ tagsArr = [] }) {
    return (
        <ul className="post-main-tags">
            {tagsArr.map((tag, idx) => (
                <li className="post-main-tag-item" key={idx}>
                    <a href="#" className="post-main-tag-link">
                        {tag}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Tags;
