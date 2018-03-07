## Dash
Dash是离线文档管理软件，提供快速的文档查询和自动更新，并支持和许多知名编辑器/IDE集成。Dash可以简单使用App Store安装。其更多介绍请参考[Dash：程序员的的好帮手](http://scriptfans.iteye.com/blog/1543219) 。

## Alfred
Alfred是比macOS自带的Spotlight更强大的集成执行器，提供快速打开应用，搜索文件、内容、联系人、文件夹，Web搜索与网址直达，系统命令，剪贴板历史与小片段等功能。支持基于workflow的几乎无限的扩展可能。Alfred通过官网下载安装即可，视个人需要考虑购买power pack。Alfred的更多介绍请参考[神兵利器——Alfred](http://www.cnblogs.com/chijianqiang/p/alfred.html)。

## Sublime Text安装
* 运行`brew cask install sublime`安装。
* 安装[Package Control](https://packagecontrol.io/installation)。
* 使用Package Control[安装所需插件](https://packagecontrol.io/docs/usage)。

## Sketch安装
* 安装[破解版Sketch](http://xclient.info/s/sketch.html)。
* 运行`brew cask install sketch-toolbox`安装Sketch插件管理器。
* 运行sketch-toolbox，搜索安装Marketch。

## autojump
autojump是一个命令行工具，它可以使用快捷命令，直接跳转到配置好的目录，而不用管现在身在何处，依赖zsh。
* 运行`brew install autojump`安装
* 在.zshrc文件找到`plugins=`,在后面添加autojump:`plugins=(git autojump)`
* 新开一行添加:`[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh`
* 保存并重启终端