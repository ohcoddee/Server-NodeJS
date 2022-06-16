const express = require('express');
// express 함수를가져온다.

const app = express();
// express 함수를 실행시켜서 앱을 가져온다.

const port = 80;
// 사용할 포트 번호

// 라우트(route)
// '/'(root) 경로로 접속했을 때, 응답할 내용
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get('/categories', (req, res) => {
    const categories = [{
        id: 0,
        name: "목록",
        description: "SSG.COM Home"
    }, {
        id: 1,
        name: "패션의류",
        description: "Clothes Page"
    }, {
        id: 2,
        name: "패션잡화",
        description: "Fashion Accessories Page"
    }, {
        id: 3,
        name: "스포츠/레저",
        description: "Sports and Leisure Page"
    }, {
        id: 4,
        name: "생필품",
        description: "Daily Supplies Page"
    }, {
        id: 5,
        name: "주방, 생활용품",
        description: "Kitchenware Page"
    }, {
        id: 6,
        name: "가구",
        description: "Furniture Page"
    }, {
        id: 7,
        name: "음식",
        description: "Foods Page"
    }, {
        id: 8,
        name: "반려동물 용품",
        description: "Pet Supplies Page"
    }];
    res.send(categories);
});

app.use(express.static(__dirname + "/"));
// 서버가 정상적으로 열렸을 때, 실행할 내용.
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});