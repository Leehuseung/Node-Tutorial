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


/**
 * class
 */
class Circle {
    constructor(center,radius) {
        this.center = center;
        this.radius = radius;
    }
    //prototype 메서드
    area() {
        return Math.PI*this.radius*this.radius;
    }
}
let c = new Circle({x:0, y:0},2);
console.log(c.area());


/**
 * 접근자
 * get,set 키워드를 활용해 게터와 세터를 만들수 있다.
 *
 * static을 이용해 정적 메서드를 작성할 수 있다.
 */
class Person {
    constructor(name) {
        this.name = name;
        Person.personCount++;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
    static count() {
        return Person.personCount;
    }
    toString(){
        return 'circle';
    }
}
Person.personCount = 0;


/**
 * extends를 이용한 상속
 *
 * super를 이용한 슈퍼타입 메서드 호출
 */
class Ball extends Circle {
    move(dx,dy) {
        this.center.x += dx;
        this.center.y += dy;
    }
    toString(){
        let str = super.toString();
        return str.replace('cicle','ball');
    }
}
let ball = new Ball({x:0, y:0},2);
console.log(ball.toString());






