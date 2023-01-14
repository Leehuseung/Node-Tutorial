/**
 * 배열로 컬렉션을 다뤄보자.
 */
const staff = [
    {
      name: 'Wesley',
      position: 'musician'
    },
    {
        name: 'Davis',
        position: 'engineer'
    }
];

(function () {
    console.log(staff.filter(data => data.name === 'Wesley'));  //Wesley만 포함
    console.log(staff.filter(data => data.name === ''));        //길이 0
    console.log(staff.filter(data => data.name !== ''));        //둘다 포함.
})();

/**
 * includes로 존재여부를 확인하라.
 */