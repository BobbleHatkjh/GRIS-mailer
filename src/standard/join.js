const fs = require('fs');
const path = require('path');

const head = fs.readFileSync(path.resolve(__dirname, './head.html'), 'utf-8');
const tail = fs.readFileSync(path.resolve(__dirname, './tail.html'), 'utf-8')
const title = (title) => {return `<div class="title">${title}</div>`}
const content = (content) => `<div class="content">${content}</div>`
const inscribe = (inscribe) => `<div class="inscribe">${inscribe}</div>`


/** 邮件的拼接 */
module.exports.Join = (param) => {
    return head + title(param.title) + content(param.content) + inscribe(param.inscribe) + tail
}
