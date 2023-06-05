# 认识webpack
webpack 是一个用于对 JavaScript 进行模块化打包的工具，可将其看作是模块打包机（module bundler）。通过 Loader 转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。webpack 专注于构建模块化项目。
# webpack工作原理
1，首先，webpack 根据其配置文件（该文件中的具体配置，就是我们今后学习的重点内容），找到项目中的某个指定文件（一般这个文件都会是一个 JS 文件）作为入口。
2，然后，通过该入口文件代码中出现的 import（ES Modules）或者是 require（CommonJS）之类的语句，解析推断出来这个文件所依赖的资源模块，再分别去解析每个资源模块的依赖关系，周而复始，最后形成整个项目中所有用到的文件之间的依赖关系树。
3，最后，将这些相互依赖的文件，分别以合理的粒度，打包为合适的格式，以供浏览器使用。
# webpack 在前端工程化中的作用
将 sass/less 等预编译的 CSS 语言转换成浏览器识别的 CSS 文件。
能够将多个预编译文件打包成一个文件。
打包 image、styles、assets、scrips 等前端常用的文件。
搭建开发环境开启服务器。
监视文件改动，热部署。
将单文件组件（*.vue、*.jsx）类型的文件，转化成浏览器识别的内容。
# webpack 的优缺点：
webpack 的优点是：
专注于处理模块化的项目，能做到开箱即用一步到位；
通过 Plugin 扩展，完整好用又不失灵活；
使用场景不仅限于 Web 开发；
社区庞大活跃，经常引入紧跟时代发展的新特性，能为大多数场景找到已有的开源扩展；
良好的开发体验。
其缺点是只能在模块化开发的项目中使用，且开发服务启动和热更新速度耗时较大。

# 全局安装webpack 和webpack-cli
npm install -g webpack webpack-cli
-g 全局安装
-d 局部安装
# 安装指定版本
npm install webpack@版本号
# 卸载
npm uninstall 卸载的包名
# webpack 5 新特性
用持久性缓存来提高构建性能：默认开启缓存,可以对 cache 进行设置。
用更好的算法和默认值来改进长期缓存：采用新算法，且在生产模式下默认启用 chunkIds:"deterministic" 和 moduleIds:"deterministic" 功能。
用更好的 Tree Shaking 和代码生成来改善包大小：开启 tree-shaking 的条件跟 webpack 4 一样（必须使用 ES6 模块化，开启 production 模式）。
Node.js 的 polyfill 脚本被移除： webpack 4 中附带了许多 Node.js 核心模块的 polyfill，一旦模块中使用了任何核心模块（即 “crupto” 模块），这些模块就会被自动启用。
改善与网络平台的兼容性：支持生成 ES6 的代码，在 webpack 中默认编译生成的代码对应的是 ES5 版本。
分割 Chunk 和模块的大小：模块能够以更好的方式表示大小，而不是显示单个数字和不同类型的大小。

# 使用webpack打包文件
命令 webpack 要打包的文件路径 --output-filename 打包生成的文件名 --output-path 打包生成文件的存放路径

 (--output-filename 打包生成的文件名)这部分文件名如果不写，默认叫main.js

# 在项目中配置文件指令打包
在package.json文件中scripts中，把打包命令做配置
{
  "scripts": {
//  打包指令名字 : 打包命令语句
    "build": "webpack ./src/index.js --output-filename demo.bundle.js --output-path ./dist"
  },
}
在控制台运行  npm run build即可

# 配置webpack配置文件
webpack 中涉及到的核心概念包含以下几点：

- entry（入口）：webpack 构建的第一步从 entry 开始。
- module（模块）：webpack 将一切视为模块，一个模块对应一个文件，webpack 会从配置的 entry 开始递归找出所有互相依赖的模块，然后进行处理。
- chunk（代码块）：一个 chunk 由多个模块组合而成，用于代码合并与分割。
- loader（模块转化器）：用于把模块原内容按照需求转换成新内容，例如：将非 JavaScript 文件转换成 webpack 识别的 JavaScript 文件。
- plugin（拓展插件）：在 webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做指定的事情。
- output（输出）：webpack 经过一系列处理并得出最终想要代码后输出结果。
- mode（模式）：开发模式和生产模式相互切换，告知 webpack 使用哪种模式的内置优化。
- devServer（开发服务器）：用于开发环境的服务器，提供 HTTP 服务，监听文件变化便于浏览器实时预览（热更新），支持 source map，方便调试。

创建 webpack.config.js
内容写入
 ```
//引入path模块，nodejs中的系统模块
const path = require("path");

//引入 exports 模块
module.exports = {
  //入口
  entry: "./src/index.js",
  //出口
  output: {
    path: path.resolve(__dirname, "dist"), //__dirname是nodejs系统模块，用于表示当前文件的绝对路径
    filename: "demo.bundle.js", //出口文件
  },
};
 ```
 在package.json 中配置
 {
  "scripts": {
    "build": "webpack"
    //如果webpack配置文件名字不是webpack.config.js
    "build"："webpack --config xx.config.js"
  },
}

# mode配置
mode 是设置打包模式
有两个模式，三个值
1，development  开发模式，文件低压缩，带注释，开发的时候使用
2，production 生产模式，文件高压缩，压缩成一行，上线的时候使用；不配置默认生产模式
3，none  	不使用任何默认优化选项。
配置
module.exports={
  
mode:development,

entry:.....
output：。。
}




# loader 配置
 loader是webpack的转化器,能把不同的文件内容转化成浏览器能识别的内容
 怎么使用
 需要在webpack.config.js文件中配置
 module:{
  rules:[
    {
      test:要转化的文件 eg: /\.css$/; 转化以.css结尾的文件，
      use:["用什么转化器进行转化"]
    }
  ]
 }
配置转化css 需要用到的转化器
css-loader	读取 CSS 文件中的样式，并将其转换CommonJS 模块供 webpack 识别。
style-loader	动态生成一个 style 标签，将 css-loader 转化后的内容插入其中供浏览器识别。
步骤
1，，下载所需要用到的转换器
npm install -d css-loader style-loader
2, 配置转化规则
module:{
  rules:[
    { // 转换css文件
      test:/\.css$/,
      use:["style-loader","css-loader"]
    },
    {// 转换less文件
      test:/\.less$/,
      use:["less-loader","style-loader","css-loader"]
    },
    {// 转换sass文件
      test:/\.scss$/,
      use:["sass-loader","style-loader","css-loader"]
    },
    {// 转换stylus文件
       test:/\.styl$/,
      use:["stylus-loader","style-loader","css-loader"]
    }
  ]
}

 