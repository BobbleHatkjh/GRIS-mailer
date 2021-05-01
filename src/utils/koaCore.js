const Koa = require('koa2');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 获取post的data
const parsePostData = (ctx) => {
    return new Promise((resolve, reject) => {
        try{
            let postData = '';
            ctx.req.addListener('data', (data) => {
                postData += data;
            });
            ctx.req.on('end', () => {
                resolve(postData)
            })
        } catch (error) {
            reject(error)
        }
    })
}

// string => json
const parseQueryString = (query) => {
    let queryData = {};
    let queryStringList = query.split('&');
    for (let [index, query] of queryStringList.entries()) {
        let itemList = query.split('=');
        queryData[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return queryData
}

module.exports.koaCore = new class {
    GET (func) {
        app.use(bodyParser());
        app.use(async (param) => {
            param.set("Access-Control-Allow-Origin", "*");
            param.set("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS, DELETE");
            param.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
            param.set("Content-Type", "application/json;charset=utf-8");
            param.set("Access-Control-Allow-Credentials", false);

            // let postData = await parsePostData(param);
            // console.log(postData)
            // param.postData = postData;
            param.body = func(param)

            // param.set('Cache-Control', 'max-age=60')

        })
    }

    CAPTURE() {

    }

    Listen (port, func = () => console.log('====[[ MAIL START ]]====')) {
        app.listen(port, func)
    }
}
