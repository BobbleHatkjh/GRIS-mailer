const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;

/** 监听端口 */
Koa.Listen(8010);

/** 捕获请求 */
Koa.Capture((param) => {
    let url = param.url;
    let request = param.request;
    let token = param.headers['token'];
    let query = request.query;
    console.log(url, token, param.method);

    return {
        config: {
            token: 'new_token'
        },
        data: {
            url,
            req: param.request.body,
            data: '收到啦'
        }
    }
})
// Send()
// daily revenue  日报营收
