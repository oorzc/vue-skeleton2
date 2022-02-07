#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "打包文件"
# 生成静态文件
yarn run build

git add .
git commit -m 'up'

#版本号增加
npm version patch

echo "ok"
