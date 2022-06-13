const express = require('express')
// express 함수를가져온다.

const app = express()
// express 함수를 실행시켜서 앱을 가져온다.

const port = 80
// 사용할 포트 번호

// 라우트(route)
// '/'(root) 경로로 접속했을 때, 응답할 내용
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.get('/category', (req, res) => {
    res.sendFile(__dirname + "/category.html");
})
app.get('/item', (req, res) => {
    res.sendFile(__dirname + "/item.html");
})
app.get('/contents', (req, res) => {
    res.sendFile(__dirname + "/contents.html");
})

// 서버가 정상적으로 열렸을 때, 실행할 내용.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})