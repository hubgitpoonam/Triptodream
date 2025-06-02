import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:8000/api/blog-posts/';

// Async thunk to fetch all blog posts
export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPosts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch a single blog post
export const fetchBlogPost = createAsyncThunk(
  'blog/fetchBlogPost',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}${id}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  blogPosts: [],
  currentBlogPost: null,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Blog slice
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    clearCurrentBlogPost: (state) => {
      state.currentBlogPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchBlogPosts
      .addCase(fetchBlogPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogPosts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch blog posts';
      })
      // Handle fetchBlogPost
      .addCase(fetchBlogPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentBlogPost = action.payload;
      })
      .addCase(fetchBlogPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch blog post';
      });
  },
});

// Export actions and reducer
export const { clearCurrentBlogPost } = blogSlice.actions;
export default blogSlice.reducer; 