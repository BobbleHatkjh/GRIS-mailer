const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;

/** 监听端口 */
Koa.Listen(8010);

/** 捕获请求 */
Koa.GET((param) => {
    let url = param.url;
    let request = param.request;
    let query = request.query;
    console.log(url, param.method);
    return {
        status: 200,
        msg: {
            url,
            query,
            data: '收到啦'
        }
    }
})
// Send()
// daily revenue  日报营收
