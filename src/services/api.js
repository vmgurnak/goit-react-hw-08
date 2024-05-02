import axios from 'axios';

axios.defaults.baseURL = 'https://662634e5052332d5532208cc.mockapi.io';

export const requestContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const requestAddContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
