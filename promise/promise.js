/**
 * fetch와 Promise에대해 알아본다.
 */
let fetched = fetch('https://jsonplaceholder.typicode.com/posts');
//fetch는 Promise를 리턴한다.
// console.log('fetched',fetched);

//성공시 then이 실행됨
fetched.then(response => {
    // console.log('response',response);
});
//실패시 catch가 실행됨.
fetched.catch(r => {
    // console.log('result',r);
});


//fetch는 Promise를 리턴하기 때문에 체이닝을 활용한다.명
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // console.log('response',response);
    }).catch(reason => {
       // console.log(reason);
    });

//response를 json으로 변환하면 Promise를 반환한다.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        //response.json 또한 Promise를 리턴한다. Promise는 json text를 자바스크립트의 데이터타입으로 컨버팅하는 Promise이다.
        //컨버팅 작업이 끝나면 then을 호출한다.
        response.json().then(res => {
            // console.log('res',res);
        });
    }).catch(reason => {
        // console.log(reason);
    });

//좀더 깔끔하게 표현하자.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.json();
    }).catch(reason => {
        console.log(reason);
    }).then(response => {
        console.log(response);
    });