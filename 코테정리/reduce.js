// 합구하기

let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, e) => total + e, 0); // 두번째는 초기값
let mul = numbers.reduce((acc, cur) => acc * cur, 1);
console.log(sum);
console.log(mul);
