import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/app/appSlice';
import contactReducer from '../features/contact/contactSlice';
import itineraryReducer from '../features/itinerary/itinerarySlice';
import blogReducer from '../features/blog/blogSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    contact: contactReducer,
    itinerary: itineraryReducer,
    blog: blogReducer,
  },
});
