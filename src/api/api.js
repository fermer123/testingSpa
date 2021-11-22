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
  follow(UserId) {
    return instance.post(`follow/${UserId}`);
  },
  unfollow(UserId) {
    return instance.delete(
      //delete и get принимает только два параметра, POST принимает 3 параметра
      `/follow/${UserId}`,
    );
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
    //вторым параметром в гет передается обьект с настройками
    // withCredentials содержит настройки запроса.Благодаря этому запрос уйдет авторизованым на сервер.
  },
};
