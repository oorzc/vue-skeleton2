#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "打包文件"
# 生成静态文件
yarn run build

echo "传输文件"
git add .
git commit -m 'up'
git pull
git push 

echo "部署成功"
