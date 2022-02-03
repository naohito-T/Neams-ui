/**
 * @desc login後のapi
 */
import { IRequestUserAPI } from '../service'
import { User } from '../types/response/user';
import { RequestAPI } from './app';

export class RequestUserAPI extends RequestAPI implements IRequestUserAPI {
  /** expiredを取得してそれを呼び出す */
  public login = async (): Promise<User> => {
    return await this.axios
    .get<User>('/api/v1/home/login')
    .then((r) => r.data)
  };

  public logout = async (): Promise<void> => {
    await this.axios.get<void>('/api/v1/home/logout').then((_) => {
      console.log('error')
    })
  };

  /** expiredが有効期限内であれば */
  public currentUser = async (): Promise<string> => {
    return await this.axios
    .get<string>('/api/v1/users/current_user')
    .then((r) => r.data)
  }
}
