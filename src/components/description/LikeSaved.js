import { useDispatch, useSelector } from "react-redux";
import { updateLikes, savedBlog } from "../../features/blog/blogSlice";

export default function LikeUnlike() {
  const { blog } = useSelector((state) => state.blog);
  const { id, isSaved, likes } = blog;
  const dispatch = useDispatch();

  // handle likes updates
  const handleLikesUpdate = (id, likes) => {
    dispatch(updateLikes({ id, likes }));
  };

  // handle saved
  const handleSaved = () => {
    dispatch(savedBlog(id));
  };

  return (
    <div className="btn-group">
      <button
        className="like-btn"
        id="lws-singleLinks"
        onClick={() => handleLikesUpdate(id, likes)}
      >
        <i className="fa-regular fa-thumbs-up"></i> {likes}
      </button>
      <button
        className={isSaved ? "active save-btn" : "save-btn"}
        id="lws-singleSavedBtn"
        onClick={handleSaved}
      >
        <i className="fa-regular fa-bookmark"></i> Saved
      </button>
    </div>
  );
}
