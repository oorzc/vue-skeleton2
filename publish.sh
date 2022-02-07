#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "打包文件"
# 生成静态文件
yarn run build

git add .
git commit -m 'up'

#把本地的npm包版本号更新到最新
npm version from-git

#版本号增加
npm version patch

#发布
npm publish

echo "ok"
