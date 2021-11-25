const fs = require('fs');
const path = require('path');

const head = fs.readFileSync(path.resolve(__dirname, './head.html'), 'utf-8');
const tail = fs.readFileSync(path.resolve(__dirname, './tail.html'), 'utf-8')
const title = (title) => {return `<div style="display: flex;justify-content: flex-start;align-items: center;height: 120px;width: 680px;margin: -140px auto 20px auto;font-weight: bolder;"><p style="font-size: 41px;margin-left: 36px;">${title}</p></div>`}
const content = (content) => `<div style="width: 680px;margin: auto;min-height: 242px;">${content}</div>`
const inscribe = (inscribe) => `<div style="position: relative;display: flex;align-items: center;justify-content: flex-start;width: 680px;height: 80px;margin: 20px auto;z-index: 99;"><p style="margin-left: 36px;font-weight: 600;">${inscribe}</p></div>`


/** 邮件的拼接 */
module.exports.Join = (param) => {
    return head + title(param.title) + content(param.content) + inscribe(param.inscribe) + tail
}
