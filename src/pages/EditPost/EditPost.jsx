import { useRef, useState } from "react";
import postImg from "../../assets/post-img.jpg";
import InputShadow from "../../components/InputShadow/InputShadow";
import EditPostVariants from "../../components/EditPostVariants/EditPostVariants";
import "./EditPost.scss";

const post = {
    imgs: [postImg, postImg, postImg, postImg, postImg],
};

function EditPost() {
    const imgRef = useRef(null);
    const [postName, setPostName] = useState("Lorem ipsum");
    const [shortDescr, setShortdescr] = useState(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animid est laborum."
    );
    const [variants, setVariants] = useState(
        new Array(4).fill({
            name: "",
            inStock: true,
            price: "",
        })
    );
    const [hashtags, setHashtags] = useState(
        "#Lorem #ipsum #dolor #sit #amet #consectetur #adipiscing #elit #sed #do #eiusmod #tempor #incididunt #ut"
    );

    const submitHandler = (ev) => {
        ev.preventDefault();
        console.log({
            imgs: imgRef.current.files,
            name: postName,
            shortDescr: shortDescr,
            variants: variants,
            hashtags: hashtags,
        });
    };

    return (
        <div className="edit-post-wrap" onSubmit={submitHandler}>
            <form className="edit-post-form">
                <div className="edit-post-imgs-edit">
                    <div className="edit-post-imgs">
                        {post.imgs.map((img, idx) => (
                            <div className="edit-post-img" key={idx}>
                                <img src={img} alt="post image" />
                            </div>
                        ))}
                    </div>
                    <div className="edit-post-inp-wrap">
                        <label
                            className="btn-red edit-post-inp-lbl"
                            htmlFor="editPostImg">
                            Загрузить фото
                        </label>
                        <input
                            className="edit-post-inp"
                            type="file"
                            name="editPostImg"
                            id="editPostImg"
                            ref={imgRef}
                            onChange={(ev) => console.log(ev.target.files)}
                        />
                    </div>
                </div>

                <InputShadow
                    lblTxt="Название поста"
                    placeholder="Lorem ipsum"
                    id="editPostName"
                    name="editPostName"
                    wrapClass="edit-post-name"
                    value={postName}
                    onChange={(ev) => setPostName(ev.target.value)}
                />

                <div className="inp-wrap-storedescr">
                    <label className="inp-lbl-shadow" htmlFor="editStoreDescr">
                        Краткое описание
                    </label>
                    <textarea
                        className="inp-base"
                        id="editStoreDescr"
                        name="editStoreDescr"
                        minLength="0"
                        maxLength="200"
                        rows="5"
                        value={shortDescr}
                        onChange={(ev) => setShortdescr(ev.target.value)}
                    />
                </div>
                <div className="store-descr-length">
                    {shortDescr.length}/200
                </div>

                <EditPostVariants
                    variantsArr={variants}
                    setVariantsArr={setVariants}
                />

                <div className="edit-post-tags-wrap">
                    <label
                        className="inp-lbl-shadow"
                        htmlFor="editStoreHashtags">
                        Хэштеги
                    </label>
                    <textarea
                        className="inp-base"
                        id="editStoreHashtags"
                        name="editStoreHashtags"
                        rows={2}
                        value={hashtags}
                        onChange={(ev) => setHashtags(ev.target.value)}
                        wrap="soft"
                    />
                </div>

                <button type="submit" className="btn-red edit-post-submit-btn">
                    Сохранить
                </button>
            </form>
        </div>
    );
}

export default EditPost;
