/**
 * @desc axiosのbaseを定義
 */
import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

/** Request Logger */
const writeReqLogger = (req: AxiosRequestConfig) => {
  if (process.env.NODE_ENV !== 'local') return console.log('');
  console.log({
    msg: 'Api Request.',
    url: req.url,
    method: req.method,
    headers: req.headers,
    body: req.data
  });
}

/** Response Logger */
const writeResLogger = (res: AxiosResponse) => {
  if (process.env.NODE_ENV !== 'local') return console.log('');
  console.log({
    msg: 'Api Response',
    url: res.config.url,
    method: res.request?.method,
    status: res.status,
    headers: res.headers,
    body: res.data,
  });
}

/** tokenは一緒 */


/**
 * tokenは一緒じゃない
 *
 */

/** headerにsetする */
// const setAuthorizationHeader = (config: AxiosRequestConfig, token: string) => {
//   config.headers.common.Authorization = `Bearer ${token}`
//   return config;
// };

const baseAxios = (): AxiosInstance => {
  return Axios.create({
    baseURL: process.env.API_URL,
    timeout: 1500,
  });
};

/** Tokenと一緒じゃないapi アクセス */
const apiWithoutToken = (): AxiosInstance => {
  const axios = baseAxios();
  axios.interceptors.request.use(writeReqLogger);
  axios.interceptors.response.use(writeResLogger);
  return axios;
};

/** Tokenと一緒の api アクセス */

export { apiWithoutToken };

