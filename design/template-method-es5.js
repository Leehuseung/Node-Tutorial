/**
 * ES5 Template Method
 */
let _extends = this._extends || function(d,b) {
    for(let p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function _(){this.constructor = d;}
    _.prototype = b.prototype;
    d.prototype = new _();
};

/**
 * AddIngredients, Stir, Ferment, Test, Testing Passed 함수가 존재한다.
 *
 * BasicBeer를 만들어서 AddIngredients,TestingPassed 는 추상 메서드 개념으로 사용을 막아놨다.
 *
 * 상속후에 구현해 CalsBugBeer처럼 사용할 수 있다.
 */
let BasicBeer = (function() {
    function BasicBeer(){
    }

    BasicBeer.prototype.Create = function(){
        this.AddIngredients();
        this.Stir();
        this.Ferment();
        this.Test();
        if(this.TestingPassed()) {
            this.Distribute();
        }
    }

    BasicBeer.prototype.AddIngredients = function() {
        throw "Add ingredients needs to be implements";
    }

    BasicBeer.prototype.Stir = function() {
        //나무숟가락으로 15번을 젓는다.
    };

    BasicBeer.prototype.Ferment = function() {
        //30일 동안 놓아둔다.
    };

    BasicBeer.prototype.Test = function(){
        //맥주 한 컵을 따라 맛을 본다.
    };

    BasicBeer.prototype.TestingPassed = function() {
        throw "Conditions to pass a test must be implemented";
    };

    BasicBeer.prototype.Distribute = function() {
        //50L 통으로 맥주를 옮긴다.
    };
    return BasicBeer;
})();


/**
 *  구체 클래스를 만들어보자.
 */
let CalsBugBeer = (function(_super) {
    _extends(CalsBugBeer,_super);

    function CalsBugBeer(){
        _super.apply(this,arguments);
    }

    CalsBugBeer.prototype.AddIngredients = function() {
        console.log('calsbug 재료를 추가');
    }
    CalsBugBeer.prototype.TestingPassed = function() {
        console.log('calsbug 맛을 내야함');
    }
    return CalsBugBeer;
})(BasicBeer);


let calsBug = CalsBugBeer.create();
