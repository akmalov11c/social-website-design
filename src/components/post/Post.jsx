import "./post.css";
import { Users } from "../../data";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLiked] = useState(false);

  const likeHander = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLiked(!isLike);
  };
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img
              className="post__img"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="post__username">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__top-right">
            <i class="ri-more-2-line"></i>
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <button onClick={likeHander}>
              {isLike ? (
                <i class="ri-heart-fill like__icon"></i>
              ) : (
                <i class="ri-heart-line"></i>
              )}
            </button>
            <span className="post__likes">{like} likes</span>
          </div>
          <div className="post__bottom-right">
            <span className="post__comment">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
