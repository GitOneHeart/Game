'use strict'
setTimeout(()=>{
    console.log('我是退出')
},5000)
// 退出
process.exit()
// 干掉别人(应用)
process.kill()