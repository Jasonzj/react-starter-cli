# react-starter-cli

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/Jasonzj/react-starter-cli/blob/master/LICENSE)

> react初始项目生成器

集成了react开发常用技术桟
*react@v16.0.0 + redux + router4 + webpack3 + es6/es7 + sass + proxy + 组件懒加载 +热加载...

## Get Started
1. 安装yeoman
```bash
npm install -g yo
```

2. 安装react-starter-cli
```bash
npm install -g generator-jreact
```

3. 构建react项目
```bash
mkdir react-dmeo && cd react-demo
yo jreact
```


- 运行dev-server
```bash
npm run dev
```

- 打包
```bash
npm run build
```

## 项目结构
```test
.
├── public                   # 公共静态资源
├── index.html               # html模板
├── src                      # 主目录
│   ├── entry.js             # 入口js文件 
│   ├── app.scss             # 初始化样式
│   ├── App.jsx              # 根组件
│   ├── AsyncComponent.js    # 懒加载组件
│   ├── Utils                # 工具函数
│   ├── Components           # 全局可复用组件
│   ├── Containers           # 路由级别组件
│   ├── Router               # 路由管理
│   ├── ducks                # Redux管理
├── server.js                # 前端服务器
├── webpack.base.js          # webpack基本配置
├── webpack.dev.js           # webpack 开发环境 配置
├── webpack.prod.js          # webpack 生产环境 配置
└── mock                     # 静态数据           
```