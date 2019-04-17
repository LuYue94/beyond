## repository

版本库
.git - 暂存区 Stage git add - 分支 Master (HEAD) git commit

## 配置信息

git config --list

//配置用户名和邮箱（在某个特定的项目中）
$ git config user.name [username]
$ git config user.email [email]

## 全局

git config --global user.email "xxx@xxmail.com"
git config --global user.name "xxx"
git config --global credential.helper store   # git push的时候记住用户名和密码
git config --global push.default simple       #从Git 2.0之后，push.default的默认值由'matching'改为'simple'

## 查看提交日志

提交历史
git log
git log --pretty=oneline

回退版本
git reset --hard HEAD^
git reset --hard "commit_id"

重返
git reflog

git diff #是工作区(work dict)和暂存区(stage)的比较
git diff --cached #是暂存区(stage)和分支(master)的比较

撤销修改
git checkout -- file

删除文件
git rm

## 分支

创建分支
git checkout -b dev
git branch dev
git checkout dev

git checkout master
合并 dev 到 master
git merge dev
