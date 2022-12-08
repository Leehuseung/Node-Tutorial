/**
 * 보간 표현식
 */

let a = 2;
let b = 3;
console.log(`${a} + ${b} = ${a+b}`);

let now = new Date();
console.log(`today is ${now.getMonth()+1} / ${now.getDate()} `);



/**
 * 태그함수
 */
//이스케이프 시퀀스 문자를 그대로 출력하려면 템플릿 리터럴 앞에 String.raw를 붙인다.
let c = String.raw`a b c d \n e f g`;
console.log(c);