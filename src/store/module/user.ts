import { Module, Action, VuexModule, Mutation } from 'vuex-module-decorators';
import { AxiosError } from 'axios'
import { IToken } from '~/lib/app/types/response/user';
import { store } from './stores';

/**
 * コンポーネントやページから直接ウェブストレージにアクセスしていると処理やデータが散乱してしまい辛い状況に陥りやすいです。
 * そこで、ウェブストレージの参照や処理は全てストアに一本化します。
 * 各コンポーネントやページは共通のステートやアクションを参照することになりますのでデータが非常に扱いやすくなります。
 */

/**
 * @desc アノテーションはラップしているイメージ
 *       getterはクラスのget構文として作成できる(get構文には引数を渡すことができない)
 *       actions経由での更新に統一するというルールにしたがってアクセス修飾子
 * @Mutation setと同じ
 *
 */

@Module({ store, dynamic: true, name: 'user', namespaced: true })
export class UserModule extends VuexModule {
  /** 有効期限が切れている時。これはlocalStorageから取得するべきだろう。 */
  private expired_at: IToken | null = null;

  /** expired_atがnullじゃなければtrueを返す */
  public get isLoggedIn(): boolean {
    return this.expired_at !== null;
  }

  @Mutation
  private setExpiredAt(token: IToken) {
    this.expired_at;
  }

  @Action
  public async localStorageAction() {

  }

  /** expierd取得 */
  @Action({ rawError: true })
  public getExpiredAt() {

  }
}
