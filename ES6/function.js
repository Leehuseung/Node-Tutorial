/**
 * 화살표 함수 표현식
 */
let square = (x) => { return x*x; };
//인수가 하나면 괄호 생략 가능
let square2 = x => { return x*x; };

//인수가 여러개일 경우
let a = (b,c,d) => {};

//함수몸통이 return 뿐이면 중괄호와 return 키워드 생략 가능
let square3 = x => x*x;

//함수 몸통이 객체로 반환이면 ()로 묶어야한다.
let b = (c,d) => ({x:a, y:b});

//즉시실행 함수도 가능하다.
(x => x*x)(3);

/**
 * this의 값이 다르다.
 */
var obj = {
    say : function() {
        console.log(this); //object
        let f = function(){ console.log(this) };
        f(); // global
        let g = () => console.log(this);
        g(); // object
    }
}
// obj.say();

//arguments 변수가 없다
// let c = () => console.log(arguments);

//생성자로 사용할 수 없다.
let Person = (name) => { this.name = name;}
// let jon = new Person('s'); //오류발생

/**
 * 가변인자
 * 함수의 인자에 ...을 입력하면 그만큼의 인수를 배열로 받는다. (화살표 함수도 가능하다.)
 */
function d(a,b, ...args) {
    console.log(a,b,args);
}
d(1,2,3,4,5,6);


/**
 * 기본값
 * b=1처럼 대입연산자를 통해 undefined 대신 기본값을 넣어줄 수 있다.
 */
function mul(a, b=1) {
    return a * b;
}
console.log(mul(3)); //3
console.log(mul(3,2)); //6