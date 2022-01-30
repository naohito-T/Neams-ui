import { IToken } from '@/lib/app/types/response/user';

// 使い方想定
// const storage = window.localStorage
// const keys = { exp: 'exp' }

export class LocalStorage {
  constructor(private localStorage: Storage, private key: string) {}

  /** exp * 1000 : 有効期限を1000ミリ秒に変換する */
  public setExpired(exp: number) {
    this.localStorage.setItem(this.key, `${exp * 1000}`);
  }

  public removeStorage(key: string) {
    localStorage.removeItem(key)
  }

  isAuthenticated() {
    return new Date().getTime() < this.getExpire();
  }

  public get getExpire() {
    return this.localStorage.getItem(this.key)
  }

  /**
   * login時
   * 有効期限をローカルストレージに保存し
   * ユーザをVuexに保存する
   */
  login({ exp, user}) {
    this.setExpired()
  }

  /**
   * logout時
   * アクセストークンの削除
   * ローカルストレージを削除
   * Vuexのユーザーをnullにする
   */
  logout() {
    // this.$axios.$delete('/api/v1/user_token')
    // this.removeStorage()
    // this.store.dispatch('getCurrentUser', null)
  }
}
