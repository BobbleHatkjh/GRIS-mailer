const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;
const Log = require('./utils/logger').Log;

// Koa.Get('/index',async (ctx) => {
//     console.log('get', 'index', '123');
//     return {
//         msg: 'get test'
//     }
// })

// 邮件
Koa.Post('/mail', async (ctx) => {
    let url = ctx.url;
    let request = ctx.request;
    let token = ctx.headers['token'];
    let query = request.query;
    console.log('##mail##', ctx.request.body);
    Send(ctx.request.body)
    return {
        msg: 'mail'
    }
})

// 读取日志
Koa.Post('/log/read', async (ctx) => {
    return {
        data: await Log.Read()
    }
})

// 写入日志
Koa.Post('log/write', async () => {

})


/** 监听端口 */
Koa.Listen(8010);

// const demo = async () => {
//     const a = await Log.Read('../log/test.md');
//     console.log(a)
// }
// demo();


// Log.Write('123');
// console.log(Log.Read())

// Send()
// daily revenue  日报营收
