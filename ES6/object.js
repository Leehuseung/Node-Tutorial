/**
 * 프로퍼티 이름으로 심볼 사용
 *
 * 심벌은 유일무이한 값이다. 함수 안에서 심벌을 생성하여 그것을 속성 이름으로 사용하고 프로퍼티에 값을 할당하면
 * 함수바깥에서 접근할 수 없다. 명시적으로 객체 프로퍼티를 숨길 수 있다.
 */
let obj = {};
let s = Symbol("sym");
obj[s] = 'symtext';
console.log(obj);
console.log(obj[s]); //symtext
// console.log(obj[Symbol("sym")]); //undefined


/**
 * 객체 리터럴에 추가된 기능
 */
//계산된 프로퍼티 값을 프로퍼티 이름으로 사용할 수 있다. { [계산식]: value }
let prop = 'name';
let i = 1;
let obj2 = { [prop+i] : 'tom'};
console.log(obj2);

//변수와 프로퍼티가 같을때 축약 표기할 수 있담
// { p : p } -> { p }
let p = 2;
let obj3 = {p};
console.log(obj3); // { p : 2 }

//함수 약식 표기
let person = {
    name : 'jjj',
    sayHello() { console.log('hello'); }
}

