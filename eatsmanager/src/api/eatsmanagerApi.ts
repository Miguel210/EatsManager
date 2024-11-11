import axios from "axios";

const eatsmanagerApi = axios.create({
 baseURL: import.meta.env.VITE_EATSMANAGER_API_URL
});

eatsmanagerApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if( token ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { eatsmanagerApi };
