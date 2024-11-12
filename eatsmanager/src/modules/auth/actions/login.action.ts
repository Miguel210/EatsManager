import { eatsmanagerApi } from "@/api/eatsmanager.api";
import type { AuthResponse, User } from "../interfaces";
import { isAxiosError } from "axios";


interface LoginError {
  ok: false;
  message: string;
}

interface LoginSucces {
  ok: true;
  user: User;
  token: string;
}

export const loginAction = async (
  username: string,
  password: string
): Promise<LoginError | LoginSucces> => {

  try {
    const { data } = await eatsmanagerApi.post<AuthResponse>(`/auth/login/`, {
      username,
      password
    });

    return {
      ok: true,
      user: data.user,
      token: data.token
    }

  } catch( error ) {
    if( isAxiosError( error ) && error.response?.status === 401) {
      return {
        ok: false,
        message: 'usuario o contraseña incorrecta'
      };

    }
    console.log(error);
    throw new Error(`No se pudo realizar la peticion`)

  }
}
