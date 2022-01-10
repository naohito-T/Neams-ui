import { apiWithoutToken } from '../helper';
import { RequestHomeAPI } from './request';
import { IRequestHomeAPI } from './service';

export interface APP {
  home: IRequestHomeAPI;
}

const home = new RequestHomeAPI(apiWithoutToken());

export const app: APP = {
  home,
};
