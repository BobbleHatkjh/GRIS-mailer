const nodemailer = require('nodemailer');
const Join = require('../standard/join').Join;

/**
 * 邮箱权限校验
*/
let mailTransport = nodemailer.createTransport({
    // host: 'smtp.qq.email',
    service: 'qq',
    secure: true,	// 安全方式发送
    auth: {
        user: '3206633623@qq.com',
        pass: 'vxkrtgkmaaskdebb' // SMTP 授权码
    }
});

/** 邮件信息
 * 给谁发 发给谁 发什么
 */
const standardMailOptions = {
    from: '"GRIS" <3206633623@qq.com>',
    to: '<3206633623@qq.com>',
    subject: 'GRIS - MailSystem',
    text: 'GRIS自动邮件系统 标准邮件',
    // html: fs.readFileSync(path.resolve(__dirname, '../standard/standardContent.html'), 'utf-8')
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
    const mailHtml = Join(message);
    // console.log(mailHtml);
    transport.sendMail(message ? {...mailOptions, html: mailHtml, cc: message.CC || ''} : mailOptions, (err,info) => {
        if (err) {
            console.log('==========[[[[[[ GRIS\'s Mail ]]]]]]==========\n', err, '\n================== 发送失败 ==================');
        } else {
            console.log('==========[[[[[[ GRIS\'s Mail ]]]]]]==========\n', info, '\n================== 发送成功 ==================');
        }
    });
}
