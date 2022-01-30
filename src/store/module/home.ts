import { VuexModule, Module, Action } from 'vuex-module-decorators';
import { store } from './stores';
import { app } from '@/lib/app/'

/** 動的にモジュールを登録する : dynamic: true */
@Module({ store, dynamic: true, name: 'home', namespaced: true})
export class HomeModule extends VuexModule {

  /**
   * @Action({ rawError: true }): errorをthrowした場合に
   * ライブラリ内部で定義されている固定文言がErrorとしてthrowされてしますため期待したErrorが補足できない。
   * そのためtrueにしている
   */

}
