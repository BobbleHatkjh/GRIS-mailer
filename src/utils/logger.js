// 用来生成日志的

const fs = require('fs');
const path = require('path');

module.exports.Log = new class {
    logName  // 日志地址
    options  // 读写配置
    constructor() {
        this.logName = path.resolve(__dirname, '../log/test_2.txt');
        this.options = {
            flags: 'a',
            encoding: 'utf8'
        }
    }

    Write(data = {filename: this.logName, content: '123'}) {
        fs.writeFile(this.logName, data.content, this.options, (err) => {
            if (err) throw err;
            console.log('write complete')
        })
    }

    Read(address = '../log/test_2.txt') {
        return new Promise((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, address), (err, data) => {
                if (err) reject(err);
                // resolve(JSON.parse(data.toString()))
                resolve(data)
            })
        })
    }
}

