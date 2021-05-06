const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;



/** 捕获请求 */
// Koa.Get('/index',async (ctx) => {
//     console.log('get', 'index', '123');
//     return {
//         msg: 'get test'
//     }
// })

Koa.Post('/mail',(ctx) => {
    let url = ctx.url;
    let request = ctx.request;
    let token = ctx.headers['token'];
    let query = request.query;
    console.log('post', url, token, ctx.method);

    return {
        msg: 'post-test'
    }
})


/** 监听端口 */
Koa.Listen(8010);

// Send()
// daily revenue  日报营收
