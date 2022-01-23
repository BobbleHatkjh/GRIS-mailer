#!/usr/bin/env node

const exec = require('child_process').exec
const ENV = require('../package.json')

// 核心模块npm包名
const coreAdr = 'maig'
// 核心模块npm版本号
const edition = ENV.version


const run = (param) => {

    // 打包
    if (param === 'build') {
        exec('rm -rf build && mkdir build && cp -r src build/ && cp -r package.json build/ && cp -r config.js build/', (error, stdout, stderr) => {
            if (error) {
                console.log(error.message)
                
                process.exit();
            }
            console.log('打包完毕');
            process.exit();
        })
    }

    // 上传
    if (param === 'upload') { //      服务器地址 xx.xx.xx.xx
        exec('scp -r build/* root@' + Config.ServerConfig.extranet_address + ':/root/GRIS-Mailer', (error, stdout, stderr) => {
            if (error) {
                console.log(error.message)
                if (error.message.indexOf('File exists') !== -1) {
                    console.log('已有文件夹');
                }
                process.exit();
            }
            console.log('上传完毕');
            process.exit();
        })
    }

};

// 捕获命令
// console.log(process.env.npm_lifecycle_event, Config.ServerConfig.extranet_address);
// console.log(process.argv.slice(2));

run(process.env.npm_lifecycle_event);
