'use strict'
 
/* console.log('a.js这就被加载了')
  
// 响应b模块
let b =  require('./b.js')

console.log( b ) */
// -------------------------------
// 类似于window的顶级对象 共享
global.num = 10 
let b = require('./b.js')

console.log(global.num)     //20