const Koa = require('koa2');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

const app = new Koa();


/** 错误代码 */
module.exports.errorCode = {
    401: 'token不正确，请联系管理员',
    403: '使用了错误的请求方式，请使用POST方式请求'
}

module.exports.koaCore = new class {
    router;
    constructor() {
        app.use(bodyParser()); // 获取post data内容
        app.use(async (ctx, next) => { // 跨域配置
            ctx.set("Access-Control-Allow-Origin", "*");
            ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
            ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type, token");
            ctx.set("Content-Type", "application/json;charset=utf-8");
            ctx.set("Access-Control-Allow-Credentials", true);  // 允许携带请求头
            ctx.set("Access-Control-Max-Age", 86400);  // 跨域预检时间
            if (ctx.method === 'OPTIONS') { // 处理OPTIONS请求
                ctx.body = '';
                ctx.status = 204;
            } else {
                await next();
            }
        })
        this.router = new Router();
    }

    Get (address, func) {
        this.router.get(address, async (ctx) => {
            ctx.body = func(ctx)
        })
    }

    Post (address, func) {
        this.router.post(address, async (ctx) => {
            ctx.body = requestCheck(ctx) || func(ctx)
        })
    }

    Listen (port, func = () => console.log('====[[ MAIL START ]]====')) {
        app.use(this.router.routes()).use(this.router.allowedMethods());
        app.listen(port, func)
    }
}

/** 请求检查 */
const requestCheck = (param) => {
    if (param.headers['token'] !== 'gris_token') {
        param.status = 401;
        return {
            msg: '未检查到正确的token或token缺失，请联系管理员'
        }
    }
    return false
}
