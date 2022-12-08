/**
 * 심벌은 새롭게 추가된 원시 값이다. 자기 자신을 제외한 그 어떤 값과도 다른 유일무의한 값이다.
 */

//호출할 때마다 새로운 값을 만든다.
let sym1 = Symbol();
let sym2 = Symbol();
console.log('sym1 == sym2',sym1 == sym2); //false


//인수전달시 심벌의 설명을 덧붙일 수 있다.
let HOME = Symbol('HOME');
console.log(HOME.toString());


//오셀로 같은 게임의 상태값을 숫자 대신 심벌로 표현할 수 있다.
let NONE = Symbol('none');
let WHITE = Symbol('white');
let BLACK = Symbol('black');


//Symbol.for 활용시 문자열과 연결된 심벌 생성
let sym3 = Symbol.for('club');
let sym4 = Symbol.for('club');
console.log('sym3 == sym4',sym3 == sym4); //true, 매번 새로운 값이 아님
let sym5 = Symbol('club');
console.log('sym4 == sym5',sym4 == sym5); //false




