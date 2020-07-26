# 简历模板

本简历模版是基于`vue/cli`，`stylus`，`pugjs`而构建的html网页简历模版。拥有以下特性：

- 一键生成PDF
- 可选插入微信二维码
- 全响应式
- 参数全在配置文件里，易于修改编辑

线上预览： [简历 | 陈宇](http://dir.mydearest.cn/resume-template)

### 使用方式

- 安装依赖

```
npm i
```

- 本地运行

```
npm run dev
```

- 进入`src`目录，修改`config.js`里的参数即可。无需修改其他。若想进行更大的修改的话，请进入`src/components`里修改代码。
- 修改完成后，使用npm命令输出打包

```
$ npm run build
```

打包文件会放在dist文件夹中。

### 目录说明

```
/resume
├── README.md
├── dist     // 生成文件目录
├── package-lock.json
├── package.json
├── public // 公共文件目录，无需操作
|  ├── favicon.ico
|  └── index.html
├── src   // 代码目录
|  ├── App.vue //vue输出文件
|  ├── components  //vue模版们
|  ├── config.js   //本简历的配置参数
|  ├── main.js  //打包入口
|  ├── static //微信二维码存放地
|  └── styles  //样式文件
└── vue.config.js   //vue-cli配置文件
```

### 借鉴来源

本简历模版借鉴了[@Cong Min](https://github.com/mcc108/resume)的部分样式。
