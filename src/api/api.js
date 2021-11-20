import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true, //Авторизация
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'eda5d71c-0b14-4748-b91d-1d58038a2065' },
});

export const UsersApi = {
  getUsers(currentPage = 1, pagesize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pagesize}`)
      .then((response) => {
        return response.data;
      });
  },
  getUsers2() {
    return;
  },
};
