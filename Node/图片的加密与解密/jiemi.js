// 'use strict'
const  fs = require('fs')
const path = require('path')

// 读取文件
fs.readFile(path.resolve('./加密mm.jpg'),(err,data)=>{
    if(err)throw err
        for(let i =  0 ; i < data.length ; i++){
            data[i]=data[i]^5201314
        }
        fs.writeFile(path.resolve('./解密mm.jpg'),data,err=>{
            if(err)throw err
                console.log('解密成功')
        })
})