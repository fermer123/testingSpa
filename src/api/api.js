import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true, //Авторизация
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '9b3f4cf1-b449-4bcc-94e4-65bb6856dd6d' },
});

export const UsersApi = {
  getUsers(currentPage = 1, pagesize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pagesize}`)
      .then((response) => {
        return response.data;
      });
  },
};
