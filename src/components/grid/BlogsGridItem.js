import React from "react";
import { Link } from "react-router-dom";

export default function BlogsGridItem({ blog }) {
  const { id, image, title, createdAt, likes, isSaved, tags } = blog;

  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.map((tag, index) => (
            <span key={index}>{`#${tag},`}</span>
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          {isSaved && <span className="lws-badge"> Saved </span>}
        </div>
      </div>
    </div>
  );
}
