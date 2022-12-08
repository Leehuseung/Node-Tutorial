/**
 * 제네레이터
 * 반복 가능한 이터레이터를 값으로 반환한다.
 * 작업의 일시정지와 재시작이 가능하며 자신의 상태를 관리한다.
 */

/**
 * generator는 function* 문으로 정의한 함수하고, 하나 이상의 yield 표현식을 포함한다.
 * gen 함수는 호출해도 바로 실행하지 않고 이터레이터를 반환한다.
 * 이터레이터 result의 value 프로퍼티 값으로 yield 표현식이 저장된다.
 * done 프로퍼티를 가진 이터레이터를 반환하고 처리를 일시정지한다. 완료시 프로퍼티값이 true로 변한다.
 */
function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
let iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }

