// 用来记录数据的

const fs = require('fs');
const path = require('path');

module.exports.Recorder = new class {
    logName  // 数据地址
    options  // 读写配置
    constructor() {
        this.logName = path.resolve(__dirname, '../recorder/Data_.json');
        this.options = {
            flags: 'a',
            encoding: 'utf8'
        }
    }

    /**
     * data
     *  filename 文件名     *主要是用来区分时间的*   例: 20xx_xx_xx
     *  content  数据内容
     *  time     时间戳
    */
    Write(data = { filename: 'data_origin', content: 'test' }) {
        // console.log(this.logName);
        const content = typeof data.content === 'string' ? data.content : JSON.stringify(data.content);
        !fs.existsSync(path.resolve(__dirname, '../recorder')) && fs.mkdirSync(path.resolve(__dirname, '../recorder')); // 如果没有log文件夹
        // writeFileSync 写入     
        // appendFileSync 追加
        fs.writeFileSync(
            this.logName.split('.json')[0] + data.filename + '.json',
            content, 
            this.options,
            (err) => { if (err) throw err }
        )
        console.log('write complete');
        return {
            msg: '[data] write complete'
        }
    }

    Read(address = 'data_origin') {
        return new Promise((resolve, reject) => {
            fs.readFile(path.resolve(__dirname, `../recorder/Data_${address}.json`), (err, data) => {
                if (err) reject(err);
                // resolve(JSON.parse(data.toString()))
                resolve(JSON.parse(data))
            })
        })
    }
}

