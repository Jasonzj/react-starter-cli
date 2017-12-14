const fs = require('fs')

const deleteDir = (path) => {
    var files = []
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path)
        files.forEach(function (file, index) {
            var curPath = path + "/" + file
            if (fs.statSync(curPath).isDirectory()) {
                deleteDir(curPath)
            } else {
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(path)
    }
}

module.exports = deleteDir