'use strict'

// 异步写文件

// 声明fs 文件读写
/* const fs = require('fs')
// 引入路径的核心对象
const path = require ('path')
// 写路径
let writePath = path.resolve('./WRITEME.txt')
// 写文件
fs.writeFile(writePath,'我正咋测试',{flag:'a'},err=>{
    console.log('呜呜呜呜呜呜呜呜')
}) */
// --------------------->>>>>>>>>>>>>>>>>>>>>
// 同步写文件
const path = require('path')
const fs = require('fs')

let myPath = path.resolve('./WRITEME.txt')

let myData = fs.writeFileSync(myPath,'我就是想写点东西',{flag:'a'},err=>{
    console.log('我成功了')
})