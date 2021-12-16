const fs = require('fs');
const path = require('path');

const head = fs.readFileSync(path.resolve(__dirname, './head.html'), 'utf-8');
const tail = fs.readFileSync(path.resolve(__dirname, './tail.html'), 'utf-8')
const title = (title) => {return `<div style="
box-shadow: 0 0 20px #66ccff8f;
background-color: #FAFEFF;
width: 600px;
border-radius: 16px;
margin: 20px auto 20px auto;
padding: 32px 40px;
font-weight: bolder;
line-height: 46px;
font-size: 41px;
background: url('https://raw.githubusercontent.com/BobbleHatkjh/VUE-Brick/master/static/banner.svg') no-repeat center center;
background-position: center;
background-size: 680px;">${title}</div>`}
const content = (content) => `<div style="width: 640px;padding: 0 20px;margin: auto;min-height: 242px;">${content}</div>`
const inscribe = (inscribe) => `<div style="
width: 640px;
margin: 20px auto;
border-radius: 16px;
padding: 20px;
box-shadow: 0 0 20px #66ccff8f;
font-size: 16px;
line-height: 20px;
font-weight: 600;
background: url('https://raw.githubusercontent.com/BobbleHatkjh/VUE-Brick/master/static/grass.svg') no-repeat center center;
background-position: 0% 68%;
background-size: 680px;">${inscribe}</div>`


// 周报日报之类的class
class Report {

    /**
     * @param title 标题，在横线上左侧的部分
     * @param extra 额外的部分，在横线右侧的部分
    */
    title = (param) => `<div style="display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 60px;
        width: 100%;
        font-size: 20px;"><p style="margin: 0">${param.title}</p><p style="margin: 0">>${param.extra || ''}</p></div>`;

    billing = (param) => {
        let _billing_ = '';
        param.map(()=>{
            _billing_ += ''
        })
    }
    
}

const _r_ = new Report()



/** 邮件的拼接 */
module.exports.Join = (param) => {
    return head + title(param.title) + content(param.content) + inscribe(param.inscribe) + tail
}


/** 周报，月报 之类的邮件内容 */
module.exports.ReportContent = (params) => {

    let ans = '';
    params.map((item) => {
        ans += _r_.title(item);
        ans += _r_[item.type](item.data);
    })
    return head + _r_.title({title: '123', extra: '233333'}) + tail
}



// 周报内容
const params = [
    {
        title: 'Billing Revenue',
        extra: '测试',
        type: 'billing',
        data: [{
            start_time: '2021/12/3 13:11:55',
            start_price: '61,020',
            end_time: '2021/12/3 19:11:55',
            end_price: '63,020',
            way: 'buy'
        },{
            start_time: '2021/12/3 13:11:55',
            start_price: '61,020',
            end_time: '2021/12/3 19:11:55',
            end_price: '63,020',
            way: 'buy'
        }]
    }, {
        title: 'Aurora Project',
        aurora: [
            
        ]
    }
]

// console.log('rc', ReportContent(params))

