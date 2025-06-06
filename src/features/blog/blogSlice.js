import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for API
const API_URL = process.env.REACT_APP_API_URL;
console.log('Using API URL for blog:', API_URL);

// Helper function to construct endpoint URL
const getEndpoint = (path = '') => {
  if (!API_URL) {
    throw new Error('API URL is not configured. Please check environment variables.');
  }
  const baseUrl = API_URL.endsWith('/') ? API_URL : `${API_URL}/`;
  return `${baseUrl}api/blog-posts/${path}`;
};

// Async thunk to fetch all blog posts
export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPosts',
  async (_, { rejectWithValue }) => {
    try {
      const endpoint = getEndpoint();
      console.log('Fetching blog posts from:', endpoint);
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// Async thunk to fetch a single blog post
export const fetchBlogPost = createAsyncThunk(
  'blog/fetchBlogPost',
  async (id, { rejectWithValue }) => {
    try {
      const endpoint = getEndpoint(`${id}/`);
      console.log('Fetching blog post from:', endpoint);
      const response = await axios.get(endpoint);
      return response.data;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return rejectWithValue(error.response?.data || { message: error.message });
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