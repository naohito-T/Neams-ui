import { AxiosInstance } from 'axios';

/**
 * 本当はこれ
 * protected axios: AxiosInstance;
 *   constructor(axios: AxiosInstance) {
 *   this.axios = axios;
 * }
 */

export abstract class RequestAPI {
  constructor(protected axios: AxiosInstance) {}
}
