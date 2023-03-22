import {configureStore} from '@reduxjs/toolkit';

import moviesReducer from './movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    advertisement: moviesReducer,
    events: moviesReducer,
    liveEvents: moviesReducer,
    premierMovies: moviesReducer,
  },
});
