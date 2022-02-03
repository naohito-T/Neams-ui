import crypto from 'crypto-js'
import { IToken } from '@/lib/app/types/response/user';

// 使い方想定
// const storage = window.localStorage
// const keys = { exp: 'exp' }

export class LocalStorage {
  constructor(private localStorage: Storage, private key: string) {}

  /** exp * 1000 : 有効期限を1000ミリ秒に変換する */
  public setExpired(exp: number) {
    this.localStorage.setItem(this.key, this.encrypt(exp));
  }

  public get getExpire() {
    const expire = this.localStorage.getItem(this.key)
    return expire ? this.decrypt(expire) : null;
  }

  /** Vuexのユーザーを返す。storeから探す */
  get user () {

  }

  /** userが */
  isUserPresent () {
    return ('id' in this.user);
  }

  public removeStorage(key: string) {
    localStorage.removeItem(key)
  }

  isAuthenticated() {
    return new Date().getTime() < this.getExpire();
  }

  /** try文でよべ */
  public encrypt(exp: number) {
    if (!process.env.CRYPTO_KEY) throw new Error('not CRYPTO KEY');
    // 数字は暗号化時にエラーとなるため文字列に変換する
    const expire = String(exp * 1000);
    return crypto.AES.encrypt(expire, process.env.CRYPTO_KEY).toString();
  }

  public decrypt (exp: number) {
    if (!process.env.CRYPTO_KEY) throw new Error('not CRYPTO KEY');
    const bytes = crypto.AES.decrypt(exp, process.env.CRYPTO_KEY)
    return bytes.toString(crypto.enc.Utf8) ?? this.removeStorage();
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

  /** 有効期限内、かつユーザが存在する場合にtrueを返す */
  get loggedIn () {
    return this.isAuthenticated && this.isUser
  }
}
