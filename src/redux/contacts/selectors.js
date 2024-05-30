import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

// Functions selectors for use in useSelector in components
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilterContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, name) => {
    const filterContacts = items.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    return filterContacts;
  }
);
