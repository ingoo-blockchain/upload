const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const multer = require('multer')
const path = require('path')
// path
// os 

// request message -> body 영역을 읽는 방법을 2가지를 
// application/x-www-from ~~
// application/json
// mulpart/form-data 외부라이브러리 multer -> 미들웨어역활해주는 아이.
// 멀터가 함수인데 애를 객체로 만드는 작업을 해줘야함.
// 그리고 그 객체안에 3가지정도 속성이있는데 그 3가지가 미들웨어다.
// single -> 파일하나만 업로드할떄.

app.use(express.json())
app.use(express.urlencoded({extended:true,}))

const upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,done)=>{
            done(null, 'uploads/')
        },
        filename:(req,file,done)=>{
            const ext = path.extname(file.originalname)
            const filename = path.basename(file.originalname,ext) + '_' + Date.now() + ext
            done(null,filename) // 1 error , 내가 실제로 저장할 파일명
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
}) // 객체변환

app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
    watch:true
})

app.use((req,res,next)=>{
    req.ingoo = 'ingoo'
    next()
})

app.get('/single',(req,res)=>{
    console.log(req.ingoo)
    res.render('single')
})

app.get('/axios',(req,res)=>{
    res.render('axios')
})

app.get('/array',(req,res)=>{
    res.render('array')
})

app.get('/uploads',(req,res)=>{
    res.render('uploads')
})

app.post('/upload',upload.single('upload'),(req,res)=>{
    console.log(req.file)
    console.log(req.body)
    res.send('upload')
})

app.post('/upload2',upload.array('upload'),(req,res)=>{
    console.log(req.files)
    console.log(req.body)
    res.send('upload')
})

app.post('/upload3',upload.fields([{name:'upload1'},{name:'upload2'},{name:'upload3'},{name:'upload4'}]),(req,res)=>{
    console.log(req.files.upload1)
    console.log(req.files.upload2)
    console.log(req.files.upload3)
    console.log(req.files.upload4)
    console.log(req.body)
    res.send('upload')
})


app.listen(3000,()=>{
    console.log('서버시작')
})
