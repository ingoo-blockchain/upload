// 내부 라이브러리 
// Nodejs 내컴퓨터를 조작하는데 Javascript 조작한다.

const os = require('os')

console.log( os.cpus().length )
// console.log( os.cpus() )

console.log( os.platform() )
console.log( os.homedir() ) // ~
console.log( os.hostname() )

console.log( os.freemem() )