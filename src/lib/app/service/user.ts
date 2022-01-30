/**
 * login した後のapi
 */
export interface IRequestUserAPI {
  fetchToken(): Promise<string>;
}
