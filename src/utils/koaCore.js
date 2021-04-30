const Koa = require('koa2');

const app = new Koa();

module.exports.koaCore = new class {
    GET (func) {
        app.use(async (param) => {
            param.set("Access-Control-Allow-Origin", "*");
            param.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
            param.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
            param.set("Content-Type", "application/json;charset=utf-8");
            param.set("Access-Control-Allow-Credentials", false)
            // param.set('Cache-Control', 'max-age=60')
            param.body = func(param)
        })
    }

    CAPTURE() {

    }

    Listen (port, func = () => console.log('====[[ MAIL START ]]====')) {
        app.listen(port, func)
    }
}
