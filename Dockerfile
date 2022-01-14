# alpineベースのnodeイメージには最初からyarnがインストールされている
FROM node:16.13.1-alpine

# ARGはdocker-composeの変数から取得する。
ARG WORKDIR
ARG CONTAINER_PORT
ARG API_URL
ARG LANG
ARG TZ
ARG FRONT_HOST
# C.UTF-8のCとは、コンピューター用のen_US（英語）を意味する
# ja_JP.UTF-8は、理由がない限り使わない方が良い
# WORKDIRは$API_WORK_DIRを参照している。
ENV HOME=/${WORKDIR} \
  HOST=${FRONT_HOST} \
  API_URL=${API_URL} \
  LANG=${LANG} \
  TZ=${TZ}

# Dockerfileで定義した命令を実行するコンテナ内の作業ディレクトリパス
WORKDIR ${HOME}

# yarn.lockがないとインストール時点によってパッケージのバージョンが違くなることがある
COPY package.json yarn.lock ./

RUN yarn install
# ファイル一式をコンテナにすべてコピー
COPY . ./

RUN yarn build
# コンテナのportを公開する。
EXPOSE ${CONTAINER_PORT}
