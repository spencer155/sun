## 安装Oh My Zsh
* 根据[官网教程](https://github.com/robbyrussell/oh-my-zsh)安装Oh My Zsh。
* 退出并重新开启`终端`应用使改动生效。

## 安装和配置Homebrew
* 根据[官网教程](http://brew.sh/index_zh-cn.html)安装Homebrew，Homebrew会自动下载安装command line tools。
* 安装完成后运行`brew doctor`确保一切就绪。

## 安装和配置Brew Cask
* 编辑`~/.zshrc`，在尾部添加一行内容。
```sh
export HOMEBREW_CASK_OPTS="--appdir=/Applications --caskroom=/usr/local/Caskroom"
```