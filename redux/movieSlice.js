import {createSlice} from '@reduxjs/toolkit';

import {
  MOVIES,
  ADVERTISEMENT,
  EVENTS,
  LIVEEVENTS,
  PREMIERMOVIES,
} from '../data/dummy-data';

const initialState = {
  moviesArr: MOVIES,
  advertisementArr: ADVERTISEMENT,
  eventsArr: EVENTS,
  liveEventsArr: LIVEEVENTS,
  premierMoviesArr: PREMIERMOVIES,
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    movies: state => {
      state.moviesArr;
    },
    advertisement: state => {
      state.advertisementArr;
    },
    events: state => {
      state.eventsArr;
    },
    liveEvents: state => {
      state.liveEventsArr;
    },
    premierMovies: state => {
      state.premierMoviesArr;
    },
  },
});

export const {movies, advertisement, events, liveEvents, premierMovies} =
  movieSlice.actions;

export default movieSlice.reducer;
