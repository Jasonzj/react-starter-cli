const path = require('path')
const download = require('download-git-repo')

module.exports = (target) => {
    target = path.join(target || '.', '.download-temp')
    return new Promise((resolve, reject) => {
        download('https://github.com:jasonzj/react-starter',
            target, { clone: true }, (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(target)
                }
            })
    }) 
}