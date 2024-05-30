import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from '../../services/contactsApi';

// fetchContacts - одержання масиву контактів (метод GET) запитом.
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await requestContacts();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// addContact - додавання нового контакту (метод POST).
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const data = await requestAddContact(contact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// deleteContact - видалення контакту по ID (метод DELETE).
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const data = await requestDeleteContact(contactId);
      return data.id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
