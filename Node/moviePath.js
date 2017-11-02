const fs = require('fs')

let moviePath = 'C:\\Program Files\\feiq\\Recv Files\\03-全屏\\套路VS反套路，看看谁比谁更牛！_短视频_发现好电影_当贝影视快搜.mp4'
let moviePath2= 'F:\\迅雷下载\\12.会声会影X5_爱的告白\\bj星星.mp4'


// 异步读文件
/* fs.readFile(moviePath,'utf8',(err,data)=>{
    console.log('WE输了...')
})
console.log('游戏开始...');
console.log('现在比分1比1...');
console.log('双方经济逐渐拉开...');
console.log('we经济落后...') */


// 同步读文件
fs.readFileSync(moviePath2)
console.log('来年再战吧 China')
console.log('电竞喳喳流')
console.log('电竞喳喳流')
console.log('电竞喳喳流')
console.log('电竞喳喳流')
console.log('电竞喳喳流')


