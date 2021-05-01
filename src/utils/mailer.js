const nodemailer = require('nodemailer');
const Join = require('../standard/join').Join;
const fs = require('fs');
const path = require('path');

let mailTransport = nodemailer.createTransport({
    // host: 'smtp.qq.email',
    service: 'qq',
    secure: true,	// 安全方式发送
    auth: {
        user: '3206633623@qq.com',
        pass: 'vxkrtgkmaaskdebb' // SMTP 授权码
    }
});

/** 基准测试邮件 */
const standardMailOptions = {
    from: '"GRIS" <3206633623@qq.com>',
    to: '<3206633623@qq.com>',
    bcc: '密送',
    subject: 'GRIS - Standard',
    text: 'GRIS自动邮件系统 标准邮件',
    html: fs.readFileSync(path.resolve(__dirname, '../standard/standardContent.html'), 'utf-8')
};

/** 邮件内容解析 */
const mailAnalysis = (param) => {

}

/** 邮件发送的方法
 * @param mailOptions 邮件的设置项（给谁发发给谁发什么）
 * @param transport 发送邮件的基底（邮箱账户，授权码）
 * @param message 直传信息，不为undefined时用默认配置发送这一内容
 * */
module.exports.Send = (message = undefined, mailOptions = standardMailOptions, transport = mailTransport) => {
    const newMailOption = Join(mailOptions);
    transport.sendMail(message ? {...mailOptions, html: message} : mailOptions,(err,info) => {
        if (err) {
            console.log('==========[[[[[[ GRIS\'s Mail ]]]]]]==========\n', err, '\n================== 发送失败 ==================');
        } else {
            console.log('==========[[[[[[ GRIS\'s Mail ]]]]]]==========\n', info, '\n================== 发送成功 ==================');
        }
    });
}
