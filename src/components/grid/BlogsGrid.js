import { useSelector } from "react-redux";
import BlogsGridItem from "./BlogsGridItem";
import Loading from "../ui/Loading";

export default function BlogsGrid() {
  const { sort_blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  // decide whether to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && sort_blogs?.length === 0) {
    content = <div className="col-span-12">No sort_blogs found!</div>;
  }

  if (!isError && !isLoading && sort_blogs?.length > 0) {
    content = sort_blogs.map((blog) => (
      <BlogsGridItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
}
