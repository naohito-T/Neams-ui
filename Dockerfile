# alpineベースのnodeイメージには最初からyarnがインストールされている
FROM node:16.13.1-alpine

# ARGはdocker-composeの変数から取得する。
ARG WORKDIR
ARG CONTAINER_PORT
ARG API_URL

# C.UTF-8のCとは、コンピューター用のen_US（英語）を意味する
# ja_JP.UTF-8は、理由がない限り使わない方が良い
# WORKDIRは$API_WORK_DIRを参照している。
ENV HOME=/${WORKDIR} \
  LANG=C.UTF-8 \
  TZ=Asia/Tokyo \
  HOST=0.0.0.0 \
  API_URL=${API_URL}

# Dockerfileで定義した命令を実行するコンテナ内の作業ディレクトリパス
WORKDIR ${HOME}

COPY package*.json ./
RUN yarn install
# ファイル一式をコンテナにすべてコピー
COPY . ./

RUN yarn build

EXPOSE ${CONTAINER_PORT}
