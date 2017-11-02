console.log(process.argv)

'use strict'
let sum = 0 
// 使用process.argv的属性
let  num1 = process.argv[2] - 0 
let  num2 = process.argv[3] - 0 
let  num3 = process.argv[4] - 0 
sum = num1+num2+num3
console.log('您计算的结果是'+sum)