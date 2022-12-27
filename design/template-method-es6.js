/**
 * 출처
 * https://devnest.tistory.com/2
 *
 */
class HouseTemplate {
    buildHouse() {
        this.buildFoundations();
        this.buildPillars();
        this.buildWalls();
        this.buildWindows();
    }

    buildFoundations() {
        console.log('Building Foundations')
    }

    buildWindows() {
        console.log('Building Windows')
    }

    buildWalls() {
        throw new Error('You have to build your own walls')
    }

    buildPillars() {
        throw new Error('You have to build your own pillars')
    }
}

class WoodenHouse extends HouseTemplate {

    buildWalls() {
        console.log('Building Walls for wooden house')
    }

    buildPillars() {
        console.log('Building Pillars for wooden house')
    }
}

class GlassHouse extends HouseTemplate {
    constructor() {  //빈값이기 때문에 사실 없어도 상관이 없다..this에서 쓴다면 확장은 할 수 있을듯..
        super();
    }

    buildWalls() {
        console.log('Building Walls for glass house')
    }

    buildPillars() {
        console.log('Building Pillars for glass house')
    }
}

const woodenHouse = new WoodenHouse();
const glassHouse = new GlassHouse();
woodenHouse.buildHouse();
glassHouse.buildHouse();

/* (Console output)
Building Foundations
Building Pillars for wooden house
Building Walls for wooden house
Building Windows



Building Foundations
Building Pillars for glass house
Building Walls for glass house
Building Windows
*/