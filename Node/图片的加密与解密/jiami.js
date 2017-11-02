// 'use strict'
// 文件核心路径
const fs = require('fs')
// 路径的核心对象
const path = require('path')
// 我的路径
let myPath = path.resolve('./mm.jpg')
// 读取文件
fs.readFile(myPath, 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    for (let i = 0; i < data.length; i++) {
        // 使用抑或运算  进行加密
        data[i] = data[i] ^ 5211314
    }
    fs.writeFile(path.resolve('./加密mm.jpg'), data, err => {
        if (err) {
            throw err
        }
        console.log('加密成功')
    })
})
