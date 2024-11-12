import { defineStore } from "pinia";
import type { User } from "../interfaces";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";
import { loginAction } from "../actions";





export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | undefined>();
  const token= ref(useLocalStorage('token', ''))


  const login = async(username: string, password: string ) => {
    try {
      const loginResp = await loginAction(username, password);
      if( !loginResp.ok ) {
        logout();
        return false;
      }
      console.log(loginResp);

      user.value = loginResp.user;
      token.value = loginResp.token;

      return true;

    } catch( error ) {
      console.log( error );
      return logout();

    }
  }

  const logout = () => {
    localStorage.removeItem('token');

    user.value = undefined;
    token.value = '';
    return false;
  }


  return {
    user,
    token,

    login
  }
});
