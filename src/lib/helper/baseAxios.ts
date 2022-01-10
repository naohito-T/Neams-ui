/**
 * @desc axiosのbaseを定義
 */

import Axios, { AxiosInstance } from 'axios';

const baseAxios = (): AxiosInstance => {
  return Axios.create({
    baseURL: process.env.API_URL,
    timeout: 1500,
  });
};

const apiWithoutToken = (): AxiosInstance => {
  const axios = baseAxios();
  axios.interceptors.request.use();
  axios.interceptors.response.use();
  return axios;
};

export { apiWithoutToken };

