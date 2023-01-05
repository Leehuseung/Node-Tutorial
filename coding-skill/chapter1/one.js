/**
 * 변하지 않는 값은 const로 사용하자.
 *
 * 대부분의 케이스에서 const가 좋다.
 *
 * 객체,배열, 컬렉션 형태는 확신할 수 없다.
 */

//두 코드를 봐보자. 어느게 읽기가 쉽나?
// -> a가 훨씬 쉽다. 변하지 않는다는 전제하에 코드를 볼 수 있음.
function a() {
    const taxRate = 0.1;
    const total = 100 + (100 * taxRate);
    return `구매 금액 : ${total}`;
}

function b() {
    var taxRate = 0.1;
    var total = 100 + (100 * taxRate);
    return `구매 금액 : ${total}`;
}

