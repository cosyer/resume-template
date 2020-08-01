/**
 *@des 简历内容
 *@author cosyer 535509852@qq.com
 *@blog https://mydearest.cn
 *@date 2018/10/9 上午9:22
 */
const config = {
  /**
   * HTML页面的title
   * @param {[String]}
   */
  docName: "简历 | 陈宇",
  /**
   * 此处是针对SEO优化
   * 会在搜索引擎的摘要界面显示。
   * 默认值为: 张xx(小张)的个人简历 - 搬砖工程师
   * 即默认会展示你的姓名，昵称，职位字段
   */
  description: "陈宇（cosyer）的个人简历 - 前端工程师",
  /**
   * 生成PDF的默认文件名
   * 若不指定，默认为HTML页面的title去除空格后的结果
   * 此功能仅会在点击右下角打印按钮后触发
   */
  printName: "陈宇-前端",
  /**
   * 脚标栏
   * 网页显示的时候 将会显示在页面下方（非页面上）
   * 打印时会显示在页面最下面
   * 若为空，则不显示
   * 建议每边不超过15字
   * @param {[String]} 需要显示的内容
   */
  footer: {
    left:
      '<a href="https://github.com/cosyer/resume-template" target="_blank">简历作品链接：https://github.com/cosyer/resume-template</a>',
    right:
      '<a href="http://chenyu.mydearest.cn" target="_blank">网页版简历：http://chenyu.mydearest.cn</a>'
  },
  /**
   * 顶部栏
   * 用法和footer一样
   * 不同的是，顶部栏不会出现在打印页面以及pad和手机端
   */
  title: {
    left: "最后更新时间：2020年07月26日",
    right: '<a href="https://mydearest.cn" target="_blank">个人博客 链接</a>'
  },
  /**
   * 顶部栏的配置参数
   */
  header: {
    // 姓名
    name: "陈宇",
    // 昵称
    // 会显示在姓名的右方
    // 在pad和手机上不会显示
    nickName: "cosyer",
    // 意向的工作
    // 建议不超过8个字
    job: "前端开发工程师",
    /**
     * 简介栏
     * 最多可以有三个
     * 字体大小依次是18, 17, 16
     * 建议区分各种信息的层级
     * 建议字数不超过15字
     */
    profiles: [
      "男 / 2017届毕业生",
      "重庆邮电大学移通学院 · 本科 · 电子信息科学与技术",
      "四年前端学习经验 / 工作经验三年"
    ],
    /**
     * 信息栏
     * @param {[Object]} 需要显示的信息
     * 最多可显示4条
     * 在pad和手机上只会显示logo
     * address： 渲染出来的文本信息
     * 注意：请勿添加协议名，若添加，将会导致链接出错
     * type（可选）：icon的名称
     * icon目前有以下几种： tel, blog, github, email, qq, wechat
     */
    contacts: [
      { address: "18883269663", type: "tel" },
      { address: "535509852@qq.com", type: "email" },
      { address: "https://mydearest.cn", type: "blog" },
      { address: "https://github.com/cosyer", type: "github" }
    ],
    /**
     * @param {[Boolean]} 是否显示微信二维码
     * 二维码在pad和手机端不会显示
     * 如果为true，将自动加载 项目根目录/src/static/wechat.png 这个路径的图片
     * 注意是png格式，长宽比应为1:1
     */
    weChatQrCode: true,
    /**
     * 是否在HTML文档页面显示二维码
     */
    showWeChatQrCodeInHTML: true
  },

  /**
   * 正文部分
   * 说明：本模版采用两栏式显示
   * 分别呢 sectionLeft 和 sectionRight
   * 两栏的东西不会合并显示
   * 如果你想只显示一栏，请删除sectionRight字段，会自动变为sectionLeft的单行显示
   * 请自己判断并适应页面尺寸
   */
  sectionLeft: [
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: "专业技能",
      content: [
        {
          left:
            "熟练使用<em> HTML5+CSS3 </em>进行页面样式布局，具备扎实的<em> javascript </em>基础；",
          right: "",
          showDot: true
        },
        {
          left:
            "熟练使用<em>React+AntDesign</em>，<em>Vue+ElementUI</em>，<em>Angular</em>等框架开发中后台业务系统；",
          right: "",
          showDot: true
        },
        {
          left:
            "熟悉<em> ES6 </em>新特性，了解<em> TypeScript </em>以及运用<em> Node.js（Express、Koa2）</em>搭建后台服务；",
          right: "",
          showDot: true
        },
        {
          left:
            "了解<em> Java </em>语言以及<em>MySQL</em>、<em>MongoDB</em>等数据库，运用<em> spring-boot </em>框架开发后台接口；",
          right: "",
          showDot: true
        },
        {
          left:
            "熟悉使用<em> Git </em>进行版本控制和代码托管、<em>Markdown</em>进行文档编写；",
          right: "",
          showDot: true
        },
        {
          left:
            "熟悉前后端分离的开发模式，<em>Webpack</em>等项目构建管理开发工具",
          right: "",
          showDot: true
        },
        {
          left:
            "了解常用的<em> Linux </em>命令，熟悉项目常规开发流程、开发调试技巧、发布部署步骤；",
          right: "",
          showDot: true
        },
        {
          left:
            "能够科学上网，独立解决问题。遵守开发规范，有良好的文档阅读能力和代码编写习惯。",
          right: "",
          showDot: true
        }
      ]
    },
    {
      title: "个人作品",
      content: [
        {
          left: "blog - cosyer's 博客",
          right:
            '<a href="https://mydearest.cn" target="_blank">Link</a> ' +
            '<a href="https://github.com/cosyer/blog" target="_blank">Source</a> ',
          showDot: false,
          blod: true
        },
        {
          left:
            "自2018年6月起，使用 <em>hexo + next</em> 搭建个人博客，对主题进行了样式优化和个人定制，并部署在云服务器上为其解析域名配置Nginx服务器等。秉持着<em>有输入就要有输出</em>的观点，在此写写博客或者收藏一些干货。",
          right: "",
          showDot: true
        },
        {
          left: "iview-book-admin - 图书管理系统",
          right:
            '<a href="http://book.mydearest.cn/public/web/index.html" target="_blank">Link</a> ' +
            '<a href="https://github.com/cosyer/iview-book-admin" target="_blank">Source</a>',
          showDot: false,
          blod: true
        },
        {
          left:
            "该项目基于<em>iview-admin</em>与Vue全家桶开发的项目，后台接口采用了<em>eggjs+mongodb</em>，实现了读者管理、图书管理、借阅管理等功能。" +
            "为了方便对项目组采购的图书进行管理以及借阅记录的查看，基于iview-admin模板进行二次开发，高效地完成了图书管理需求，获得了组内的一致好评。",
          right: "",
          showDot: true
        },
        {
          left: "其它作品",
          right: "",
          showDot: false,
          blod: true
        },
        {
          left:
            '<a href="https://github.com/cosyer/nodeFileUploadDemo" target="_blank">Node 实现大文件分片上传、断点续传</a> ' +
            "在日常开发中遇到大文件上传速度缓慢，容易断开连接的问题，于是便有了这个Demo，学习了文件的分片上传，断点续传的流程。",
          right: "",
          showDot: true
        },
        {
          left:
            '<a href="http://dir.mydearest.cn/motion/" target="_blank">基于 antd motion 开发的个人网站</a> ' +
            "它是我第一个独立完成的前后端分离的个人项目，基于<em> react + dva + antd </em>实现了内容展示、权限管理、文件上传等功能。",
          right: "",
          showDot: true
        },
        {
          left:
            '<a href="http://dir.mydearest.cn/vue-answer/#/" target="_blank">问答项目</a> ' +
            "为了学习<em> vue + vuex </em>状态存储的练手项目，实现了倒计时答题，排行榜等功能。",
          right: "",
          showDot: true
        }
      ]
    }
  ],

  /**
   * 若想仅显示单行，请删除此属性
   */
  sectionRight: [
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: "实践经历",
      content: [
        /**
         * 文章正文部分
         * left, right: 需要显示的文字，支持 b, i, a 等一切html标签，请自由配置
         * 同时提供以下几种样式配置方法
         * showDot：是否展示该段文字左边的小点。如果显示的话，这段文字将会往右缩进一丢丢
         * blod: 该段文字是否加粗。注意，加粗后会有一点点上边距（一般情况下blod的行用于小标题）
         * 由于HTML的解析特性，如果想同时显示多个空格，请使用&nbsp
         */
        {
          left:
            "<a href='https://www.fujitsu.com/cn/group/fnst/' target='_blank'>南京富士通南大软件技术有限公司</a> · 前端开发",
          right: "2018.09-至今",
          showDot: false,
          blod: true
        },
        {
          left: `<strong>负责社内私有云项目需求研发、UI 改善、公共组件封装、项目性能优化、前端人员技术面试；</strong>`,
          right: "",
          showDot: true
        },
        {
          left: `<strong>外派参与华为云 DDS(文档型数据库)和多模 Nosql 数据库 Geminidb 控制台项目的开发工作。</strong>`,
          right: "",
          showDot: true
        },
        {
          left:
            "<a href='https://www.qianmi.com/' target='_blank'>江苏千米网络科技股份有限公司</a> · 前端开发",
          right: "2017.08-2018.8",
          showDot: false,
          blod: true
        },
        {
          left: `<strong>负责 e 家政 PC 端管理系统和家政加 APP 的前端开发工作，以及上线后功能的迭代与优化；</strong>`,
          right: "",
          showDot: true
        },
        {
          left: `<strong>参与 c 端小程序和公众号 H5 页面的维护和开发。</strong>`,
          right: "",
          showDot: true
        },
        {
          left:
            "<a href='http://www.aminfo.com.cn/' target='_blank'>重庆新媒农信科技有限公司</a> · java web开发",
          right: "2016.06-2017.7",
          showDot: false,
          blod: true
        },
        {
          left: `<strong>负责公司官网页面的重构和维护；</strong>`,
          right: "",
          showDot: true
        },
        {
          left: `<strong>搭建项目架构，前后台分离开发。编写后台接口填补页面交互逻辑；</strong>`,
          right: "",
          showDot: true
        },
        {
          left: `<strong>学习开发基础知识和规范的项目流程，实现从新人到IT入门的转变。</strong>`,
          right: "",
          showDot: true
        }
      ]
    },
    {
      title: "项目经验",
      content: [
        /**
         * 文章正文部分
         * article：需要显示的文字，支持 b, i, a 等一切html标签，请自由配置
         * 同时提供以下几种样式配置方法
         * showDot：是否展示该段文字左边的小点。如果显示的话，这段文字将会往右缩进一丢丢
         * blod: 该段文字是否加粗。注意，加粗后会有一点点上边距（一般情况下blod的行用于小标题）
         * 由于HTML的解析特性，如果想同时显示多个空格，请使用&nbsp
         */
        {
          left: "社内私有云 FOne HCI 超融合 · React 全家桶 + patternfly-react",
          right: "",
          showDot: false,
          blod: true
        },
        {
          left: `参与回收站、备份、项目组架构、配额等业务需求的开发；`,
          right: "",
          showDot: true
        },
        {
          left: `搭建 mock server 平台并在团队中推广，提高前后端工作效率；`,
          right: "",
          showDot: true
        },
        {
          left: `多次参与项目内技术分享活动，与团队共同学习成长。`,
          right: "",
          showDot: true
        },
        {
          left: "华为云文档数据库 DDS 控制台 · Angular7 + TinyUI",
          right:
            '<a href="https://console.huaweicloud.com/dds/" target="_blank">Link</a>',
          showDot: false,
          blod: true
        },
        {
          left: "参与 DDS 功能需求的开发，官网价格计算器的版本迭代和上线；",
          right: "",
          showDot: true
        },
        {
          left:
            "基于 ng7 搭建了 Geminidb(多模 NoSQL 数据库)项目结构并完成了 70%业务代码的开发；",
          right: "",
          showDot: true
        },
        {
          left:
            "输出国际化词条转换 excel 工具(重复词检测、excel 解析和生成)，提高了团队的工作效率；",
          right: "",
          showDot: true
        },
        {
          left:
            "基于 Selenium 等工具编写测试代码协助持续集成与自动化测试，保证代码的可靠和安全；",
          right: "",
          showDot: true
        },
        {
          left: "封装 axios，对请求头统一拦截处理，减少重复代码，方便调用。",
          right: "",
          showDot: true
        },
        {
          left: "家政加 · React-Native + Redux",
          right: "",
          showDot: false,
          blod: true
        },
        {
          left:
            "参与 React-Native 构建开发原生 app，封装提取公共组件、处理跨平台兼容性问题；",
          right: "<a href='http://jzj.bm001.com/' target='_blank'>Link</a>",
          showDot: true
        },
        {
          left: "负责家政加阿姨管理，组织架构、优惠券促销等功能需求开发；",
          right: "",
          showDot: true
        },
        {
          left:
            "开发注册有礼和准点秒杀活动相关页面，并输出通用参数配置，方便运营人员修改。",
          right: "",
          showDot: true
        },
        {
          left: "PC 端 e 家政管理系统 · React 全家桶 + iflux + AntDesign",
          right: "<a href='http://jz.bm001.com/' target='_blank'>Link</a>",
          showDot: false,
          blod: true
        },
        {
          left:
            "担任 e 家政 PC 端管理系统的前端开发工作，重视组件封装与模块复用。使用 React 技术栈，利用 Echarts 渲染仪表盘/图表功能，封装 Handsontable 完成工作表、电子表格功能；",
          right: "",
          showDot: true
        }
      ]
    }
    // {
    //   title: '奖项证书',
    //   content: [
    //     // {
    //     //   left: '奖项',
    //     //   right: '',
    //     //   showDot: false,
    //     //   blod: true,
    //     // },
    //     {
    //       left: '2018.5 &nbsp -&nbsp 蓝桥杯全国决赛C/C++ B组 · 优秀奖',
    //       right: '国家级',
    //       showDot: true,
    //       blod: false
    //     },
    //     {
    //       left: '2017.10 &nbsp-&nbsp 重庆邮电大学ACM校赛 · 二等奖',
    //       right: '校级',
    //       showDot: true,
    //       blod: false
    //     },
    //     {
    //       left: '重庆邮电大学单项奖学金 · 获得一次',
    //       right: '校级',
    //       showDot: true,
    //       blod: false
    //     },
    //     {
    //       left: '国家软件著作权证书',
    //       right: '一份',
    //       showDot: true,
    //       blod: false
    //     }
    //   ]
    // }
  ],
  /**
   * 设定 Github Logo 地址
   * 若为空，则不显示
   * 此logo会在页面大小大于1440px时显示
   */
  githubLogoLocation: "https://github.com/cosyer/resume-template",

  showAboutInfo: true
};

export default config;
