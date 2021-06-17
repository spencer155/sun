const title = require('./title')
const text = require('./text.txt')
console.log(title)
console.log(text.default)
// 不设置 默认都是production
console.log(process.env.NODE_ENV)