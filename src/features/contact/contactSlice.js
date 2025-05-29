import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Use the correct environment variable name as defined in .env
const API_URL = process.env.REACT_API_URL;
console.log('Using API URL:', API_URL);

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  'contact/submitContactForm',
  async (contactData, { rejectWithValue }) => {
    try {
      // Log the full API endpoint for debugging
      const endpoint = API_URL ? `${API_URL}api/contacts/` : 'http://localhost:8000/api/contacts/';
      console.log('Submitting contact to:', endpoint);
      console.log('Contact data:', contactData);
      
      // Make the direct post request with the full URL
      const response = await axios.post(endpoint, contactData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      return rejectWithValue(
        error.response?.data || { message: `Failed to submit contact form: ${error.message}` }
      );
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  contact: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactForm: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.contact = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contact = action.payload;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { message: 'Something went wrong' };
      });
  },
});

export const { resetContactForm } = contactSlice.actions;

export const selectContactState = (state) => state.contact;

export default contactSlice.reducer; 