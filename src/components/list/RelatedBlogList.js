import { useEffect } from "react";
import RelatedBlogListItem from "./RelatedBlogListItem";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../ui/Loading";

export default function RelatedBlogList({ tags, blogId }) {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: blogId }));
  }, [blogId, dispatch, tags]);

  // decide whether to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No related blogs found!</div>;
  }

  if (!isError && !isLoading && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlogListItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
}
