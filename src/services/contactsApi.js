import axios from 'axios';

// axios.instance;
const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Функция для установки токена в instance, token приходит с сервера
export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Функция для очищения токена
export const clearToten = () => {
  instance.defaults.headers.common.Authorization = '';
};

// Сервис на регистрацию, создание пользователя
export const requestSignUp = async (formData) => {
  const { data } = await instance.post('/users/signup', formData);
  setToken(data.token);
  return data;
};

// Services for sign in
export const requestSignIn = async (formData) => {
  const { data } = await instance.post('/users/login', formData);
  setToken(data.token);

  return data;
};

// Сервис на получение текущего пользователя
export const requestGetCurrentUser = async () => {
  const { data } = await instance.get('/users/current');

  return data;
};

// Сервис для выхода
export const requestLogOut = async () => {
  const { data } = await instance.post('/users/logout');

  return data;
};
