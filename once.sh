# 第一次关联两个仓库
echo -e "\n== init =="
git init
git add .
git commit -m "first commit"
echo -e "== init end ==\n"

echo "== remote Github =="
git remote add github git@github.com:uphg/vuepress-universal.git
echo -e "== remote Github end ==\n"

echo "== remote Gitee =="
git remote add gitee git@gitee.com:uphg/vuepress-universal.git
echo -e "== remote Gitee end ==\n"

echo "== push Github =="
git push github master
echo -e "== push Github end ==\n"

echo "== push Gitee =="
git push gitee master
echo -e "== push Gitee end ==\n"
