#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
echo -e "\n== commit build =="
git init
git add -A
git commit -m 'deploy'
echo -e "== commit end ==\n"

echo "== push Github =="
git push -f git@github.com:uphg/vuepress-universal.git master:gh-pages
echo -e "== push Github end ==\n"

echo "== push Gitee =="
git push -f git@gitee.com:uphg/vuepress-universal.git master:gh-pages
echo -e "== push Gitee end ==\n"

echo "== Exit the build folder =="
cd -
