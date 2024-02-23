import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sortsBlogs } from "../../features/blogs/blogsSlice";
import { fetchBlogs } from "../../features/blogs/blogsSlice";

export default function Aside() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("all");

  useEffect(() => {
    dispatch(fetchBlogs(status));
  }, [dispatch, status]);

  // handler sort val
  const sortHandler = (e) => {
    dispatch(sortsBlogs(e.target.value));
  };

  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            onChange={sortHandler}
          >
            <option value="">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                className="radio"
                value="all"
                defaultChecked
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                className="radio"
                value="saved"
                onChange={(e) => setStatus(e.target.value)}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
