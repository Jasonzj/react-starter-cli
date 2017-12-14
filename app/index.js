const path = require('path')
const fs = require('fs')
const glob = require('glob')
const chalk = require('chalk')
const util = require('util')
const download = require('./download')
const deleteDir = require('./deleteDir')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts)

        const dirs = glob.sync('+(src)')
        if (dirs.includes('src')) {
            this.log(chalk.bold.green('资源已经初始化，退出...'))
            process.exit(1)
        }
    }

    writing () {
        this.log(chalk.bold.green('资源初始化...'))
        const cb = this.async()
        download('temp')
            .then(target => {
                const directory = (src, name) => (
                    this.fs.copy(
                        path.join(target, src),
                        this.destinationPath(name)
                    )
                )

                fs.mkdirSync(this.destinationPath('public'))
                fs.mkdirSync(this.destinationPath('mock'))
                directory('src', 'src')
                directory('test', 'test')
                directory('.babelrc', '.babelrc')
                directory('README.md', 'README.md')
                directory('server.js', 'server.js')
                directory('index.html', 'index.html')
                directory('package.json', 'package.json')
                directory('.eslintrc.json', '.eslintrc.json')
                directory('webpack.base.js', 'webpack.base.js')
                directory('webpack.prod.js', 'webpack.prod.js')
                directory('webpack.dev.js', 'webpack.dev.js')
                deleteDir(this.destinationPath('temp'))
                cb()
            })
            .catch(err => console.error(err))
    }

    install () {
        this.log(chalk.bold.green('安装npm包依赖...'))
        this.installDependencies({
            bower: false,
            npm: true,
            yarn: false
        })
    }

    end () {
        this.log(chalk.bold.green('您的react应用构建完毕'))
    }
}