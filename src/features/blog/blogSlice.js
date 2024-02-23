import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getBlog from "./blogApi";
import updateLike from "./likesApi";
import updateSave from "./savedApi";

// initialState
const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

// create async function
export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

// likes update
export const updateLikes = createAsyncThunk(
  "blog/updateLike",
  async ({ id, likes }) => {
    const like = await updateLike(id, likes);
    return like;
  }
);
// saved blog
export const savedBlog = createAsyncThunk(
  "blog/updateSavedBlog",
  async (id) => {
    const blog = await updateSave(id);
    return blog;
  }
);

// create Slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.massage;
      })
      .addCase(updateLikes.fulfilled, (state, action) => {
        state.blog.likes = action.payload.likes;
      })
      .addCase(savedBlog.fulfilled, (state, action) => {
        state.blog.isSaved = action.payload.isSaved;
      });
  },
});

export default blogSlice.reducer;
