// 用来记录数据的

const fs = require('fs');
const path = require('path');

module.exports.Recorder = new class {
    logName  // 数据地址
    options  // 读写配置
    constructor() {
        this.logName = path.resolve(__dirname, '../recorder/Data_.txt');
        this.options = {
            flags: 'a',
            encoding: 'utf8'
        }
    }

    /**
     * data
     *  filename 文件名  *主要是用来区分时间的*
     *  content  数据内容
     *  time     时间戳
    */
    Write(data = { filename: 'log_origin', content: 'test', time: 'time' }) {
        // console.log(this.logName);
        const content = typeof data.content === 'string' ? data.content : JSON.stringify(data.content)
        fs.appendFileSync(
            this.logName.split('.txt')[0] + data.filename + '.txt',
            `\n\n[ ${data.time.split(' ')[0]} ------------------------------- ${data.time.split(' ')[1]} ]\n` + content, 
            this.options,
            (err) => { if (err) throw err }
        )
        console.log('write complete');
        return {
            msg: 'write complete'
        }
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

