import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RelatedBlogList from "../list/RelatedBlogList";
import BlogContent from "./BlogContent";
import { fetchBlog } from "../../features/blog/blogSlice";
import { useParams } from "react-router-dom";

export default function BlogDescription() {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);
  const { blogId } = useParams();

  // destructure blog data
  const { id, tags } = blog;

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [blogId, dispatch]);

  return (
    <section className="post-page-container">
      <BlogContent blog={blog} />
      <RelatedBlogList tags={tags} blogId={id} />
    </section>
  );
}
