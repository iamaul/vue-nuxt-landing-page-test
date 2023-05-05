import { defineStore } from 'pinia';

export const useOauthStore = defineStore('oauth', {
  state: () => ({
    login: false,
  }),
  getters: {
    getLogin(state) {
      if (state.login === false || state.login === null) {
        const isLogin = localStorage.getItem('login');
        if (isLogin === 'true') {
          return true;
        } else {
          return false;
        }
      }
      return state.login;
    },
  },
  actions: {
    async loadLogin({ user, pass }) {
      // const response = await addOn.http.post(
      //   addOn.createOptionsData(
      //     END_POINT_LOGIN,
      //     helper.createOdooLogin(addOn.DB, user, pass)
      //   )
      // );
      // if (response.data.result) {
      //   this.setLogin(response.data.result);
      //   return true;
      // } else if (response.data.error) {
      //   return addOn.handleError(response.data.error);
      // } else {
      //   return addOn.parseFailResponse('Oops terjadi kesalahan', false);
      // }
    },
    setLogin() {
      this.login = true;
      localStorage.setItem('login', true);
    },
    clearUser() {
      this.login = false;
      localStorage.clear();
    },
  },
});
