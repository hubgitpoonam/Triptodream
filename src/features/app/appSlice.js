import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [],
  selectedDestination: null,
  loading: false,
  error: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDestinations: (state, action) => {
      state.destinations = action.payload;
    },
    setSelectedDestination: (state, action) => {
      state.selectedDestination = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setDestinations, setSelectedDestination, setLoading, setError } = appSlice.actions;

// Selectors
export const selectDestinations = (state) => state.app.destinations;
export const selectSelectedDestination = (state) => state.app.selectedDestination;
export const selectLoading = (state) => state.app.loading;
export const selectError = (state) => state.app.error;

export default appSlice.reducer; 