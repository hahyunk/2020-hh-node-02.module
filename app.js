const path = require('path');//상수선언 const 배열 , 객체 , 함수
const express = require('express');

//const dt = require('./modules/sample');
//console.log(dt.nowDateIso());
//console.log(dt.nowDateKorean());
const notFound = path.join(__dirname, './public/404.html');

//비구조화 할당
const { moment, nowDateIso, nowDateKorean } = require('./modules/date');
//console.log( nowDateIso() );
//console.log( nowDateKorean() );
//console.log( moment );

const app = express();

app.listen(3000, () => { console.log('http://127.0.0.1:3000');}); //서버 구동시켜준다
//커서가 안떨어진다 서버가 돌고 있는것.

app.use('/', express.static(path.join(__dirname, './public')));  //현재폴더의 퍼블릭! index.html 을 찾는다
//없으니까 밑으로가!

app.get('/',(req, res)=>{

    res.send('<h1>whoareyou</h1>');
});

//여기까지 왔다는건 리스폰스를 받지 못했다는것
//무조건 들어와 ~~
/*
app.use((req,res) => {
    res.redirect('/404.html');//경로를 다시한번 리스폰스 //경로를 다시 리퀘스트! 서버가 리스폰스!

});
*/

app.use((req,res) => {
    res.sendFile(notFound);
});