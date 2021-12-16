const Send = require('./utils/mailer').Send;
const Koa = require('./utils/koaCore').koaCore;
const Log = require('./utils/logger').Log;
const Recorder = require('./utils/dataRecorder').Recorder

// const ReportContent = require('./standard/join').ReportContent

// Recorder.Write({
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
Koa.Post('/log/write', async (ctx) => {
    return await Log.Write(ctx.request.body)
})


// 读取日志
Koa.Post('/log/read', async (ctx) => {
    return {
        data: await Log.Read()
    }
})

// 写入数据
Koa.Post('/data/write', async (ctx) => {
    return await Recorder.Write(ctx.request.body)
})

// 周报、月报之类的
Koa.Post('/report', async (ctx) => {

})



/** 监听端口 */
Koa.Listen(8010);

// const a = async () =>{
//     console.log(await Recorder.Read('2021_10_11'))
// }
// a();



// daily revenue  日报营收
