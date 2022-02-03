/**
 * login した後のapi
 */
import { User } from '../types/response/user';

export interface IRequestUserAPI {
  login(): Promise<User>;
  logout(): Promise<void>;
  currentUser(): Promise<string>;
  // fetchToken(): Promise<string>;
}
