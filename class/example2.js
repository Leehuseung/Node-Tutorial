/**
 * 함수를 이용한 생성자
 */


let Rectangle = function(w,h) {
    this.w = w;
    this.h = h;
};
//프로토타입 메서드
Rectangle.prototype.getArea = function() {
    return this.w * this.h;
};
//스태틱 메서드
Rectangle.isRectangle = function(instance) {
    return instance instanceof  Rectangle &&
        instance.w > 0 && instance.h > 0;
};

let rect1 = new Rectangle(3,4)
console.log(rect1.getArea());  // 12
//오류가 발생한다. rect1에서 해당 메서드를 검색했는데 없고, rect1.__proto__에도 없으며 rect1.__proto__.__proto__에도 없다.
//인스턴스에서 직접 접근할 수 없는 메서드를 스태틱 메서드라고 한다.
// console.log(rect1.isRectangle(rect1)); 오류발생
console.log(Rectangle.isRectangle(rect1));


