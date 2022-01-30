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

const onFulfiled = (config: AxiosRequestConfig) => {
    config.headers.common.Authorization = `Bearer ${accessToken}`
};

const baseAxios = (): AxiosInstance => {
  return Axios.create({
    baseURL: process.env.API_URL,
    timeout: 1500,
  });
};

const apiWithoutToken = (): AxiosInstance => {
  const axios = baseAxios();
  axios.interceptors.request.use(writeReqLogger);
  axios.interceptors.response.use(writeResLogger);
  return axios;
};

export { apiWithoutToken };

