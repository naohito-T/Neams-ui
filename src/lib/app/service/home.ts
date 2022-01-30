import { User } from '../types/response/home';

export interface IRequestHomeAPI {

  fetchUsers(): Promise<User[]>;

  login(): Promise<void>;

};
