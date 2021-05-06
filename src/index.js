const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;
const Log = require('./utils/logger').Log;

/** 捕获请求 */
// Koa.Get('/index',async (ctx) => {
//     console.log('get', 'index', '123');
//     return {
//         msg: 'get test'
//     }
// })

Koa.Post('/mail',async (ctx) => {
    let url = ctx.url;
    let request = ctx.request;
    let token = ctx.headers['token'];
    let query = request.query;
    console.log('post', url, token, ctx.method);
    return {
        msg: 'mail'
    }
})
Koa.Post('/log/read', async (ctx) => {
    return {
        data: await Log.Read()
    }
})


/** 监听端口 */
Koa.Listen(8010);

// Log.Write('123');
// console.log(Log.Read())

// Send()
// daily revenue  日报营收
