import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
};

export const filtersSlice = createSlice({
  // Name slice
  name: 'filters',
  // Starter state reducer
  initialState: INITIAL_STATE,
  // Object reducers
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Generators Action Creator
export const { changeFilter } = filtersSlice.actions;

// Reducer slice
export const filtersReducer = filtersSlice.reducer;
