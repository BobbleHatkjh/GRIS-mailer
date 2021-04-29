const Koa = require('koa2');

const app = new Koa();

module.exports.koaCore = new class {
    GET (func) {
        app.use(async (param) => {
            // param.set('Cache-Control', 'max-age=60')
            param.body = func(param)
        })
    }

    POST () {

    }

    Listen (port, func = () => console.log('====[[ GRIS START ]]====')) {
        app.listen(port, func)
    }
}
