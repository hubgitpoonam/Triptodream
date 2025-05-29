import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Use the correct environment variable name as defined in .env
const API_URL = process.env.REACT_API_URL;
console.log('Using API URL for itinerary:', API_URL);

// Async thunk for submitting itinerary form
export const submitItineraryForm = createAsyncThunk(
  'itinerary/submitItineraryForm',
  async (itineraryData, { rejectWithValue }) => {
    try {
      // Log the full API endpoint for debugging
      const endpoint = API_URL ? `${API_URL}api/itineraries/` : 'http://localhost:8000/api/itineraries/';
      console.log('Submitting itinerary to:', endpoint);
      console.log('Itinerary data:', itineraryData);
      
      // Make the direct post request with the full URL
      const response = await axios.post(endpoint, itineraryData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error submitting itinerary form:', error);
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
        error.response?.data || { message: `Failed to submit itinerary form: ${error.message}` }
      );
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  itinerary: null,
};

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    resetItineraryForm: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      state.itinerary = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitItineraryForm.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitItineraryForm.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.itinerary = action.payload;
      })
      .addCase(submitItineraryForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || { message: 'Something went wrong' };
      });
  },
});

export const { resetItineraryForm } = itinerarySlice.actions;

export const selectItineraryState = (state) => state.itinerary;

export default itinerarySlice.reducer; 