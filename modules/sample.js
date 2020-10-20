const moment = require('moment');//node modules에서 moment불러오기

//ISO Date 2020-10-20 21:04:10
//var nowDate = moment().format('YYYY-MM-DD HH:mm:ss');


//var nowDate2 = moment().format('YYYY년 MM월 DD일 HH시 mm분');

const nowDateIso = () =>{

    return moment().format('YYYY-MM-DD HH:mm:ss');
}

const nowDateKorean = () =>{

    return moment().format('YYYY년 MM월 DD일 HH시 mm분 ss초');
}

/*
const obj{
    moment : moment,
    nowDateIso : nowDateIso,
    nowDateKorean : nowDateKorean
}*/
//키랑 밸류값 같으면 es6 에서는 생략이 가능해진다

/*
const obj = {
    moment,
    nowDateIso,
    nowDateKorean
}

module.exports = obj;*/

module.exports = {moment, nowDateIso, nowDateKorean} 