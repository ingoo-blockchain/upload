const path = require('path')

// C:\program files (x86)\ ...
// /home/ingoo/..

// let dir 
// if( os.platform() === 'windows'){
//     dir = 'C:\\'
// } else if (os.platform() === 'darwin') {
//     dir = os.homedir()+'/'
// }

console.log(__dirname) // pwd 절대경로

// \ingoo.js
// /ingoo.js
// /home/ingoo/workspace/220315/multer/ingoo.js
let dir1 = path.join(__dirname,'/ingoo.js') // 절대경로 무시
let dir2 = path.resolve(__dirname,'..','/ingoo.js') // 절대경로 존중
console.log(dir1,dir2)

// 4가지 케이스를 알아볼겁니다
// server.js js 라는 텍스트만 얻고싶다.

let str = 'server.js'

console.log( str.split('.')[1] )

console.log( path.extname('server.js') )
console.log( path.dirname('/home/ingoo/workspace/220315/multer/ingoo.js') )
console.log( path.basename('/home/ingoo/workspace/220315/multer/ingoo.js') )
console.log( path.basename('/home/ingoo/workspace/220315/multer/ingoo.js','.js') )





