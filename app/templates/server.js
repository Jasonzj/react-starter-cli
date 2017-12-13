const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const base = require('./webpack.dev')
const chalk = require('chalk')
const proxy = require('http-proxy-middleware')

const { DEFAULT_PORT } = base      // 端口
const { DEFAULT_HOST } = base      // host
const { config } = base            // config

new WebpackDevServer(webpack(config), {
    hot: true,                     // 启用 webpack 的模块热替换特性
    compress: true,                // 一切服务都启用 gzip 压缩
    historyApiFallback: true,      // 当使用HTML5HistoryAPI时,任意的404响应都可能需要被替代为index.html
    watchOptions: {                // 监听选项
        ignored: /node_modules/,   // 排除监听 node_modules
    },
    stats: {                       // 控制包显示的内容
        modules: false,            // 增加内置的模块信息
        chunks: false              // 增加包信息
    },
    before(app) {                   // 访问Express App 对象，添加自定义中间件
        // 代理服务器
        if (process.env.NODE_ENV !== 'production') {
            app.use('/api/*', proxy({
                target: 'https://www.easy-mock.com/mock/59e6fb7d750b1a6a0b9ad955',  // 目标host
                secure: false,
            }))
        }
    }
}).listen(
    DEFAULT_PORT,
    DEFAULT_HOST,
    (err, result) => {
        if (err) return console.log(err)
        console.log(chalk.green(`开始监听: ${DEFAULT_PORT}端口, 监听地址:http://localhost:${DEFAULT_PORT}/`))
    }
)