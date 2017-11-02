'use strict'

// 异步读文件

/* // 声明fs 文件读写
const fs = require('fs')
// 引入路径的核心对象
const path = require ('path')
// 使用核心对象的api -> 
// 使用相对娶绝对
let readFilePath = path.resolve('./README.txt')
// 读取文件
fs.readFile(readFilePath,'utf8',(err,data)=>{
    console.log(data)
}) */

// ----------------------------------+

// 同步读文件

// 路径核心
const path = require('path')
// 文件核心
const fs = require('fs')

// 读文件的操作路径
let myPath = path.resolve('./README.txt')
// 同步读取文件
let myData=fs.readFileSync(myPath,'utf8');
console.log(myData)
