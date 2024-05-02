import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  name: '',
};

export const filtersSlice = createSlice({
  // Ім'я слайсу
  name: 'filters',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори Action Creator
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;

// функції-селектори для використання в useSelector
export const selectNameFilter = (state) => state.filters.name;
