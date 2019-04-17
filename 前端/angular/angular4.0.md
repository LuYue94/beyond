# angular 4.0

## 安装`@angular/cli`

### node
`node`版本 > 6.9.0
`npm`版本 > 3.0.0
### 使用npm镜像加快访问速度
使用镜像
`npm config set registry https://registry.npm.taobao.org`

或直接安装cnpm
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
`cnpm install`

## angular cli
### 安装依赖
`npm install -g typescript`

### 安装cli
`npm install -g @angular/cli`
安装耗时特别长

### 是否安装成功
`ng version`

### 使用
```
ng serve - 启动
ng init - 在当前目录创建新的应用程序
ng new project-name - 创建新的目录，然后在新建的目录中运行 ng init 命令
ng new project-name --style scss 使用scss
```
Angular CLI 会自动调整文件名和类名的字母大小写
```
ng generate class my-new-class: 新建 class
ng generate component my-new-component: 新建组件
ng generate directive my-new-directive: 新建指令
ng generate enum my-new-enum: 新建枚举
ng generate module my-new-module: 新建模块
ng generate pipe my-new-pipe: 新建管道
ng generate service my-new-service: 新建服务
```