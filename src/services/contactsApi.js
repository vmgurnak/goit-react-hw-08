import axios from 'axios';

// axios.instance;
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Utility to add JWT / Функция для установки токена в instance, token приходит с сервера
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT / Функция для очищения токена
export const clearToten = () => {
  instance.defaults.headers.common.Authorization = '';
};

// Сервис на регистрацию, создание пользователя
export const requestSignUp = async (formData) => {
  const { data } = await instance.post('/users/signup', formData);
  // установка токена
  setToken(data.token);
  return data;
};

// Services for sign in
export const requestSignIn = async (formData) => {
  const { data } = await instance.post('/users/login', formData);
  setToken(data.token);

  return data;
};

// Services for current user for Refresh
export const requestGetCurrentUser = async () => {
  const { data } = await instance.get('/users/current');

  return data;
};

// Services for log out
export const requestLogOut = async () => {
  const { data } = await instance.post('/users/logout');

  return data;
};

export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');

  return data;
};

export const requestAddContact = async (formData) => {
  const { data } = await instance.post('/contacts', formData);

  return data;
};

export const requestDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};
