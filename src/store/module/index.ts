/**
 * @desc Storeはローディングされる時、初期化されることを忘れないように
 */
import { getModule } from 'vuex-module-decorators';
import { UserModule } from './user';
import { HomeModule } from './home';


export interface Stores {
  home: HomeModule,
  user: UserModule
}

const home = getModule(HomeModule);
const user = getModule(UserModule);

const stores: Stores = {
  home,
  user
}

export { stores };
