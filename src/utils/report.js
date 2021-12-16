

const fs = require('fs');
const path = require('path');

try {
    // read contents of the file
    const data = fs.readFileSync(path.resolve(__dirname, './standard/Log_2021_12_14.txt'), 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    // print all lines
    console.log(lines)

    const shutDownWithOKEX = [];

    lines.forEach((item, index) =>{
        if(item.indexOf('OKEX服务器的') !== -1) shutDownWithOKEX.push(lines[index - 1].match(/\[ (\S*)/)[1] + ' ' + lines[index - 1].match(/(\S*) ]/)[1])
    })
    console.log(shutDownWithOKEX)
    // lines.forEach((line) => {
    //     console.log(line);
    // });
} catch (err) {
    console.error(err);
}
