import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PostCardEdit.scss";

function PostCardEdit({ title, postID, titleOnClick = () => {} }) {
    
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const navigate = useNavigate()

	const editPost = () => {
		navigate(`/posts/${postID}/editpost`)
	}

    return (
        <div className="post-card-top">
            <h6 className="post-card-title" onClick={titleOnClick} >{title}</h6>
            <div className="post-card-edit">
                <div
                    className="post-card-edit-dots"
                    onClick={() => setModalIsOpen(!modalIsOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {modalIsOpen && (
                    <div className="post-card-edit-btns">
                        <button className="post-card-edit-btn" onClick={editPost}>
                            редактировать
                        </button>
                        <button className="post-card-edit-btn">удалить</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PostCardEdit;
