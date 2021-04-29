
const Koa = require('koa2');
const Send = require('./utils/mailer').Send;
// const GET = require('./utils/server').GET;
const app = new Koa();

// GET(app);
app.use(async (ctx) => {

    let url = ctx.url;
    let request = ctx.request;
    let query = request.query;

    const a = {
        url,
        request,
        query
    };
    console.log(url, url === '/')
    ctx.body = {
        status: 200,
        msg: a
    }
})

app.listen(8010, () => {
    console.log('running...')
})

// Send()
