import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getRelatedBlogs from "./relatedBlogsApi";

// initialState
const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

// create async function
export const fetchRelatedBlogs = createAsyncThunk(
  "relatedBlogs/fetchRelatedBlogs",
  async ({ tags, id }) => {
    const relatedVideos = await getRelatedBlogs({ tags, id });
    return relatedVideos;
  }
);

// create Slice
const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = [];
        state.isError = true;
        state.error = action.error?.massage;
      });
  },
});

export default relatedBlogsSlice.reducer;
