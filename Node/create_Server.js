// http的核心对象
const http = require('http')
// 创建服务
let server  = http.createServer((req,res)=>{
    res.end('ok')
})
// 通过服务器对象,监听端口+ip
server.listen('8080','127.0.0.1',()=>{
    console.log('服务器启动在8080端口')
})

