import { apiWithoutToken } from '../helper';
import { RequestHomeAPI, RequestUserAPI } from './request';
import { IRequestHomeAPI, IRequestUserAPI } from './service';

export interface APP {
  home: IRequestHomeAPI;
  user: IRequestUserAPI;
}

const home = new RequestHomeAPI(apiWithoutToken());
const user = new RequestUserAPI(apiWithoutToken());

export const app: APP = {
  home,
  user,
};
