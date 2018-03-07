# Node及npm

## 安装nvm
* 根据[指南](https://github.com/lukechilds/zsh-nvm#as-an-oh-my-zsh-custom-plugin)将nvm安装成Oh My Zsh的plugin。

## 安装和维护不同版本的Node.js
* 使用nvm安装Node，前端开发和构建统一使用 Node 6.9.1版本。
* 请注意nvm维护的不同Node版本有独立的npm全局模块空间，如果在安装node版本时需要「复制安装全局模块」，参考[官网指南](https://github.com/creationix/nvm#migrating-global-packages-while-installing)。

## 使用npm镜像
* 安装[nrm](https://github.com/Pana/nrm)。
* 按需切换npm仓库镜像。
* 如有必要，安装[cnpm](https://github.com/cnpm/cnpm)并在某些场合下用其代替`npm`命令。

## 安装Yarn
* Yarn不是必须安装的，但其基于npm提供更优化的并行下载及缓存管理，版本一致性等。推荐使用。
* 注意Yarn与上述nvm及nrm均可以无痛结合使用。
* [安装Yarn](https://yarnpkg.com/lang/en/docs/install/)。