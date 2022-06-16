const body = document.body;
const indexMenu = document.querySelector(".index-menu");
const ul = document.createElement("ul");
body.appendChild(ul);

//categories로 요청을 보내고 응답이 오면 전달받은 내용을 보내기 위해서 text() 함수를 실행한다.
//response는 응답에 대한 모든 정보를 가지고 있는 객체다.
fetch("/categories")
    .then(response => { return response.text(); })
    .then(text => {
        //JSON.parse() 함수는 string -> JS에서 사용할 수 있도록 파싱 작업을 해주는 함수
        const posts = JSON.parse(text);
        posts.forEach(element => {
            console.log(element);

            const name = element.name;
            const categoriesID = element.id;
            const description = element.description;

            const li = document.createElement("li");
            li.innerText = name;

            const h2 = document.createElement("h2");
            h2.innerText = categoriesID;

            const p = document.createElement("p");
            p.innerText = description;

            ul.appendChild(li);
            ul.appendChild(h2);
            ul.appendChild(p);
        });
    });