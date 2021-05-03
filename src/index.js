const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;
const errorCode = require('./utils/koaCore').errorCode;

/** 监听端口 */
Koa.Listen(8010);

/** 捕获请求 */
Koa.GET((param) => {
    let url = param.url;
    let request = param.request;
    let token = param.headers['token'];
    let query = request.query;
    console.log(url, token, param.method);
    // if (param.token !== 'POST') return {
    //     status: 401,
    //     msg: 'token不正确，请联系管理员'
    // }
    // if (token.method !== 'POST') return {
    //     status: 403,
    //     msg: '使用了错误的请求方式，请使用POST方式请求'
    // }
    return {
        status: 200,
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
