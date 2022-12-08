/**
 * 이터레이터와 관련된 for/of문
 */

/**
 * 이터레이션은 반복처리라는 뜻
 */
let a = [1,2,3];
a.forEach(v => console.log(v));

/**
 * 이터레이터
 * 배열은 Symbol.iterator 메서드를 가지고 있다.
 * next를 호출할 때마다 iterator result라는 객체를 반환한다.
 */
let b = [1,2,3];
let iterator = a[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


/**
 * 반복가능 객체와 for/of문
 * for/of문은 a 이터레이터의 next 메서드를 순회할 때마다 매번 호출한다.
 * 이터레이터의 반복처리를 단순하게 할 수 있다.
 *
 * for/of문은 두가지 조건을 만족하는 객체를 반복 처리한다.
 * Symbol.iterator 메서드 갖고 있음.
 * Symbol.iterator는 반환값으로 이터레이터를 반환.
 * Arraym String, TypedArray, Map, Set등은 가능하다.
 */
a = [1,2,3];
for(let v of a) {
    console.log(v);
}

