# app

## version

```sh
Nuxt 2.15.8
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## フロント側のログイン判定

有効期限内である、かつVuexのユーザーが存在する場合にログインしていると判定する
フロントの実装だと、有効期限とVuexのユーザーオブジェクトを偽造された場合、フロントエンドはログイン状態となってしまうが、ユーザーが持つDBの値をRailsにリクエストする際に、正しいアクセストークンが無いとエラーになるようにしている

リロードされた後の対応
**有効期限内であれば**
Cookieのトークンを使ってRailsにリクエストを行い
ユーザーが返ってきたら→Vuexに保存する
ユーザーが返ってこなかったら→有効期限を削除し、ログイン前の状態に戻す
**有効期限外**
何もしない

## リダイレクト処理の設計

**ログイン前のユーザの場合**
ログイン後、ページにアクセスしようとするとログインページにリダイレクトする
その時のルートはVuexに保存する

**ログイン後のユーザーの場合**
ログインページ、会員登録ページにアクセスするとホームにリダイレクトする
