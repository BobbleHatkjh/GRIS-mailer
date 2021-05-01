const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;

/** 监听端口 */
Koa.Listen(8010);

/** 捕获请求 */
Koa.GET((param) => {
    let url = param.url;
    let request = param.request;
    // let token = param.token;
    let query = request.query;
    console.log(url,'============\n', param.request.body, param.method);
    return {
        status: 200,
        msg: {
            url,
            query,
            req: param.request.body,
            data: '收到啦'
        }
    }
})
// Send()
// daily revenue  日报营收
