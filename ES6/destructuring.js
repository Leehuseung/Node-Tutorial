/**
 * 배열의 비구조화 할당
 */

//기본 사용법
let [a,b] = [1,2];
console.log('a',a,'b',b);

[a,b] = [2*a, 2*b];
console.log('a',a,'b',b);

[a,b] = [b,a]; //교환
console.log('a',a,'b',b);

//나머지 요소
let [c,d, ...rest] = [1,2,3,4];
console.log(rest); // [3,4]

//기본값을 할당할 수도 있다.
[a=0,b=1,c=2] = [1,2];

//함수로 비구조화 할당받을 수도 있다.
function rot(x,y, theta) {
    let s = Math.sin(theta);제
    let c = Math.cos(theta);
    return [c*x - s*y , s*x + c*y]; //배열을 반환한다.
}
let [e,f] = rot(1,2,Math.PI/3);


/**
 * 객체의 비구조화 할당
 */
let user = {name: 'Mike', age: 30};
let {name, age} = user; //name과 age 순서가 바뀌어도 동일하다.
console.log('name',name,'age',age);

//새로운 변수 이름을 할당할 수도 있다.
let {name:userName, age: userAge} = user;
console.log('userName',userName,'userAge',userAge);

//기본값을 할당할 수 있다.
let {name2, age2, gender='mail'} = user;
console.log('gender',gender);





