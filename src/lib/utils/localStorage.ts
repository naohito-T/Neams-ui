import { IToken } from '@/lib/app/types/response/user';

export class LocalStorage {
  constructor(private key: string ,private date: IToken | null) {}

  public get getToken() {
    return localStorage.getItem(this.key)
  }

  public set setToken() {
    localStorage.setItem(this.key, JSON.stringify(this.date));
  }
}
