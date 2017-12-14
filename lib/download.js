const path = require('path')
const download = require('download-git-repo')
const ora = require('ora')

module.exports = (target) => {
    target = target || '.'
    return new Promise((resolve, reject) => {
        const loading = ora('Download template...')
        loading.start()
        download('https://github.com:jasonzj/react-starter',
            target, { clone: true }, (err) => {
                if (err) {
                    loading.fail()
                    reject(err)
                } else {
                    loading.succeed()
                    resolve(target)
                }
            })
    }) 
}