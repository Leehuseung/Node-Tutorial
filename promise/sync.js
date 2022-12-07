//콜백지옥이란..
/*
setTimeout(() => {
    console.log(1);
    setTimeout(() => {
        console.log(2);
        setTimeout(() => {
            console.log(3);
        },1000);
    },1000);
},1000);
*/



//Promise를 사용하는 기본적인 방법
function timer(time){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve(time);
        },time);
    });
}
//만든 imter를 이용해 콜백지옥을 벗어나보자.
/*
timer(1000).then((time) => {
    console.log('time',제time);
    //1초를 더하려면
    return timer(time+1000);
}).then(time => {
    console.log('time',time);
    return timer(time+1000);
}).then(time => {
    console.log('time',time);
});
*/



//await가 붙어있는 Promise를 리턴하는 함수는 async키워드가 있는 함수 안에서 실행되어야 한다.
//async를 함수앞에 붙힐경우 함수는 Promise를 리턴한다.
async function run() {
    //await사용시 then 안의 첫번째 파라미터는 timer의 리턴값으로 사용할 수 있다.
    console.log('start');
    let time = await timer(1000);
    console.log('time',time);
    time = await timer(time+1000);
    console.log('time',time);
    time = await timer(time+1000);
    console.log('time',time);
    console.log('end');
    return time;
}
console.log('parent start');
//run은 Promise를 반환한다.
//run에서 time을 리턴해준다면 사용할 수 있음.
run().then(time => console.log('parent end',time));
