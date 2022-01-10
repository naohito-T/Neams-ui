import { IRequestHomeAPI } from '../service';
import { RequestAPI } from './app';

/**
 * @desc RequestAPI = axiosのインスタンス定義(抽象クラス)
 * @desc IRequestHomeAPI = method の interface(実装責任を負わせる)
 * @desc 抽象クラスは多重継承ができない。
 */

export class RequestHomeAPI extends RequestAPI implements IRequestHomeAPI {
  public fetchHello = async (): Promise<string> => {
    console.log(`axios l${this.axios.defaults.baseURL}`);
    return await this.axios.get<string>('/api/v1/home/test/hello').then((r) => r.data);
  }
}
