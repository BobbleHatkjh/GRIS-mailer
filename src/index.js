
const Send = require('./utils/mailer').Send;

const Koa = require('./utils/koaCore').koaCore;

Koa.Listen(8010);

Koa.GET((param) => {
    let url = param.url;
    let request = param.request;
    let query = request.query;

    return {
        status: 200,
        msg: {
            url,
            query
        }
    }
})



// // 跨域
// app.use(
//     cors({
//         origin: (ctx) => { //设置允许来自指定域名请求
//             return "*"
//         },
//         maxAge: 5, //指定本次预检请求的有效期，单位为秒。
//         credentials: true, //是否允许发送Cookie
//         allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法'
//         allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
//         exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
//     })
// );

// Send()
