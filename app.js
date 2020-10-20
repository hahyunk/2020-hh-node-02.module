const path = require('path');//상수선언 const 배열 , 객체 , 함수
const express = require('express');

//const dt = require('./modules/sample');
//console.log(dt.nowDateIso());
//console.log(dt.nowDateKorean());

//비구조화 할당
const { nowDateIso, nowDateKorean } = require('./modules/sample');
console.log( nowDateIso() );
console.log( nowDateKorean() );
