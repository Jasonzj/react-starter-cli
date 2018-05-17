const Metalsmith = require('metalsmith')
const Handlebars = require('handlebars')

module.exports = (metadata = {}, src, dest = '.') => {
    if (!src) return Promise.reject(new Error(`无效的source：${src}`))
    
    return new Promise((resolve, reject) => {
        Metalsmith(process.cwd())
            .metadata(metadata)
            .clean(false)
            .source(src)
            .destination(dest)
            .use((files, metalsmith, done) => {
                const meta = metalsmith.metadata()
                const package = files['package.json']
                const t = package.contents.toString()
                package.contents = new Buffer(Handlebars.compile(t)(meta))
                
                done()
            }).build(err => {
                err ? reject(err) : resolve()
            })
    })
}