import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getBlogs from "./blogsApi";

// initialState
const initialState = {
  blogs: [],
  sort_blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create async function
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (filterStatus) => {
    const blogs = await getBlogs(filterStatus);
    return blogs;
  }
);

// create Slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    sortsBlogs: (state, action) => {
      let newSortBlogs;
      if (action.payload === "newest") {
        newSortBlogs = state.sort_blogs.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
      } else if (action.payload === "most_liked") {
        newSortBlogs = state.sort_blogs.sort((a, b) => {
          return b.likes - a.likes;
        });
      } else {
        newSortBlogs = state.blogs;
      }

      state.sort_blogs = newSortBlogs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
        state.sort_blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.massage;
      });
  },
});

const { reducer, actions } = blogsSlice;
export const { sortsBlogs } = actions;
export default reducer;
