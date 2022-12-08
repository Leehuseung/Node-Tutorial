let nunu = {
    q : 'consume',
    w : 'snowball'
}

let garen = {
    q : 'strike',
    w : 'courage'
}

//function을 이용한 객체 생성
function Machine(q,w){
    this.q = q;
    this.w = w;
}

let nunu2 = new Machine('consume','snowball');
let garen2 = new Machine('strike','courage');
// console.log(nunu2);
// console.log(garen2);


//ES6 class 문법을 이용한 객체 생성
class Machine2 {
    constructor(q,w) {
        this.q = q;
        this.w = w;
    }
}
let nunu3 = new Machine2('consume','snowball');
let garen3 = new Machine2('strike','courage');
console.log(nunu3);
console.log(garen3);
