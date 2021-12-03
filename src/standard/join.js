const fs = require('fs');
const path = require('path');

const head = fs.readFileSync(path.resolve(__dirname, './head.html'), 'utf-8');
const tail = fs.readFileSync(path.resolve(__dirname, './tail.html'), 'utf-8')
const title = (title) => {return `<div style="
box-shadow: 0 0 20px #66ccff8f;
background-color: #FAFEFF;
width: 600px;
margin: 20px auto 20px auto;
padding: 32px 40px;
font-weight: bolder;
line-height: 46px;
font-size: 41px;
background: url('https://raw.githubusercontent.com/BobbleHatkjh/VUE-Brick/master/static/banner.svg') no-repeat center center;
background-position: center;
background-size: 680px;">${title}</div>`}
const content = (content) => `<div style="width: 640px;padding: 0 20px;margin: auto;min-height: 242px;">${content}</div>`
const inscribe = (inscribe) => `<div style="
width: 640px;
margin: 20px auto;
padding: 20px;
box-shadow: 0 0 20px #66ccff8f;
font-size: 16px;
line-height: 20px;
font-weight: 600;
background: url('https://raw.githubusercontent.com/BobbleHatkjh/VUE-Brick/master/static/grass.svg') no-repeat center center;
background-position: 0% 68%;
background-size: 680px;">${inscribe}</div>`


/** 邮件的拼接 */
module.exports.Join = (param) => {
    return head + title(param.title) + content(param.content) + inscribe(param.inscribe) + tail
}


/** 周报，月报 之类的邮件内容 */
module.exports.ReportContent = () => {
    return ''
}