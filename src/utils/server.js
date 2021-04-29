
module.exports.GET = (app, getList) => {

    for(const GET_ITEM in getList){
        app.get('/', (req, res) => {
            console.log(req.query);
            res.send('返回值-test')
        });
    }

}
