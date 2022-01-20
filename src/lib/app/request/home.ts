import { IRequestHomeAPI } from '../service';
import { User } from '../types/response/home';
import { RequestAPI } from './app';

/**
 * @desc RequestAPI = axiosのインスタンス定義(抽象クラス)
 * @desc IRequestHomeAPI = method の interface(実装責任を負わせる)
 * @desc 抽象クラスは多重継承ができない。
 */

export class RequestHomeAPI extends RequestAPI implements IRequestHomeAPI {
  /**
   * @desc user一覧を返す
   */
  public fetchUsers = async (): Promise<User[]> => {
    /** axioxのdefaul URL確認 */
    console.log(`axios ${this.axios.defaults.baseURL}`);
    return await this.axios.get<User[]>('/api/v1/home/users').then((r) => {
      console.log(`r.date: ${JSON.stringify(r.data)}`)
      return r.data
    });
  }
}
