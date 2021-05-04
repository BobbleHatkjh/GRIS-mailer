const Koa = require('koa2');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

/** 请求检查 */
const requestCheck = (param) => {
    if (param.method !== 'POST') {
        param.status = 403;
        return {
            msg: '使用了错误的请求方式，请使用POST方式请求'
        }
    }
    if (param.headers['token'] !== 'gris_token') {
        param.status = 401;
        return {
            msg: '未检查到正确的token或token缺失，请联系管理员'
        }
    }
    return false
}

/** 错误代码 */
module.exports.errorCode = {
    401: 'token不正确，请联系管理员',
    403: '使用了错误的请求方式，请使用POST方式请求'
}

module.exports.koaCore = new class {
    Capture (func) {
        app.use(bodyParser());
        app.use(async (param) => {
            param.set("Access-Control-Allow-Origin", "*");
            param.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
            param.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type, token");
            param.set("Content-Type", "application/json;charset=utf-8");
            param.set("Access-Control-Allow-Credentials", true);  // 允许携带请求头
            param.set("Access-Control-Max-Age", 86400);  // 跨域预检时间
            // let postData = await parsePostData(param);
            // console.log(postData)
            param.body = requestCheck(param) || func(param)

        })
    }

    Listen (port, func = () => console.log('====[[ MAIL START ]]====')) {
        app.listen(port, func)
    }
}
