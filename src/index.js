const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;
const Log = require('./utils/logger').Log;

// Log.Write({
//     filename: '10_9',
//     content: '[1231312312312]',
//     time: '2021/10/9 19:00'
// })


// 发送邮件
Koa.Post('/mail', async (ctx) => {
    // console.log('##mail##', ctx.request.body);
    Send(ctx.request.body)
    return {
        msg: 'mail send'
    }
})

// 写入日志
Koa.Post('log/write', async (ctx) => {
    return {
        msg: Log.Write(ctx.request.body)
    }
})


// 读取日志
Koa.Post('/log/read', async (ctx) => {
    return {
        data: await Log.Read()
    }
})



/** 监听端口 */
Koa.Listen(8010);












// daily revenue  日报营收
