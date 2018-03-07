# Git使用

## 安装Git和配置用户信息
* 运行`brew install git`安装。
* 运行如下命令配置。

```sh
git config --global user.name "姓名"
git config --global user.email "邮件地址"
```

##### 为了敲命令的时候少敲几个字，可以考虑添加Git子命令别名。

```sh
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status -s
$ git config --global alias.l "log --oneline --decorate -12"
$ git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --"
```

## 配置外部比较工具diffmerge
* 运行`brew cask install diffmerge`。
* 根据[配置文档](https://sourcegear.com/diffmerge/webhelp/sec__git__mac.html)设置。完成后`git difftool`命令和`git mergetool`命令会调用diffmerge进行差异比较/合并。

## 安装图形化Git工具SourceTree
* 本步骤可选。只使用命令行完全可以工作。
* 运行`brew cask install sourcetree`。
* 第一次运行时根据提示进行注册。

#### SourceTree
* 参考[SourceTree入门基础](http://www.jianshu.com/p/be9f0484af9d)了解基本的使用方法。

## Git入门
阅读[廖雪峰的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)以了解Git的基本原理和常用命令。

## Git的常用操作

#### 冲突解决
阅读[Git下的冲突解决](http://www.cnblogs.com/sinojelly/archive/2011/08/07/2130172.html)了解详细的操作步骤。

#### 修改上一个commit
这个操作通常用于追加一些“小改动”，但又不想再生成一个独立提交的场合。注意到该命令会修改提交历史，因此对已经`push`到远端仓库的提交不建议使用。

```sh
$ git add .
$ git commit --amend
```

#### 查看分支状态和提交历史

```sh
# 获取远端分支的最新提交
$ git fetch origin/master
# 查看各分支信息，以及本地分支与远端分支在提交历史上的差异
$ git branch -avv
# 查看当前本地分支的提交备注和改动文件
$ git log --stat
# 列出当前本地分支与远端origin/master分支的文件内容具体差异
$ git diff -w origin/master
# 显示图形化表示的分支树（其实是图）
$ git log --graph
```
其中`git diff`命令可以用`git difftool`命令替代，以唤起外部图形化diff工具来查看文件内容差异。

#### 在开发某功能的时候需要临时改一个Bug
简单来说就是使用不同本地分支分隔正在工作中的改动。

```sh
# 提交newfeature分支的改动，不用担心这些改动不完整，只是起暂存的目的
$ git add . && git commit -m "暂存改动"
# 回到本地master分支修复bug，这样newfeature的变动和修复bug的变动互不影响，当然也可以再新建一个分支
$ git checkout master
# 修复bug，提交，pull --rebase，push，中间可能有冲突需要处理
$ code modify && git add . && git commit -m "bug#XXX修复" && git pull --rebase && git push
# 回到newfeature分支继续改动
$ git checkout newfeature
```

## Git最佳实践
这里列出了一些Git使用上的注意事项。

1. 不要以任何形式__手动__修改远端分支的历史。基本上，不直接操作远端分支，不使用`git push --force`就是安全的。
2. 在`git push`前总是使用`git diff origin/master`（origin/master替换成实际推送的目标分支）查看本地分支和远端分支的内容差异，确保所有修改都是有意为之。push过程中如果进行了冲突处理/rebase，请重复这个步骤。
3. 在使用不可撤销的操作前三思。简而言之，已经commit过的改动，即使进行了`git reset`操作，还是可以通过`git reflog`找回。未commit的改动，包括工作区内容因为`git reset --hard`或`git checkout .`覆盖，只能求助于编辑器的`Undo`功能或本地历史。哦，还有Time Machine。

## Git使用参考及进阶
[Pro Git中文版](https://git-scm.com/book/zh/v2)  
[Rebase和Merge的区别](https://www.atlassian.com/git/tutorials/merging-vs-rebasing/)  
[Rebase和Merge的选择](http://www.cnblogs.com/iammatthew/archive/2011/12/06/2277383.html)  


