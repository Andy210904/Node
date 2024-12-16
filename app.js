const os = require('os')

const user = os.userInfo()
const uptime = os.uptime()
// console.log(user)
// console.log(uptime)
// console.log(os)

const path = require('path')
console.log(path.sep)

//sync
const fs = require('fs')
console.log(fs.readFileSync('./text.txt','utf8'))
console.log(fs.writeFileSync('./test.1.txt',`Hello world ${fs.readFileSync('./text.txt')}`,{flag : 'a'}))

//Async